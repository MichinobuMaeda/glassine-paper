import React, { type ReactNode, type CSSProperties } from 'react';

/**
 * TextField component props
 */
export interface TextFieldProps {
  id?: string;
  name?: string;
  variant?: 'filled' | 'outlined';
  type?: 'text' | 'email' | 'number' | 'password' | 'tel' | 'url';
  label?: string;
  placeholder?: string;
  value?: string | number;
  lineCount?: number;
  error?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  supportingText?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFocus?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  className?: string;
  style?: CSSProperties;
  innerStyle?: CSSProperties;
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
 * @param {number} [props.lineCount] Number of lines for multiline input
 * @param {boolean} [props.error] Error state
 * @param {boolean} [props.readonly] Readonly state
 * @param {boolean} [props.disabled] Disabled state
 * @param {string} [props.supportingText] Supporting text or error message
 * @param {React.ReactNode} [props.leadingIcon] Leading icon element
 * @param {React.ReactNode} [props.trailingIcon] Trailing icon element
 * @param {Function} [props.onChange] Change handler
 * @param {Function} [props.onBlur] Blur handler
 * @param {Function} [props.onFocus] Focus handler
 * @param {string} [props.className] Additional CSS class names
 * @param {React.CSSProperties} [props.style] Custom inline styles
 * @param {React.CSSProperties} [props.innerStyle] Custom inline styles for input element
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
  label = '',
  value,
  lineCount = 1,
  error = false,
  readonly = false,
  disabled = false,
  supportingText,
  leadingIcon,
  trailingIcon,
  onChange,
  onBlur,
  onFocus,
  className = '',
  style = {},
  innerStyle = {},
}) => {
  const classes = ['textfield', variant, error ? 'error' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} style={style}>
      {leadingIcon && leadingIcon}
      <label>{label}</label>
      {lineCount > 1 ? (
        <textarea
          id={id}
          name={name}
          value={value}
          placeholder={label}
          readOnly={readonly}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          style={innerStyle}
          rows={lineCount}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={label}
          readOnly={readonly}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          style={innerStyle}
        />
      )}
      {trailingIcon && trailingIcon}
      {supportingText && <div>{supportingText}</div>}
    </div>
  );
};

export default TextField;
