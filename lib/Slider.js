import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useRef } from 'react';
/**
 * Material Design 3 Slider component
 *
 * @example
 * <Slider
 *   value={50}
 *   min={0}
 *   max={100}
 *   step={10}
 *   showValueIndicator
 *   options={[
 *     { value: 0 },
 *     { value: 25 },
 *     { value: 50 },
 *     { value: 75 },
 *     { value: 100 }
 *   ]}
 *   onChange={(value) => console.log(value)}
 * />
 *
 * @example
 * <Slider
 *   value={30}
 *   orientation="top-bottom"
 *   size="md"
 *   width="16em"
 * />
 */
export const Slider = ({ id, name, min = 0, max = 100, step = 1, value, size = 'sm', orientation = 'horizontal', showValueIndicator = false, options = [], width, onChange, className = '', }) => {
    const sliderRef = useRef(null);
    const inputRef = useRef(null);
    // Update progress and datalist on value change
    useEffect(() => {
        if (!sliderRef.current || !inputRef.current)
            return;
        const valueRatio = (value - min) / (max - min);
        const ratio = `${max > min ? valueRatio * 100 : 0}%`;
        sliderRef.current.style.setProperty('--slider-progress', ratio);
        // Update datalist options
        if (options.length > 0) {
            const datalistOptions = sliderRef.current.querySelectorAll('.option');
            datalistOptions.forEach((option) => {
                const optionValue = Number(option.getAttribute('value'));
                if (optionValue < value) {
                    option.classList.add('lower');
                }
                else {
                    option.classList.remove('lower');
                }
            });
        }
        if (showValueIndicator) {
            const indicator = sliderRef.current.querySelector('.value-indicator');
            if (indicator) {
                const inputRect = inputRef.current.getBoundingClientRect();
                const sliderRect = sliderRef.current.getBoundingClientRect();
                // Position the indicator
                indicator.style.left = `${(inputRect.left - sliderRect.left) * 3 + (inputRect.width - (inputRect.left - sliderRect.left) * 3) * valueRatio}px`;
            }
        }
    }, [value, min, max, options, showValueIndicator]);
    const handleInput = (e) => {
        const newValue = Number(e.target.value);
        if (onChange) {
            onChange(newValue);
        }
    };
    const classes = [
        'slider',
        size !== 'sm' ? size : '',
        orientation !== 'horizontal' ? orientation : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');
    const containerStyle = width
        ? orientation === 'horizontal'
            ? { width }
            : { height: width }
        : {};
    const datalistId = id ? `${id}-list` : undefined;
    return (_jsxs("div", { ref: sliderRef, className: classes, style: containerStyle, children: [showValueIndicator && _jsx("div", { className: "value-indicator", children: value }), _jsx("input", { ref: inputRef, id: id, name: name, type: "range", min: min, max: max, step: step, value: value, onChange: handleInput, list: datalistId }), options.length > 0 && (_jsx("div", { className: "datalist", id: datalistId, children: options.map((option) => (_jsx("div", { className: "option", "data-key": option.key ?? option.value, "data-value": option.value }, option.key ?? option.value))) }))] }));
};
export default Slider;
//# sourceMappingURL=Slider.js.map