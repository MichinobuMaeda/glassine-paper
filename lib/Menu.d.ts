import React, { type ReactNode, type CSSProperties } from 'react';
export interface MenuItemProps {
    id?: string;
    label?: string;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    divider?: boolean;
    active?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    href?: string;
}
export interface MenuProps {
    id?: string;
    items: Iterable<MenuItemProps | false | null | undefined>;
    onClose?: () => void;
    className?: string;
    style?: CSSProperties;
}
/**
 * Material Design 3 Menu component
 *
 * @param {MenuProps} props MenuProps
 * @param {string} [props.id] Element id
 * @param {Iterable<(MenuItemProps | false | null | undefined)>} props.items Array of MenuItem configurations
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
export declare const Menu: React.FC<MenuProps>;
export default Menu;
//# sourceMappingURL=Menu.d.ts.map