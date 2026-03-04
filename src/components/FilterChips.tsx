import React, { type CSSProperties } from 'react';

/**
 * FilterChipsItem represents an individual item in the FilterChips component.
 */
export interface FilterChipsItem {
  value: string;
  label: string;
  disabled?: boolean;
}

/**
 * FilterChips component props
 */
export interface FilterChipsProps {
  id?: string;
  name?: string;
  disabled?: boolean;
  value?: string | string[];
  items?: FilterChipsItem[];
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
 * @param {Array<FilterChipsItem>} [props.items] The items for the filter chip.
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
export const FilterChips: React.FC<FilterChipsProps> = ({
  id,
  name,
  disabled = false,
  value,
  items = [],
  onChange,
  className = '',
  style = {},
}) => {
  return Array.isArray(value) ? (
    <div id={id} className={className} style={style}>
      {items.map((item) => (
        <label
          key={item.value}
          htmlFor={`${id}-${item.value}`}
          className={`chip ${item.disabled || disabled ? 'disabled' : ''}`}
        >
          {value.includes(item.value) && (
            // Material icons: check (https://fonts.google.com/icons)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="currentColor"
            >
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
          )}
          <input
            id={`${id}-${item.value}`}
            name={name}
            type="checkbox"
            disabled={item.disabled || disabled}
            value={item.value}
            checked={value.includes(item.value)}
            onChange={(e) =>
              onChange &&
              onChange(
                e.target.checked
                  ? [
                      ...(value as string[]).filter((v) => v !== item.value),
                      item.value,
                    ]
                  : (value as string[]).filter((v) => v !== item.value)
              )
            }
          />
          {item.label}
        </label>
      ))}
    </div>
  ) : (
    <div id={id} className={className} style={style}>
      {items.map((item) => (
        <label
          key={item.value}
          htmlFor={`${id}-${item.value}`}
          className={`chip ${item.disabled || disabled ? 'disabled' : ''}`}
        >
          {item.value === value && (
            // Material icons: check (https://fonts.google.com/icons)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="currentColor"
            >
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
          )}
          <input
            id={`${id}-${item.value}`}
            name={name}
            type="radio"
            disabled={item.disabled || disabled}
            value={item.value}
            checked={item.value === value}
            onChange={(e) =>
              onChange && e.target.checked && onChange(item.value)
            }
          />
          {item.label}
        </label>
      ))}
    </div>
  );
};

export default FilterChips;
