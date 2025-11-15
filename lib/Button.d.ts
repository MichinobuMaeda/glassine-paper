import React, { type ReactNode } from 'react';
/**
 * Button component props
 */
export interface ButtonProps {
    /** Input id attribute */
    id?: string;
    /** Input name attribute */
    name?: string;
    /** Button variant */
    variant?: 'filled' | 'tonal' | 'danger' | 'error' | 'outlined' | 'elevated' | 'text';
    /** Button size */
    size?: 'xs' | 'sm' | 'md';
    /** Button radius */
    radius?: 'default' | 'square';
    /** Icon button mode */
    icon?: boolean;
    /** Icon button width */
    width?: 'narrow' | 'default' | 'wide';
    /** Button type */
    type?: 'button' | 'submit' | 'reset' | 'toggle' | 'select';
    /** Link URL */
    href?: string;
    /** Checked state */
    checked?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Children elements */
    children: ReactNode;
    /** onClick handler */
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    /** Additional CSS class names */
    className?: string;
}
/**
 * Material Design 3 Button component
 *
 * @example
 * // Regular button
 * <Button variant="filled" size="sm">
 *   Click me
 * </Button>
 *
 * @example
 * // Button with leading icon and text
 * <Button variant="tonal" size="md" radius="square">
 *   <svg>...</svg>
 *   Label
 * </Button>
 *
 * @example
 * // Icon button
 * <Button variant="outlined" icon width="wide">
 *   <svg>...</svg>
 * </Button>
 *
 * @example
 * // Link button
 * <Button variant="elevated" href="https://example.com">
 *   Go to Example
 * </Button>
 *
 * @example
 * // Toggle button (checkbox)
 * <Button variant="filled" type="toggle" checked={isToggled}>
 *   <svg>...</svg>
 *   Toggle
 * </Button>
 *
 */
export declare const Button: React.FC<ButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map