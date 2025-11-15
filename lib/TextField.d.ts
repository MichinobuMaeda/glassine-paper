import React, { type ReactNode, type CSSProperties } from 'react';
/**
 * TextField component props
 */
export interface TextFieldProps {
    /** Input id attribute */
    id?: string;
    /** Input name attribute */
    name?: string;
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
    /** Additional CSS class names */
    className?: string;
    /** Custom inline styles */
    style?: CSSProperties;
}
/**
 * Material Design 3 TextField component
 *
 * @param props TextFieldProps
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
export declare const TextField: React.FC<TextFieldProps>;
export default TextField;
//# sourceMappingURL=TextField.d.ts.map