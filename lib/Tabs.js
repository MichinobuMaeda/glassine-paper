import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React, {} from 'react';
const TabItem = ({ id, leadingIcon, label, active = false, onClick, href, }) => {
    const classes = [active ? 'active' : ''].join(' ');
    return href ? (_jsxs("a", { id: id, className: classes, href: href, children: [leadingIcon, label] })) : (_jsxs("button", { id: id, className: classes, onClick: onClick, children: [leadingIcon, label] }));
};
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
export const Tabs = ({ id, items = [], style = {} }) => {
    return (_jsx("div", { id: id, className: "tabs", style: style, children: Array.from(items).map((item, index) => {
            const { key: itemKey, ...rest } = item;
            const key = itemKey ?? index;
            return _jsx(TabItem, { ...rest }, key);
        }) }));
};
export default Tabs;
//# sourceMappingURL=Tabs.js.map