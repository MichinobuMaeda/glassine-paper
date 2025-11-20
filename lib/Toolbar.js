import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, {} from 'react';
const ToolbarItem = ({ key, id, label, icon, disabled = false, onClick, href, toggle = false, checked = false, primary = false, fab = false, }) => {
    const classes = [disabled ? 'disabled' : '', primary ? 'primary' : ''].join(' ');
    return fab ? (_jsx("button", { id: id, className: `fab sm`, disabled: disabled, onClick: onClick, children: icon }, key)) : toggle ? (_jsxs("label", { id: id, className: classes, children: [_jsx("input", { type: "checkbox", disabled: disabled, onClick: onClick, checked: checked }), icon, label] }, key)) : href ? (_jsxs("a", { id: id, className: classes, href: href, children: [icon, label] }, key)) : (_jsxs("button", { id: id, className: classes, onClick: onClick, children: [icon, label] }, key));
};
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
export const Toolbar = ({ id, items = [], style, variant = 'docked', color = 'standard', }) => {
    const classes = ['toolbar', variant, color].join(' ');
    return variant === 'floating' ? (_jsxs("div", { className: "toolbar-container", style: style, children: [_jsx("div", { id: id, className: classes, children: Array.from(items)
                    .filter((item) => !item.fab)
                    .map((item, index) => (_jsx(ToolbarItem, { ...item }, item.key || index))) }), Array.from(items)
                .filter((item) => item.fab)
                .map((item, index) => (_jsx(ToolbarItem, { ...item }, item.key || index)))] })) : (_jsx("div", { id: id, className: classes, style: style, children: Array.from(items).map((item, index) => (_jsx(ToolbarItem, { ...item, fab: false }, item.key || index))) }));
};
export default Toolbar;
//# sourceMappingURL=Toolbar.js.map