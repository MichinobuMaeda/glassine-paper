import React, { type ReactNode, type CSSProperties } from 'react';

/**
 * TextField component props
 */
export interface TextFieldProps {
  id?: string;
  name?: string;
  variant?: 'filled' | 'outlined';
  type?: 'text' | 'email' | 'number' | 'password' | 'tel' | 'url';
  label: string;
  placeholder?: string;
  value?: string | number;
  error?: boolean;
  disabled?: boolean;
  supportingText?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  style?: CSSProperties;
}

/**
 * Material Design 3 TextField component
 *
 * @param {TextFieldProps} props TextFieldProps
 * @param {string} [props.id] Input id attribute
 * @param {string} [props.name] Input name attribute
 * @param {('filled' | 'outlined')} [props.variant] Variant of the text field: 'filled' or 'outlined'
 * @param {('text' | 'email' | 'number' | 'password' | 'tel' | 'url')} [props.type] Input type: 'text', 'email', 'number', 'password', 'tel', or 'url'
 * @param {string} props.label Label text
 * @param {string} [props.placeholder] Placeholder text (should match label)
 * @param {(string | number)} [props.value] Current value
 * @param {boolean} [props.error] Error state
 * @param {boolean} [props.disabled] Disabled state
 * @param {string} [props.supportingText] Supporting text or error message
 * @param {React.ReactNode} [props.leadingIcon] Leading icon element
 * @param {React.ReactNode} [props.trailingIcon] Trailing icon element
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} [props.onChange] Change handler
 * @param {(e: React.FocusEvent<HTMLInputElement>) => void} [props.onBlur] Blur handler
 * @param {(e: React.FocusEvent<HTMLInputElement>) => void} [props.onFocus] Focus handler
 * @param {string} [props.className] Additional CSS class names
 * @param {React.CSSProperties} [props.style] Custom inline styles
 * @returns {JSX.Element}
 *
 * @example
 * <TextField
 *   variant="filled"
 *   label="Email"
 *   placeholder="Email"
 *   type="email"
 *   supportingText="Enter your email address"
 * />
 *
 * @example
 * <TextField
 *   variant="outlined"
 *   label="Password"
 *   placeholder="Password"
 *   type="password"
 *   error={true}
 *   supportingText="Password is required"
 * />
 */
export const TextField: React.FC<TextFieldProps> = ({
  id,
  name,
  variant = 'outlined',
  type = 'text',
  label,
  value,
  error = false,
  disabled = false,
  supportingText,
  leadingIcon,
  trailingIcon,
  onChange,
  onBlur,
  onFocus,
  className = '',
  style = {},
}) => {
  const classes = ['textfield', variant, error ? 'error' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} style={style}>
      {leadingIcon && leadingIcon}
      <label>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={label}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {trailingIcon && trailingIcon}
      {supportingText && <div>{supportingText}</div>}
    </div>
  );
};

export default TextField;
