import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, {} from 'react';
const NavDrawerItem = ({ key, id, label, leadingIcon, trailingIcon, divider = false, active = false, hidden = false, disabled = false, onClick, href, }) => {
    const classes = [
        active ? 'active' : '',
        hidden ? 'hidden' : '',
        disabled ? 'disabled' : '',
    ].join(' ');
    return divider ? (_jsx("hr", {})) : href ? (_jsxs("a", { id: id, className: classes, href: href, children: [leadingIcon, label, trailingIcon] }, key)) : (_jsxs("button", { id: id, className: classes, onClick: onClick, children: [leadingIcon, label, trailingIcon] }, key));
};
/**
 * Material Design 3 NavDrawer component
 *
 * @param props NavDrawerProps
 * @param props.id Element id
 * @param props.items Array of NavDrawerItem configurations
 * @param props.items[].key Unique key for the item
 * @param props.items[].id Element id for the item
 * @param props.items[].label Label text
 * @param props.items[].leadingIcon Leading icon element
 * @param props.items[].trailingIcon Trailing icon element
 * @param props.items[].divider Show as divider (renders hr element)
 * @param props.items[].active Active state
 * @param props.items[].hidden Hidden state
 * @param props.items[].disabled Disabled state
 * @param props.items[].onClick Click handler
 * @param props.items[].href Link URL (renders as anchor tag)
 * @param props.className Additional CSS class names
 * @param props.style Custom inline styles
 * @returns JSX.Element
 *
 * @example
 * <NavDrawer
 *   id="example-nav-drawer"
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
export const NavDrawer = ({ id, items = [], className, style = {}, }) => {
    return (_jsx("div", { id: id, className: `nav-drawer ${className || ''}`, style: style, children: Array.from(items).map((item, index) => (_jsx(NavDrawerItem, { ...item }, item.key || index))) }));
};
export default NavDrawer;
//# sourceMappingURL=NavDrawer.js.map