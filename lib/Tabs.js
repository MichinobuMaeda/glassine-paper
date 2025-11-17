import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React, {} from 'react';
const TabItem = ({ key, id, leadingIcon, label, active = false, onClick, href, }) => {
    const classes = [active ? 'active' : ''].join(' ');
    return href ? (_jsxs("a", { id: id, className: classes, href: href, children: [leadingIcon, label] }, key)) : (_jsxs("button", { id: id, className: classes, onClick: onClick, children: [leadingIcon, label] }, key));
};
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
export const Tabs = ({ id, items = [] }) => {
    return (_jsx("div", { id: id, className: "tabs", children: Array.from(items).map((item, index) => (_jsx(TabItem, { ...item }, item.key || index))) }));
};
export default Tabs;
//# sourceMappingURL=Tabs.js.map