import React, { type CSSProperties } from 'react';

/**
 * Radio component props
 */
export interface RadioProps {
  id?: string;
  name?: string;
  disabled?: boolean;
  value?: string;
  checked?: boolean;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  className?: string;
  style?: CSSProperties;
}

/**
 * Material Design 3 Radio button component.
 *
 * @param {RadioProps} props The properties for the Radio component.
 * @param {string} [props.id] The ID of the radio button.
 * @param {string} [props.name] The name of the radio button.
 * @param {boolean} [props.disabled=false] Whether the radio button is disabled.
 * @param {string} [props.value] The value of the radio button.
 * @param {boolean} [props.checked] Whether the radio button is checked.
 * @param {(e: React.MouseEvent<HTMLInputElement>) => void} [props.onClick] The function to call when the radio button is clicked.
 * @param {string} [props.className] Additional CSS classes to apply to the radio button.
 * @param {CSSProperties} [props.style] Additional CSS styles to apply to the radio button.
 * @returns {JSX.Element} A Radio component.
 *
 * @example
 * <Radio
 *  id="my-radio"
 *  name="my-radio-group"
 *  value="option1"
 *  checked={selectedValue === 'option1'}
 *  onClick={() => setSelectedValue('option1')}
 * />
 */
export const Radio: React.FC<RadioProps> = ({
  id,
  name,
  disabled = false,
  value,
  checked,
  onClick,
  className = '',
  style = {},
}) => {
  const classes = ['radio', className];

  return (
    <input
      id={id}
      name={name}
      className={classes.join(' ')}
      type="radio"
      style={style}
      disabled={disabled}
      value={value}
      checked={checked}
      onClick={(event) => (onClick ? onClick(event) : undefined)}
    />
  );
};

export default Radio;
