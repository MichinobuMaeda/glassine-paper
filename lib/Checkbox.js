import { jsx as _jsx } from "react/jsx-runtime";
import React, {} from 'react';
/**
 * Material Design 3 Checkbox component.
 *
 * @param {CheckboxProps} props The properties for the Checkbox component.
 * @param {string} [props.id] The ID of the checkbox.
 * @param {string} [props.name] The name of the checkbox.
 * @param {boolean} [props.error=false] Whether the checkbox is in an error state.
 * @param {boolean} [props.disabled=false] Whether the checkbox is disabled.
 * @param {string} [props.value] The value of the checkbox.
 * @param {boolean} [props.checked] Whether the checkbox is checked.
 * @param {Function} [props.onClick] The function to call when the checkbox is clicked.
 * @param {string} [props.className] Additional CSS classes to apply to the checkbox.
 * @param {CSSProperties} [props.style] Additional CSS styles to apply to the checkbox.
 * @returns {JSX.Element} A Checkbox component.
 *
 * @example
 * <Checkbox
 *  id="my-checkbox"
 *  name="my-checkbox"
 *  checked={isChecked}
 *  onClick={() => setIsChecked(!isChecked)}
 * />
 */
export const Checkbox = ({ id, name, error = false, disabled = false, value, checked, onClick, className = '', style = {}, }) => {
    const classes = ['checkbox', error ? 'error' : '', className];
    return (_jsx("input", { id: id, name: name, className: classes.join(' '), type: "checkbox", style: style, disabled: disabled, value: value, checked: checked, onClick: (event) => (onClick ? onClick(event) : undefined) }));
};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map