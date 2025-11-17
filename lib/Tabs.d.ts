import React, { type ReactNode, type CSSProperties } from 'react';
export interface TabItemProps {
    key?: string | number;
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
 * @param props TabsProps
 * @param props.id Element id
 * @param props.items Array of TabItem configurations
 * @param props.items[].key Unique key for the item
 * @param props.items[].id Element id for the item
 * @param props.items[].label Label text
 * @param props.items[].leadingIcon Leading icon element
 * @param props.items[].active Active state
 * @param props.items[].disabled Disabled state
 * @param props.items[].onClick Click handler
 * @param props.items[].href Link URL (renders as anchor tag)
 * @param props.style Custom inline styles
 * @returns JSX.Element
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