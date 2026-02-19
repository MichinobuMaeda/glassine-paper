import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, {} from 'react';
const NavDrawerItem = ({ id, label, leadingIcon, trailingIcon, divider = false, active = false, hidden = false, disabled = false, onClick, href, }) => {
    const classes = [
        active ? 'active' : '',
        hidden ? 'hidden' : '',
        disabled ? 'disabled' : '',
    ].join(' ');
    return divider ? (_jsx("hr", {})) : href ? (_jsxs("a", { id: id, className: classes, href: href, children: [leadingIcon, label, trailingIcon] })) : (_jsxs("button", { id: id, className: classes, onClick: onClick, children: [leadingIcon, label, trailingIcon] }));
};
/**
 * Material Design 3 NavDrawer component
 *
 * @param {NavDrawerProps} props NavDrawerProps
 * @param {string} [props.id] Element id
 * @param {Iterable<(NavDrawerItemProps | false | null | undefined)>} props.items Array of NavDrawerItem configurations
 * @param {string} [props.items[].id] Element id for the item
 * @param {string} [props.items[].label] Label text
 * @param {React.ReactNode} [props.items[].leadingIcon] Leading icon element
 * @param {React.ReactNode} [props.items[].trailingIcon] Trailing icon element
 * @param {boolean} [props.items[].divider] Show as divider (renders hr element)
 * @param {boolean} [props.items[].active] Active state
 * @param {boolean} [props.items[].hidden] Hidden state
 * @param {boolean} [props.items[].disabled] Disabled state
 * @param {Function} [props.items[].onClick] Click handler
 * @param {string} [props.items[].href] Link URL (renders as anchor tag)
 * @param {string} [props.className] Additional CSS class names
 * @param {React.CSSProperties} [props.style] Custom inline styles
 * @returns {JSX.Element}
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
 *     status !== 'loading' && {
 *       label: "Item 2",
 *       href: "...",
 *     },
 *     {
 *       label: "Item 3",
 *       href: "...",
 *     },
 *   ]}
 * />
 */
export const NavDrawer = ({ id, items = [], className, style = {}, }) => {
    return (_jsx("div", { id: id, className: `nav-drawer ${className || ''}`, style: style, children: Array.from(items)
            .filter((item) => !!item)
            .map((item, index) => {
            const { key: itemKey, ...rest } = item;
            const key = itemKey ?? index;
            return _jsx(NavDrawerItem, { ...rest }, key);
        }) }));
};
export default NavDrawer;
//# sourceMappingURL=NavDrawer.js.map