import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, {} from 'react';
const ToolbarItem = ({ id, label, icon, disabled = false, onClick, href, toggle = false, checked = false, primary = false, fab = false, }) => {
    const classes = [disabled ? 'disabled' : '', primary ? 'primary' : ''].join(' ');
    return fab ? (_jsx("button", { id: id, className: `fab sm`, disabled: disabled, onClick: onClick, children: icon })) : toggle ? (_jsxs("label", { id: id, className: classes, children: [_jsx("input", { type: "checkbox", disabled: disabled, onChange: onClick, checked: checked }), icon, label] })) : href ? (_jsxs("a", { id: id, className: classes, href: href, children: [icon, label] })) : (_jsxs("button", { id: id, className: classes, onClick: onClick, children: [icon, label] }));
};
/**
 * Material Design 3 Toolbar component
 *
 * @param {ToolbarProps} props ToolbarProps
 * @param {string} [props.id] Element id
 * @param {Iterable<(ToolbarItemProps | false | null | undefined)>} props.items Array of ToolbarItem configurations
 * @param {string} [props.items[].id] Element id for the item
 * @param {string} [props.items[].label] Label text
 * @param {React.ReactNode} [props.items[].icon] Icon element
 * @param {boolean} [props.items[].disabled] Disabled state
 * @param {Function} [props.items[].onClick] Click handler
 * @param {string} [props.items[].href] Link URL (renders as anchor tag)
 * @param {boolean} [props.items[].toggle] Renders as toggle button if true
 * @param {boolean} [props.items[].checked] Toggle button checked state
 * @param {boolean} [props.items[].primary] Primary button styling if true
 * @param {boolean} [props.items[].fab] Renders as floating action button if true on floating toolbars
 * @param {('docked' | 'floating')} [props.variant] Toolbar variant: 'docked' or 'floating'
 * @param {('standard' | 'vibrant')} [props.color] Toolbar color scheme: 'standard' or 'vibrant'
 * @param {React.CSSProperties} [props.style] Custom inline styles
 * @returns {JSX.Element}
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
 *     status !== 'loading' && {
 *       icon: {<svg>...</svg>},
 *       href: "...",
 *     },
 *   ]}
 * />
 */
export const Toolbar = ({ id, items = [], style, variant = 'docked', color = 'standard', }) => {
    const classes = ['toolbar', variant, color].join(' ');
    const activeItems = Array.from(items).filter((item) => !!item);
    return variant === 'floating' ? (_jsxs("div", { className: "toolbar-container", style: style, children: [_jsx("div", { id: id, className: classes, children: activeItems
                    .filter((item) => !item.fab)
                    .map((item, index) => {
                    const { key: itemKey, ...rest } = item;
                    const key = itemKey ?? index;
                    return _jsx(ToolbarItem, { ...rest }, key);
                }) }), activeItems
                .filter((item) => item.fab)
                .map((item, index) => {
                const { key: itemKey, ...rest } = item;
                const key = itemKey ?? index;
                return _jsx(ToolbarItem, { ...rest }, key);
            })] })) : (_jsx("div", { id: id, className: classes, style: style, children: activeItems.map((item, index) => {
            const { key: itemKey, ...rest } = item;
            const key = itemKey ?? index;
            return _jsx(ToolbarItem, { ...rest, fab: false }, key);
        }) }));
};
export default Toolbar;
//# sourceMappingURL=Toolbar.js.map