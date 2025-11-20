import React, { type ReactNode, type CSSProperties } from 'react';
export interface ToolbarItemProps {
    key?: string | number;
    id?: string;
    label?: string;
    icon?: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    href?: string;
    toggle?: boolean;
    checked?: boolean;
    primary?: boolean;
    fab?: boolean;
}
export interface ToolbarProps {
    id?: string;
    items: Iterable<ToolbarItemProps>;
    variant?: 'docked' | 'floating';
    color?: 'standard' | 'vibrant';
    style?: CSSProperties;
}
/**
 * Material Design 3 Toolbar component
 *
 * @param props ToolbarProps
 * @param props.id Element id
 * @param props.items Array of ToolbarItem configurations
 * @param props.items[].key Unique key for the item
 * @param props.items[].id Element id for the item
 * @param props.items[].label Label text
 * @param props.items[].icon Icon element
 * @param props.items[].disabled Disabled state
 * @param props.items[].onClick Click handler
 * @param props.items[].href Link URL (renders as anchor tag)
 * @param props.items[].toggle Renders as toggle button if true
 * @param props.items[].checked Toggle button checked state
 * @param props.items[].primary Primary button styling if true
 * @param props.items[].fab Renders as floating action button if true on floating toolbars
 * @param props.variant Toolbar variant: 'docked' or 'floating'
 * @param props.color Toolbar color scheme: 'standard' or 'vibrant'
 * @param props.style Custom inline styles
 * @returns JSX.Element
 *
 * @example
 * <Toolbar
 *   id="example-toolbar"
 *   items={[
 *     {
 *       icon: {<svg>...</svg>},
 *       onClick: () => {},
 *     },
 *     { divider: true },
 *     {
 *       icon: {<svg>...</svg>},
 *       href: "...",
 *     },
 *   ]}
 * />
 */
export declare const Toolbar: React.FC<ToolbarProps>;
export default Toolbar;
//# sourceMappingURL=Toolbar.d.ts.map