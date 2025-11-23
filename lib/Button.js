import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, {} from 'react';
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
export const Button = ({ id, name, variant = 'filled', size = 'md', label, icon, width = 'default', radius = 'default', type = 'button', href, checked = false, disabled = false, onClick, className = '', style = {}, }) => {
    const classes = [
        'button',
        label ? '' : 'icon',
        variant,
        size,
        icon && width !== 'default' ? width : '',
        icon && radius !== 'default' ? radius : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return type === 'toggle' ? (_jsxs("label", { id: `${id}-label`, className: classes, style: style, children: [_jsx("input", { id: id, name: name, type: "checkbox", checked: checked, disabled: disabled, onClick: (event) => (onClick ? onClick(event) : undefined) }), icon, label] })) : type === 'select' ? (_jsxs("label", { id: `${id}-label`, className: classes, style: style, children: [_jsx("input", { id: id, name: name, type: "radio", checked: checked, disabled: disabled, onClick: (event) => (onClick ? onClick(event) : undefined) }), icon, label] })) : href ? (_jsxs("a", { id: id, href: href, className: classes, style: style, children: [icon, label] })) : (_jsxs("button", { id: id, name: name, type: type, className: classes, disabled: disabled, onClick: onClick, style: style, children: [icon, label] }));
};
export default Button;
//# sourceMappingURL=Button.js.map