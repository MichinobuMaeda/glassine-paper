import { jsx as _jsx } from "react/jsx-runtime";
import React, {} from 'react';
/**
 * Material Design 3 Switch component.
 *
 * @param {SwitchProps} props The properties for the Switch component.
 * @param {string} [props.id] The ID of the switch.
 * @param {string} [props.name] The name of the switch.
 * @param {boolean} [props.disabled=false] Whether the switch is disabled.
 * @param {string} [props.value] The value of the switch.
 * @param {boolean} [props.checked] Whether the switch is checked.
 * @param {Function} [props.onClick] The function to call when the switch is clicked.
 * @param {string} [props.className] Additional CSS classes to apply to the switch.
 * @param {CSSProperties} [props.style] Additional CSS styles to apply to the switch.
 * @returns {JSX.Element} A Switch component.
 *
 * @example
 * <Switch
 *  id="my-switch"
 *  name="my-switch"
 *  checked={isChecked}
 *  onClick={() => setIsChecked(!isChecked)}
 * />
 */
export const Switch = ({ id, name, disabled = false, value, checked, onClick, className = '', style = {}, }) => {
    const classes = ['switch', className];
    return (_jsx("input", { id: id, name: name, className: classes.join(' '), type: "checkbox", style: style, disabled: disabled, value: value, checked: checked, onClick: (event) => (onClick ? onClick(event) : undefined) }));
};
export default Switch;
//# sourceMappingURL=Switch.js.map