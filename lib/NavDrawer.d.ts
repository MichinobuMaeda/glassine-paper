import React, { type ReactNode, type CSSProperties } from 'react';
export interface NavDrawerItemProps {
    key?: string | number;
    id?: string;
    label?: string;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    divider?: boolean;
    active?: boolean;
    hidden?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    href?: string;
}
export interface NavDrawerProps {
    id?: string;
    items: Iterable<NavDrawerItemProps>;
    className?: string;
    style?: CSSProperties;
}
/**
 * Material Design 3 NavDrawer component
 *
 * @param {NavDrawerProps} props NavDrawerProps
 * @param {string} [props.id] Element id
 * @param {Iterable<NavDrawerItemProps>} props.items Array of NavDrawerItem configurations
 * @param {(string | number)} [props.items[].key] Unique key for the item
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
 *     {
 *       label: "Item 2",
 *       href: "...",
 *     },
 *   ]}
 * />
 */
export declare const NavDrawer: React.FC<NavDrawerProps>;
export default NavDrawer;
//# sourceMappingURL=NavDrawer.d.ts.map