import React, { type ReactNode, type CSSProperties } from 'react';

/**
 * TextField component props
 */
export interface TextFieldProps {
  /** Variant of the text field */
  variant?: 'filled' | 'outlined';
  /** Input type */
  type?: 'text' | 'email' | 'number' | 'password' | 'tel' | 'url';
  /** Label text */
  label: string;
  /** Placeholder text (should match label) */
  placeholder?: string;
  /** Current value */
  value?: string | number;
  /** Error state */
  error?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Supporting text or error message */
  supportingText?: string;
  /** Leading icon */
  leadingIcon?: ReactNode;
  /** Trailing icon */
  trailingIcon?: ReactNode;
  /** Width style */
  width?: string;
  /** onChange handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** onBlur handler */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /** onFocus handler */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /** Input name attribute */
  name?: string;
  /** Input id attribute */
  id?: string;
  /** Additional CSS class names */
  className?: string;
  /** Custom inline styles */
  style?: CSSProperties;
}

/**
 * Material Design 3 TextField component
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
  variant = 'outlined',
  type = 'text',
  label,
  value,
  error = false,
  disabled = false,
  supportingText,
  leadingIcon,
  trailingIcon,
  width,
  onChange,
  onBlur,
  onFocus,
  name,
  id,
  className = '',
  style,
}) => {
  const classes = ['textfield', variant, error ? 'error' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} style={width ? { width } : undefined}>
      {leadingIcon && leadingIcon}
      <label>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={label}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        name={name}
        id={id}
        style={style}
      />
      {trailingIcon && trailingIcon}
      {supportingText && <div>{supportingText}</div>}
    </div>
  );
};

export default TextField;
