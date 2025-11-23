import React, { type ReactNode, type CSSProperties } from 'react';
/**
 * Button component props
 */
export interface ButtonProps {
    id?: string;
    name?: string;
    variant?: 'filled' | 'tonal' | 'danger' | 'error' | 'outlined' | 'elevated' | 'text';
    size?: 'xs' | 'sm' | 'md';
    radius?: 'default' | 'square';
    label?: string;
    icon?: ReactNode;
    width?: 'narrow' | 'default' | 'wide';
    type?: 'button' | 'submit' | 'reset' | 'toggle' | 'select';
    href?: string;
    checked?: boolean;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLInputElement>) => void;
    className?: string;
    style?: CSSProperties;
}
/**
 * Material Design 3 Button component
 *
 * @param {ButtonProps} props ButtonProps
 * @param {string} [props.id] Input id attribute
 * @param {string} [props.name] Input name attribute
 * @param {('filled' | 'tonal' | 'danger' | 'error' | 'outlined' | 'elevated' | 'text')} [props.variant] Button variant: 'filled', 'tonal', 'danger', 'error', 'outlined', 'elevated', or 'text'
 * @param {('xs' | 'sm' | 'md')} [props.size] Button size: 'xs', 'sm', or 'md'
 * @param {('default' | 'square')} [props.radius] Button radius: 'default' or 'square'
 * @param {string} [props.label] Label text
 * @param {React.ReactNode} [props.icon] Leading icon element
 * @param {('narrow' | 'default' | 'wide')} [props.width] Icon button width: 'narrow', 'default', or 'wide'
 * @param {('button' | 'submit' | 'reset' | 'toggle' | 'select')} [props.type] Button type: 'button', 'submit', 'reset', 'toggle', or 'select'
 * @param {string} [props.href] Link URL (renders as anchor tag)
 * @param {boolean} [props.checked] Checked state (for toggle/select types)
 * @param {boolean} [props.disabled] Disabled state
 * @param {Function} [props.onClick] Click handler
 * @param {string} [props.className] Additional CSS class names
 * @param {React.CSSProperties} [props.style] Custom inline styles
 * @returns {JSX.Element}
 *
 * @example
 * // Regular button
 * <Button variant="filled" size="sm">
 *   Click me
 * </Button>
 *
 * @example
 * // Button with leading icon and text
 * <Button
 *   variant="tonal"
 *   size="md"
 *   radius="square"
 *   icon={<svg>...</svg>}
 *   label="Label"
 * />
 *
 * @example
 * // Icon button
 * <Button
 *   variant="outlined"
 *   icon
 *   width="wide"
 *   icon={<svg>...</svg>}
 *  />
 *
 * @example
 * // Link button
 * <Button
 *   variant="elevated"
 *   href="https://example.com"
 *   label="Go to Example"
 * />
 *
 * @example
 * // Toggle button (checkbox)
 * <Button
 *   variant="filled"
 *   type="toggle"
 *   checked={isToggled}
 *   icon={<svg>...</svg>}
 *   label="Toggle"
 * />
 *
 */
export declare const Button: React.FC<ButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map