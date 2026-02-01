import React, { type ReactNode, type CSSProperties } from 'react';

export interface MenuItemProps {
  key?: string | number;
  id?: string;
  label?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  divider?: boolean;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}

export interface MenuProps {
  id?: string;
  items: Iterable<MenuItemProps | null | undefined>;
  onClose?: () => void;
  className?: string;
  style?: CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = ({
  key,
  id,
  label,
  leadingIcon,
  trailingIcon,
  divider = false,
  active = false,
  disabled = false,
  onClick,
  href,
}) => {
  const classes = [active ? 'active' : '', disabled ? 'disabled' : ''].join(
    ' '
  );
  return divider ? (
    <hr />
  ) : href ? (
    <a key={key} id={id} className={classes} href={href}>
      {leadingIcon}
      {label}
      {trailingIcon}
    </a>
  ) : (
    <button key={key} id={id} className={classes} onClick={onClick}>
      {leadingIcon}
      {label}
      {trailingIcon}
    </button>
  );
};

/**
 * Material Design 3 Menu component
 *
 * @param {MenuProps} props MenuProps
 * @param {string} [props.id] Element id
 * @param {Iterable<(MenuItemProps | null | undefined)>} props.items Array of MenuItem configurations
 * @param {(string | number)} [props.items[].key] Unique key for the item
 * @param {string} [props.items[].id] Element id for the item
 * @param {string} [props.items[].label] Label text
 * @param {React.ReactNode} [props.items[].leadingIcon] Leading icon element
 * @param {React.ReactNode} [props.items[].trailingIcon] Trailing icon element
 * @param {boolean} [props.items[].divider] Show as divider (renders hr element)
 * @param {boolean} [props.items[].active] Active state
 * @param {boolean} [props.items[].disabled] Disabled state
 * @param {Function} [props.items[].onClick] Click handler
 * @param {string} [props.items[].href] Link URL (renders as anchor tag)
 * @param {Function} [props.onClose] Called when clicking on the outer area of the menu
 * @param {string} [props.className] Additional CSS class names
 * @param {React.CSSProperties} [props.style] Custom inline styles
 * @returns {JSX.Element}
 *
 * @example
 * <Menu
 *   id="example-menu"
 *   onClose={() => console.log('Menu closed')}
 *   items={[
 *     {
 *       leadingIcon: {<svg>...</svg>},
 *       label: "Item 1",
 *       trailingIcon: {<svg>...</svg>},
 *       active: true,
 *       onClick: () => {},
 *     },
 *     { divider: true },
 *     status !== 'loading' && {
 *       label: "Item 2",
 *       href: "...",
 *     },
 *     {
 *       label: "Item 3",
 *       href: "...",
 *     },
 *   ]}
 * />
 */
export const Menu: React.FC<MenuProps> = ({
  id,
  items = [],
  onClose = () => {},
  className,
  style,
}) => {
  return (
    <div
      id={id}
      className={`menu ${className || ''}`}
      onClick={onClose}
      style={style}
    >
      {Array.from(items)
        .filter((item) => !!item)
        .map((item, index) => (
          <MenuItem key={item.key || index} {...item} />
        ))}
    </div>
  );
};

export default Menu;
