import { jsx as _jsx } from "react/jsx-runtime";
import React, {} from 'react';
/**
 * Material Design 3 Menu item component
 *
 * @param props MenuItemProps
 * @returns JSX.Element
 *
 * @example
 * <MenuItem onClick={() => {}} active={true}>
 *   <svg>...</svg>
 *   Item 1
 * </MenuItem>
 *
 * @example
 * <MenuItem href="...">
 *   Item 2
 * </MenuItem>
 */
export const MenuItem = ({ id, active = false, children, onClick, href, }) => {
    const classes = [active ? 'active' : ''].join(' ');
    return href ? (_jsx("a", { id: id, className: classes, href: href, children: children })) : (_jsx("button", { id: id, className: classes, onClick: onClick, children: children }));
};
/**
 * Material Design 3 Menu component
 *
 * @param props MenuProps
 * @returns JSX.Element
 *
 * @example
 * <Menu id="example-menu">
 *   <MenuItem onClick={() => {}} active={true}>
 *     <svg>...</svg>
 *     Item 1
 *   </MenuItem>
 *   <MenuItem href="...">
 *     Item 2
 *   </MenuItem>
 * </Menu>
 */
export const Menu = ({ id, children }) => {
    return (_jsx("div", { id: id, className: "menu", children: children }));
};
export default Menu;
//# sourceMappingURL=Menu.js.map