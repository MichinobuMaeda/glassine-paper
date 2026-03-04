import React, { type CSSProperties } from 'react';
/**
 * FilterChips component props
 */
export interface FilterChipsProps {
    id?: string;
    name?: string;
    disabled?: boolean;
    value?: string | string[];
    items?: {
        value: string;
        label: string;
        disabled?: boolean;
    }[];
    onChange?: (value: string | string[]) => void;
    className?: string;
    style?: CSSProperties;
}
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
export declare const FilterChips: React.FC<FilterChipsProps>;
export default FilterChips;
//# sourceMappingURL=FilterChips.d.ts.map