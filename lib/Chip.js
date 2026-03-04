import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, {} from 'react';
/**
 * Material Design 3 Chip component
 *
 * @param {ChipProps} props ChipProps
 * @param {string} [props.id] Input id attribute
 * @param {string} [props.name] Input name attribute
 * @param {string} [props.label] Label text
 * @param {ChipIconProps} [props.leading] Leading icon element
 * @param {ChipIconProps} [props.trailing] Trailing icon element
 * @param {boolean} [props.active] Active state
 * @param {boolean} [props.disabled] Disabled state
 * @param {Function} [props.onClick] Click handler (for button type)
 * @param {string} [props.className] Additional CSS class names
 * @param {React.CSSProperties} [props.style] Custom inline styles
 * @returns {JSX.Element}
 */
export const Chip = ({ id, name, label, leading, trailing, active = false, disabled = false, onClick, className = '', style = {}, }) => {
    const classes = [
        'chip',
        active ? 'active' : '',
        disabled ? 'disabled' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (_jsxs("button", { id: id, name: name, className: classes, style: style, onClick: onClick, disabled: disabled, children: [leading && (_jsx("span", { className: "chip-leading", onClick: leading.onClick, children: leading.icon })), label && _jsx("label", { className: "chip-label", children: label }), trailing && (_jsx("span", { className: "chip-trailing", onClick: trailing.onClick, children: trailing.icon }))] }));
};
export default Chip;
//# sourceMappingURL=Chip.js.map