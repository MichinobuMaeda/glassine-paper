import React, { type ReactNode } from 'react';

/**
 * Button component props
 */
export interface ButtonProps {
  /** Input id attribute */
  id?: string;
  /** Input name attribute */
  name?: string;
  /** Button variant */
  variant?:
    | 'filled'
    | 'tonal'
    | 'danger'
    | 'error'
    | 'outlined'
    | 'elevated'
    | 'text';
  /** Button size */
  size?: 'xs' | 'sm' | 'md';
  /** Button radius */
  radius?: 'default' | 'square';
  /** Icon button mode */
  icon?: boolean;
  /** Icon button width */
  width?: 'narrow' | 'default' | 'wide';
  /** Button type */
  type?: 'button' | 'submit' | 'reset' | 'toggle' | 'select';
  /** Link URL */
  href?: string;
  /** Checked state */
  checked?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Children elements */
  children: ReactNode;
  /** onClick handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Additional CSS class names */
  className?: string;
}

/**
 * Material Design 3 Button component
 *
 * @example
 * // Regular button
 * <Button variant="filled" size="sm">
 *   Click me
 * </Button>
 *
 * @example
 * // Button with leading icon and text
 * <Button variant="tonal" size="md" radius="square">
 *   <svg>...</svg>
 *   Label
 * </Button>
 *
 * @example
 * // Icon button
 * <Button variant="outlined" icon width="wide">
 *   <svg>...</svg>
 * </Button>
 *
 * @example
 * // Link button
 * <Button variant="elevated" href="https://example.com">
 *   Go to Example
 * </Button>
 *
 * @example
 * // Toggle button (checkbox)
 * <Button variant="filled" type="toggle" checked={isToggled}>
 *   <svg>...</svg>
 *   Toggle
 * </Button>
 *
 */
export const Button: React.FC<ButtonProps> = ({
  id,
  name,
  variant = 'filled',
  size = 'md',
  icon = false,
  width = 'default',
  radius = 'default',
  type = 'button',
  href,
  checked = false,
  disabled = false,
  children,
  onClick,
  className = '',
}) => {
  const classes = [
    'button',
    icon ? 'icon' : '',
    variant,
    size,
    icon && width !== 'default' ? width : '',
    icon && radius !== 'default' ? radius : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return type === 'toggle' ? (
    <label id={`${id}-label`} className={classes}>
      <input id={id} name={name} type="checkbox" checked={checked} />
      {children}
    </label>
  ) : type === 'select' ? (
    <label id={`${id}-label`} className={classes}>
      <input id={id} name={name} type="radio" checked={checked} />
      {children}
    </label>
  ) : href ? (
    <a id={id} href={href} className={classes}>
      {children}
    </a>
  ) : (
    <button
      id={id}
      name={name}
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
