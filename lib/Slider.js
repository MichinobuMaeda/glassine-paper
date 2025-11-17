import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useRef } from 'react';
/**
 * Material Design 3 Slider component
 *
 * @param props SliderProps
 * @param props.id Input id attribute
 * @param props.name Input name attribute
 * @param props.min Minimum value
 * @param props.max Maximum value
 * @param props.step Step increment
 * @param props.value Current value
 * @param props.size Size variant: 'xs', 'sm', or 'md'
 * @param props.orientation Orientation: 'horizontal', 'top-bottom', or 'bottom-top'
 * @param props.showValueIndicator Show value indicator
 * @param props.options Datalist options array
 * @param props.options[].value Option value
 * @param props.options[].key Optional unique key for the option
 * @param props.onChange Change handler function
 * @param props.className Additional CSS class names
 * @param props.style Custom inline styles
 * @returns JSX.Element
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
 *   style={{ width: "16em"}}
 * />
 *
 * @example
 * <Slider
 *   value={30}
 *   orientation="top-bottom"
 *   size="md"
 *   style={{ height: "16em"}}
 * />
 */
export const Slider = ({ id, name, min = 0, max = 100, step = 1, value, size = 'sm', orientation = 'horizontal', showValueIndicator = false, options = [], onChange, className = '', style = {}, }) => {
    const sliderRef = useRef(null);
    const inputRef = useRef(null);
    // Update progress and datalist on value change
    useEffect(() => {
        if (!sliderRef.current || !inputRef.current)
            return;
        const valueRatio = (value - min) / (max - min);
        const ratio = `${max > min ? valueRatio * 100 : 0}%`;
        sliderRef.current.style.setProperty('--slider-progress', ratio);
        Object.entries(style).forEach(([key, value]) => {
            sliderRef.current?.style.setProperty(key, value);
        });
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
    }, [value, min, max, options, style, showValueIndicator]);
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
    const datalistId = id ? `${id}-list` : undefined;
    return (_jsxs("div", { ref: sliderRef, className: classes, children: [showValueIndicator && _jsx("div", { className: "value-indicator", children: value }), _jsx("input", { ref: inputRef, id: id, name: name, type: "range", min: min, max: max, step: step, value: value, onChange: handleInput, list: datalistId }), options.length > 0 && (_jsx("div", { className: "datalist", id: datalistId, children: options.map((option) => (_jsx("div", { className: "option", "data-key": option.key ?? option.value, "data-value": option.value }, option.key ?? option.value))) }))] }));
};
export default Slider;
//# sourceMappingURL=Slider.js.map