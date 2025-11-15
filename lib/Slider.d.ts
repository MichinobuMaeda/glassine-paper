import React from 'react';
/**
 * Datalist option
 */
export interface SliderOption {
    value: number;
    key?: string;
}
/**
 * Slider component props
 *
 * @param props SliderProps
 * @returns JSX.Element
 *
 * @example
 * // Basic slider
 * const [value, setValue] = useState(50);
 * <Slider value={value} onChange={(v) => setValue(v)} />
 *
 * @example
 * // Slider with value indicator and options
 * <Slider
 *   value={50}
 *   min={0}
 *   max={100}
 *   step={10}
 *   showValueIndicator
 *   options={[
 *     { value: 0 },
 *     { value: 50 },
 *     { value: 100 }
 *   ]}
 * />
 *
 * @example
 * // Vertical slider
 * <Slider value={30} orientation="top-bottom" width="16em" />
 */
export interface SliderProps {
    /** Input id attribute */
    id?: string;
    /** Input name attribute */
    name?: string;
    /** Minimum value */
    min?: number;
    /** Maximum value */
    max?: number;
    /** Step increment */
    step?: number;
    /** Current value */
    value: number;
    /** Size variant */
    size?: 'xs' | 'sm' | 'md';
    /** Orientation */
    orientation?: 'horizontal' | 'top-bottom' | 'bottom-top';
    /** Show value indicator */
    showValueIndicator?: boolean;
    /** Datalist options */
    options?: SliderOption[];
    /** Width or height (depending on orientation) */
    width?: string;
    /** onChange handler */
    onChange?: (value: number) => void;
    /** Additional CSS class names */
    className?: string;
}
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
export declare const Slider: React.FC<SliderProps>;
export default Slider;
//# sourceMappingURL=Slider.d.ts.map