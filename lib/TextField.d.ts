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
    value?: string | number;
    lineCount?: number;
    readonly?: boolean;
    disabled?: boolean;
    supportingText?: string;
    errorMessage?: string;
    error?: boolean;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    className?: string;
    style?: CSSProperties;
    innerStyle?: CSSProperties;
}
/**
 * Material Design 3 TextField component
 *
 * A text input field that follows Material Design 3 specifications.
 * Supports both single-line and multi-line input with filled or outlined variants.
 * Includes support for icons, validation states, and supporting text.
 *
 * @param {TextFieldProps} props - Component props
 * @param {string} [props.id] - HTML id attribute for the input element
 * @param {string} [props.name] - HTML name attribute for the input element
 * @param {('filled' | 'outlined')} [props.variant='outlined'] - Visual variant of the text field
 * @param {('text' | 'email' | 'number' | 'password' | 'tel' | 'url')} [props.type='text'] - HTML input type
 * @param {string} [props.label=''] - Label text displayed above/within the input
 * @param {(string | number)} [props.value] - Controlled value of the input
 * @param {number} [props.lineCount=1] - Number of lines for multiline input (renders textarea if > 1)
 * @param {boolean} [props.readonly=false] - Whether the input is read-only
 * @param {boolean} [props.disabled=false] - Whether the input is disabled
 * @param {string} [props.supportingText] - Helper text displayed below the input
 * @param {string} [props.errorMessage] - Error message displayed below the input (overrides supportingText)
 * @param {boolean} [props.error=false] - Whether the input is in error state
 * @param {React.ReactNode} [props.leadingIcon] - Icon element displayed at the start of the input
 * @param {React.ReactNode} [props.trailingIcon] - Icon element displayed at the end of the input
 * @param {Function} [props.onChange] - Change event handler
 * @param {Function} [props.onBlur] - Blur event handler
 * @param {Function} [props.onFocus] - Focus event handler
 * @param {string} [props.className=''] - Additional CSS class names to apply to the container
 * @param {React.CSSProperties} [props.style={}] - Custom inline styles for the container element
 * @param {React.CSSProperties} [props.innerStyle={}] - Custom inline styles for the input/textarea element
 * @returns {JSX.Element} The rendered TextField component
 *
 * @example
 * // Basic filled text field
 * <TextField
 *   variant="filled"
 *   label="Email"
 *   type="email"
 *   supportingText="Enter your email address"
 * />
 *
 * @example
 * // Outlined text field with error state
 * <TextField
 *   variant="outlined"
 *   label="Password"
 *   type="password"
 *   error={true}
 *   errorMessage="Password is required"
 * />
 *
 * @example
 * // Multi-line text field with icons
 * <TextField
 *   variant="outlined"
 *   label="Description"
 *   lineCount={4}
 *   leadingIcon={<SvgIcon />}
 *   trailingIcon={<ClearIcon />}
 *   onChange={(e) => console.log(e.target.value)}
 * />
 */
export declare const TextField: React.FC<TextFieldProps>;
export default TextField;
//# sourceMappingURL=TextField.d.ts.map