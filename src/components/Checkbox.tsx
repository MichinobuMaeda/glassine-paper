import React, { type CSSProperties } from 'react';

/**
 * Checkbox component props
 */
export interface CheckboxProps {
  id?: string;
  name?: string;
  error?: boolean;
  disabled?: boolean;
  value?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: CSSProperties;
}

/**
 * Material Design 3 Checkbox component.
 *
 * @param {CheckboxProps} props The properties for the Checkbox component.
 * @param {string} [props.id] The ID of the checkbox.
 * @param {string} [props.name] The name of the checkbox.
 * @param {boolean} [props.error=false] Whether the checkbox is in an error state.
 * @param {boolean} [props.disabled=false] Whether the checkbox is disabled.
 * @param {string} [props.value] The value of the checkbox.
 * @param {boolean} [props.checked] Whether the checkbox is checked.
 * @param {Function} [props.onChange] The function to call when the checkbox state changes.
 * @param {string} [props.className] Additional CSS classes to apply to the checkbox.
 * @param {CSSProperties} [props.style] Additional CSS styles to apply to the checkbox.
 * @returns {JSX.Element} A Checkbox component.
 *
 * @example
 * <Checkbox
 *  id="my-checkbox"
 *  name="my-checkbox"
 *  checked={isChecked}
 *  onChange={(e) => setIsChecked(e.target.checked)}
 * />
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  error = false,
  disabled = false,
  value,
  checked,
  onChange,
  className = '',
  style = {},
}) => {
  const classes = ['checkbox', error ? 'error' : '', className];

  return (
    <input
      id={id}
      name={name}
      className={classes.join(' ')}
      type="checkbox"
      style={style}
      disabled={disabled}
      value={value}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
