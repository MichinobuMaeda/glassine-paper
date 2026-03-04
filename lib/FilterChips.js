import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, {} from 'react';
/**
 * Material Design 3 FilterChips component.
 *
 * @param {FilterChipsProps} props The properties for the FilterChips component.
 * @param {string} [props.id] The ID of the filter chip.
 * @param {string} [props.name] The name of the filter chip.
 * @param {boolean} [props.disabled=false] Whether the filter chip is disabled.
 * @param {string | string[]} [props.value] The value of the filter chip.
 * @param {Array<Object>} [props.items] The items for the filter chip.
 * @param {string} [props.items[].value] The value of the item.
 * @param {string} [props.items[].label] The label of the item.
 * @param {boolean} [props.items[].disabled] Whether the item is disabled.
 * @param {Function} [props.onChange] The function to call when the filter chip state changes.
 * @param {string} [props.className] Additional CSS classes to apply to the filter chip.
 * @param {CSSProperties} [props.style] Additional CSS styles to apply to the filter chip.
 * @returns {JSX.Element} A FilterChips component.
 *
 * @example
 * <FilterChips
 *  id="my-filter-chip"
 *  name="my-filter-chip-group"
 *  value="option1"
 *  items={[{value: 'option1', label: 'Option 1'}, {value: 'option2', label: 'Option 2'}]}
 *  onChange={(e) => setSelectedValue(e.target.value)}
 * />
 */
export const FilterChips = ({ id, name, disabled = false, value, items = [], onChange, className = '', style = {}, }) => {
    return Array.isArray(value) ? (_jsx("div", { id: id, className: className, style: style, children: items.map((item) => (_jsxs("label", { htmlFor: `${id}-${item.value}`, className: `chip ${item.disabled || disabled ? 'disabled' : ''}`, children: [value.includes(item.value) && (
                // Material icons: check (https://fonts.google.com/icons)
                _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 -960 960 960", fill: "currentColor", children: _jsx("path", { d: "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" }) })), _jsx("input", { id: `${id}-${item.value}`, name: name, type: "checkbox", disabled: item.disabled || disabled, value: item.value, checked: value.includes(item.value), onChange: (e) => onChange &&
                        onChange(e.target.checked
                            ? [
                                ...value.filter((v) => v !== item.value),
                                item.value,
                            ]
                            : value.filter((v) => v !== item.value)) }), item.label] }, item.value))) })) : (_jsx("div", { id: id, className: className, style: style, children: items.map((item) => (_jsxs("label", { htmlFor: `${id}-${item.value}`, className: `chip ${item.disabled || disabled ? 'disabled' : ''}`, children: [item.value === value && (
                // Material icons: check (https://fonts.google.com/icons)
                _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 -960 960 960", fill: "currentColor", children: _jsx("path", { d: "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" }) })), _jsx("input", { id: `${id}-${item.value}`, name: name, type: "radio", disabled: item.disabled || disabled, value: item.value, checked: item.value === value, onChange: (e) => onChange && e.target.checked && onChange(item.value) }), item.label] }, item.value))) }));
};
export default FilterChips;
//# sourceMappingURL=FilterChips.js.map