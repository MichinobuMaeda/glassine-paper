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
  width?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  style?: CSSProperties;
}

/**
 * Material Design 3 TextField component
 *
 * @param props TextFieldProps
 * @param props.id Input id attribute
 * @param props.name Input name attribute
 * @param props.variant Variant of the text field: 'filled' or 'outlined'
 * @param props.type Input type: 'text', 'email', 'number', 'password', 'tel', or 'url'
 * @param props.label Label text
 * @param props.placeholder Placeholder text (should match label)
 * @param props.value Current value
 * @param props.error Error state
 * @param props.disabled Disabled state
 * @param props.supportingText Supporting text or error message
 * @param props.leadingIcon Leading icon element
 * @param props.trailingIcon Trailing icon element
 * @param props.width Width style
 * @param props.onChange Change handler
 * @param props.onBlur Blur handler
 * @param props.onFocus Focus handler
 * @param props.className Additional CSS class names
 * @param props.style Custom inline styles
 * @returns JSX.Element
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
  width,
  onChange,
  onBlur,
  onFocus,
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
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={label}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        style={style}
      />
      {trailingIcon && trailingIcon}
      {supportingText && <div>{supportingText}</div>}
    </div>
  );
};

export default TextField;
