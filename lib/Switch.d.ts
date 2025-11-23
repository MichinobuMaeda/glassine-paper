import React, { type CSSProperties } from 'react';
/**
 * Switch component props
 */
export interface SwitchProps {
    id?: string;
    name?: string;
    disabled?: boolean;
    value?: string;
    checked?: boolean;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    className?: string;
    style?: CSSProperties;
}
/**
 * Material Design 3 Switch component.
 *
 * @param {SwitchProps} props The properties for the Switch component.
 * @param {string} [props.id] The ID of the switch.
 * @param {string} [props.name] The name of the switch.
 * @param {boolean} [props.disabled=false] Whether the switch is disabled.
 * @param {string} [props.value] The value of the switch.
 * @param {boolean} [props.checked] Whether the switch is checked.
 * @param {Function} [props.onClick] The function to call when the switch is clicked.
 * @param {string} [props.className] Additional CSS classes to apply to the switch.
 * @param {CSSProperties} [props.style] Additional CSS styles to apply to the switch.
 * @returns {JSX.Element} A Switch component.
 *
 * @example
 * <Switch
 *  id="my-switch"
 *  name="my-switch"
 *  checked={isChecked}
 *  onClick={() => setIsChecked(!isChecked)}
 * />
 */
export declare const Switch: React.FC<SwitchProps>;
export default Switch;
//# sourceMappingURL=Switch.d.ts.map