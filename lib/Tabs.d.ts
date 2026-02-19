import React, { type ReactNode, type CSSProperties } from 'react';
export interface TabItemProps {
    id?: string;
    label: string;
    leadingIcon?: ReactNode;
    active?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    href?: string;
}
export interface TabsProps {
    id?: string;
    items: Iterable<TabItemProps>;
    style?: CSSProperties;
}
/**
 * Material Design 3 Tabs component
 *
 * @param {TabsProps} props TabsProps
 * @param {string} [props.id] Element id
 * @param {Iterable<TabItemProps>} props.items Array of TabItem configurations
 * @param {string} [props.items[].id] Element id for the item
 * @param {string} props.items[].label Label text
 * @param {React.ReactNode} [props.items[].leadingIcon] Leading icon element
 * @param {boolean} [props.items[].active] Active state
 * @param {boolean} [props.items[].disabled] Disabled state
 * @param {Function} [props.items[].onClick] Click handler
 * @param {string} [props.items[].href] Link URL (renders as anchor tag)
 * @param {React.CSSProperties} [props.style] Custom inline styles
 * @returns {JSX.Element}
 *
 * @example
 * <Tabs
 *   id="example-tabs"
 *   items={[
 *     {
 *       leadingIcon: {<svg>...</svg>},
 *       label: "Item 1",
 *     },
 *     {
 *       label: "Item 2",
 *     },
 *   ]}
 * />
 */
export declare const Tabs: React.FC<TabsProps>;
export default Tabs;
//# sourceMappingURL=Tabs.d.ts.map