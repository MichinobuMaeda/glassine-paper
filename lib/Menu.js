import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, {} from 'react';
const MenuItem = ({ key, id, label, leadingIcon, trailingIcon, divider = false, active = false, disabled = false, onClick, href, }) => {
    const classes = [active ? 'active' : '', disabled ? 'disabled' : ''].join(' ');
    return divider ? (_jsx("hr", {})) : href ? (_jsxs("a", { id: id, className: classes, href: href, children: [leadingIcon, label, trailingIcon] }, key)) : (_jsxs("button", { id: id, className: classes, onClick: onClick, children: [leadingIcon, label, trailingIcon] }, key));
};
/**
 * Material Design 3 Menu component
 *
 * @param {MenuProps} props MenuProps
 * @param {string} [props.id] Element id
 * @param {Iterable<MenuItemProps>} props.items Array of MenuItem configurations
 * @param {(string | number)} [props.items[].key] Unique key for the item
 * @param {string} [props.items[].id] Element id for the item
 * @param {string} [props.items[].label] Label text
 * @param {React.ReactNode} [props.items[].leadingIcon] Leading icon element
 * @param {React.ReactNode} [props.items[].trailingIcon] Trailing icon element
 * @param {boolean} [props.items[].divider] Show as divider (renders hr element)
 * @param {boolean} [props.items[].active] Active state
 * @param {boolean} [props.items[].disabled] Disabled state
 * @param {Function} [props.items[].onClick] Click handler
 * @param {string} [props.items[].href] Link URL (renders as anchor tag)
 * @param {Function} [props.onClose] Called when clicking on the outer area of the menu
 * @param {string} [props.className] Additional CSS class names
 * @param {React.CSSProperties} [props.style] Custom inline styles
 * @returns {JSX.Element}
 *
 * @example
 * <Menu
 *   id="example-menu"
 *   onClose={() => console.log('Menu closed')}
 *   items={[
 *     {
 *       leadingIcon: {<svg>...</svg>},
 *       label: "Item 1",
 *       trailingIcon: {<svg>...</svg>},
 *       active: true,
 *       onClick: () => {},
 *     },
 *     { divider: true },
 *     {
 *       label: "Item 2",
 *       href: "...",
 *     },
 *   ]}
 * />
 */
export const Menu = ({ id, items = [], onClose = () => { }, className, style, }) => {
    return (_jsx("div", { id: id, className: `menu ${className || ''}`, onClick: onClose, style: style, children: Array.from(items).map((item, index) => (_jsx(MenuItem, { ...item }, item.key || index))) }));
};
export default Menu;
//# sourceMappingURL=Menu.js.map