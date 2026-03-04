import React, { type ReactNode, type CSSProperties } from 'react';

/**
 * ChipIconProps represents the properties for the leading and trailing icons in the Chip component.
 */
export interface ChipIconProps {
  icon: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Chip component props
 */
export interface ChipProps {
  id?: string;
  name?: string;
  label?: string;
  leading?: ChipIconProps;
  trailing?: ChipIconProps;
  active?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLInputElement>) => void;
  className?: string;
  style?: CSSProperties;
}

/**
 * Material Design 3 Chip component
 *
 * @param {ChipProps} props ChipProps
 * @param {string} [props.id] Input id attribute
 * @param {string} [props.name] Input name attribute
 * @param {string} [props.label] Label text
 * @param {ChipIconProps} [props.leading] Leading icon element
 * @param {ChipIconProps} [props.trailing] Trailing icon element
 * @param {boolean} [props.active] Active state
 * @param {boolean} [props.disabled] Disabled state
 * @param {Function} [props.onClick] Click handler (for button type)
 * @param {string} [props.className] Additional CSS class names
 * @param {React.CSSProperties} [props.style] Custom inline styles
 * @returns {JSX.Element}
 */
export const Chip: React.FC<ChipProps> = ({
  id,
  name,
  label,
  leading,
  trailing,
  active = false,
  disabled = false,
  onClick,
  className = '',
  style = {},
}) => {
  const classes = [
    'chip',
    active ? 'active' : '',
    disabled ? 'disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      id={id}
      name={name}
      className={classes}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {leading && (
        <span className="chip-leading" onClick={leading.onClick}>
          {leading.icon}
        </span>
      )}
      {label && <label className="chip-label">{label}</label>}
      {trailing && (
        <span className="chip-trailing" onClick={trailing.onClick}>
          {trailing.icon}
        </span>
      )}
    </button>
  );
};

export default Chip;
