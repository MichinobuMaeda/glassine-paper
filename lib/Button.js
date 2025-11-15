import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, {} from 'react';
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
export const Button = ({ id, name, variant = 'filled', size = 'md', icon = false, width = 'default', radius = 'default', type = 'button', href, checked = false, disabled = false, children, onClick, className = '', }) => {
    const classes = [
        'button',
        icon ? 'icon' : '',
        variant,
        size,
        icon && width !== 'default' ? width : '',
        icon && radius !== 'default' ? radius : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return type === 'toggle' ? (_jsxs("label", { id: `${id}-label`, className: classes, children: [_jsx("input", { id: id, name: name, type: "checkbox", checked: checked }), children] })) : type === 'select' ? (_jsxs("label", { id: `${id}-label`, className: classes, children: [_jsx("input", { id: id, name: name, type: "radio", checked: checked }), children] })) : href ? (_jsx("a", { id: id, href: href, className: classes, children: children })) : (_jsx("button", { id: id, name: name, type: type, className: classes, disabled: disabled, onClick: onClick, children: children }));
};
export default Button;
//# sourceMappingURL=Button.js.map