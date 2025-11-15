import React, { useEffect, useRef, type CSSProperties } from 'react';

/**
 * Datalist option
 */
export interface SliderOption {
  value: number;
  key?: string;
}

/**
 * Slider component props
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
export const Slider: React.FC<SliderProps> = ({
  id,
  name,
  min = 0,
  max = 100,
  step = 1,
  value,
  size = 'sm',
  orientation = 'horizontal',
  showValueIndicator = false,
  options = [],
  width,
  onChange,
  className = '',
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update progress and datalist on value change
  useEffect(() => {
    if (!sliderRef.current || !inputRef.current) return;

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
        } else {
          option.classList.remove('lower');
        }
      });
    }

    if (showValueIndicator) {
      const indicator = sliderRef.current.querySelector(
        '.value-indicator'
      ) as HTMLDivElement;
      if (indicator) {
        const inputRect = inputRef.current.getBoundingClientRect();
        const sliderRect = sliderRef.current.getBoundingClientRect();

        // Position the indicator
        indicator.style.left = `${inputRect.left - sliderRect.left + inputRect.width * valueRatio}px`;
      }
    }
  }, [value, min, max, options, showValueIndicator]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const containerStyle: CSSProperties = width
    ? orientation === 'horizontal'
      ? { width }
      : { height: width }
    : {};

  const datalistId = id ? `${id}-list` : undefined;

  return (
    <div ref={sliderRef} className={classes} style={containerStyle}>
      {showValueIndicator && <div className="value-indicator">{value}</div>}
      <input
        ref={inputRef}
        id={id}
        name={name}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleInput}
        list={datalistId}
      />
      {options.length > 0 && (
        <div className="datalist" id={datalistId}>
          {options.map((option) => (
            <div
              key={option.key ?? option.value}
              className="option"
              data-key={option.key ?? option.value}
              data-value={option.value}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
