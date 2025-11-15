import React, { type ReactNode } from 'react';

/**
 * Menu item component props
 */
export interface MenuItemProps {
  /** Element id */
  id?: string;
  /** Active state */
  active?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Children elements */
  children: ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Link URL */
  href?: string;
}

/**
 * Menu component props
 */
export interface MenuProps {
  /** Element id */
  id?: string;
  /** Children MenuItem elements */
  children: ReactNode;
}

/**
 * Material Design 3 Menu item component
 *
 * @param props MenuItemProps
 * @returns JSX.Element
 *
 * @example
 * <MenuItem onClick={() => {}} active={true}>
 *   <svg>...</svg>
 *   Item 1
 * </MenuItem>
 *
 * @example
 * <MenuItem href="...">
 *   Item 2
 * </MenuItem>
 */
export const MenuItem: React.FC<MenuItemProps> = ({
  id,
  active = false,
  children,
  onClick,
  href,
}) => {
  const classes = [active ? 'active' : ''].join(' ');
  return href ? (
    <a id={id} className={classes} href={href}>
      {children}
    </a>
  ) : (
    <button id={id} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

/**
 * Material Design 3 Menu component
 *
 * @param props MenuProps
 * @returns JSX.Element
 *
 * @example
 * <Menu id="example-menu">
 *   <MenuItem onClick={() => {}} active={true}>
 *     <svg>...</svg>
 *     Item 1
 *   </MenuItem>
 *   <MenuItem href="...">
 *     Item 2
 *   </MenuItem>
 * </Menu>
 */
export const Menu: React.FC<MenuProps> = ({ id, children }) => {
  return (
    <div id={id} className="menu">
      {children}
    </div>
  );
};

export default Menu;
