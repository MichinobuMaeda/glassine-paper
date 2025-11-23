import React, { type CSSProperties } from 'react';
export interface SliderOption {
    value: number;
    key?: string;
}
export interface SliderProps {
    id?: string;
    name?: string;
    min?: number;
    max?: number;
    step?: number;
    value: number;
    displayValue?: string;
    size?: 'xs' | 'sm' | 'md';
    orientation?: 'horizontal' | 'top-bottom' | 'bottom-top';
    showValueIndicator?: boolean;
    options?: SliderOption[];
    onChange?: (value: number) => void;
    className?: string;
    style?: CSSProperties;
}
/**
 * Material Design 3 Slider component
 *
 * @param {SliderProps} props SliderProps
 * @param {string} [props.id] Input id attribute
 * @param {string} [props.name] Input name attribute
 * @param {number} [props.min] Minimum value
 * @param {number} [props.max] Maximum value
 * @param {number} [props.step] Step increment
 * @param {number} props.value Current value
 * @param {string} [props.displayValue] Display value at indicator
 * @param {('xs' | 'sm' | 'md')} [props.size] Size variant: 'xs', 'sm', or 'md'
 * @param {('horizontal' | 'top-bottom' | 'bottom-top')} [props.orientation] Orientation: 'horizontal', 'top-bottom', or 'bottom-top'
 * @param {boolean} [props.showValueIndicator] Show value indicator
 * @param {SliderOption[]} [props.options] Datalist options array
 * @param {number} props.options[].value Option value
 * @param {string} [props.options[].key] Optional unique key for the option
 * @param {Function} [props.onChange] Change handler function
 * @param {string} [props.className] Additional CSS class names
 * @param {React.CSSProperties} [props.style] Custom inline styles
 * @returns {JSX.Element}
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
export declare const Slider: React.FC<SliderProps>;
export default Slider;
//# sourceMappingURL=Slider.d.ts.map