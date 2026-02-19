import React, { type CSSProperties } from 'react';
/**
 * Radio component props
 */
export interface RadioProps {
    id?: string;
    name?: string;
    disabled?: boolean;
    value?: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    style?: CSSProperties;
}
/**
 * Material Design 3 Radio button component.
 *
 * @param {RadioProps} props The properties for the Radio component.
 * @param {string} [props.id] The ID of the radio button.
 * @param {string} [props.name] The name of the radio button.
 * @param {boolean} [props.disabled=false] Whether the radio button is disabled.
 * @param {string} [props.value] The value of the radio button.
 * @param {boolean} [props.checked] Whether the radio button is checked.
 * @param {Function} [props.onChange] The function to call when the radio button state changes.
 * @param {string} [props.className] Additional CSS classes to apply to the radio button.
 * @param {CSSProperties} [props.style] Additional CSS styles to apply to the radio button.
 * @returns {JSX.Element} A Radio component.
 *
 * @example
 * <Radio
 *  id="my-radio"
 *  name="my-radio-group"
 *  value="option1"
 *  checked={selectedValue === 'option1'}
 *  onChange={(e) => setSelectedValue(e.target.value)}
 * />
 */
export declare const Radio: React.FC<RadioProps>;
export default Radio;
//# sourceMappingURL=Radio.d.ts.map