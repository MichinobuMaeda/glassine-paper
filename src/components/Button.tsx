import React, { type ReactNode } from 'react';

/**
 * Button component props
 */
export interface ButtonProps {
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
  /** Icon button mode */
  icon?: boolean;
  /** Icon button width */
  width?: 'narrow' | 'default' | 'wide';
  /** Icon button radius */
  radius?: 'default' | 'square';
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
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
 * <Button variant="filled" size="sm">
 *   Click me
 * </Button>
 *
 * @example
 * <Button variant="outlined" icon>
 *   <svg>...</svg>
 * </Button>
 *
 * @example
 * <Button variant="tonal" size="md" icon width="wide" radius="square">
 *   <svg>...</svg>
 *   Label
 * </Button>
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  size = 'md',
  icon = false,
  width = 'default',
  radius = 'default',
  type = 'button',
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

  return (
    <button
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
