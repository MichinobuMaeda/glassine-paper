import React, { type ReactNode, type CSSProperties } from 'react';

export interface NavDrawerItemProps {
  key?: string | number;
  id?: string;
  label?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  divider?: boolean;
  active?: boolean;
  hidden?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}

export interface NavDrawerProps {
  id?: string;
  items: Iterable<NavDrawerItemProps>;
  className?: string;
  style?: CSSProperties;
}

const NavDrawerItem: React.FC<NavDrawerItemProps> = ({
  key,
  id,
  label,
  leadingIcon,
  trailingIcon,
  divider = false,
  active = false,
  hidden = false,
  disabled = false,
  onClick,
  href,
}) => {
  const classes = [
    active ? 'active' : '',
    hidden ? 'hidden' : '',
    disabled ? 'disabled' : '',
  ].join(' ');
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
 * Material Design 3 NavDrawer component
 *
 * @param props NavDrawerProps
 * @param props.id Element id
 * @param props.items Array of NavDrawerItem configurations
 * @param props.items[].key Unique key for the item
 * @param props.items[].id Element id for the item
 * @param props.items[].label Label text
 * @param props.items[].leadingIcon Leading icon element
 * @param props.items[].trailingIcon Trailing icon element
 * @param props.items[].divider Show as divider (renders hr element)
 * @param props.items[].active Active state
 * @param props.items[].hidden Hidden state
 * @param props.items[].disabled Disabled state
 * @param props.items[].onClick Click handler
 * @param props.items[].href Link URL (renders as anchor tag)
 * @param props.className Additional CSS class names
 * @param props.style Custom inline styles
 * @returns JSX.Element
 *
 * @example
 * <NavDrawer
 *   id="example-nav-drawer"
 *   items={[
 *     {
 *       leadingIcon: {<svg>...</svg>},
 *       label: "Item 1",
 *       trailingIcon: {<svg>...</svg>},
 *       active: true,
 *       onClick: () => {},
 *     },
 *     { divider: true },
 *     {
 *       label: "Item 2",
 *       href: "...",
 *     },
 *   ]}
 * />
 */
export const NavDrawer: React.FC<NavDrawerProps> = ({
  id,
  items = [],
  className,
  style = {},
}) => {
  return (
    <div id={id} className={`nav-drawer ${className || ''}`} style={style}>
      {Array.from(items).map((item, index) => (
        <NavDrawerItem key={item.key || index} {...item} />
      ))}
    </div>
  );
};

export default NavDrawer;
