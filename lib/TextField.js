import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, {} from 'react';
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
export const TextField = ({ id, name, variant = 'outlined', type = 'text', label, value, error = false, disabled = false, supportingText, leadingIcon, trailingIcon, width, onChange, onBlur, onFocus, className = '', style, }) => {
    const classes = ['textfield', variant, error ? 'error' : '', className]
        .filter(Boolean)
        .join(' ');
    return (_jsxs("div", { className: classes, style: width ? { width } : undefined, children: [leadingIcon && leadingIcon, _jsx("label", { children: label }), _jsx("input", { id: id, name: name, type: type, value: value, placeholder: label, disabled: disabled, onChange: onChange, onBlur: onBlur, onFocus: onFocus, style: style }), trailingIcon && trailingIcon, supportingText && _jsx("div", { children: supportingText })] }));
};
export default TextField;
//# sourceMappingURL=TextField.js.map