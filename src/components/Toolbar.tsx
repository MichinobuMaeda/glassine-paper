import React, { type ReactNode, type CSSProperties } from 'react';

export interface ToolbarItemProps {
  key?: string | number;
  id?: string;
  label?: string;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  toggle?: boolean;
  checked?: boolean;
  primary?: boolean;
  fab?: boolean;
}

export interface ToolbarProps {
  id?: string;
  items: Iterable<ToolbarItemProps>;
  variant?: 'docked' | 'floating';
  color?: 'standard' | 'vibrant';
  style?: CSSProperties;
}

const ToolbarItem: React.FC<ToolbarItemProps> = ({
  key,
  id,
  label,
  icon,
  disabled = false,
  onClick,
  href,
  toggle = false,
  checked = false,
  primary = false,
  fab = false,
}) => {
  const classes = [disabled ? 'disabled' : '', primary ? 'primary' : ''].join(
    ' '
  );
  return fab ? (
    <button
      key={key}
      id={id}
      className={`fab sm`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
    </button>
  ) : toggle ? (
    <label key={key} id={id} className={classes}>
      <input
        type="checkbox"
        disabled={disabled}
        onClick={onClick}
        checked={checked}
      />
      {icon}
      {label}
    </label>
  ) : href ? (
    <a key={key} id={id} className={classes} href={href}>
      {icon}
      {label}
    </a>
  ) : (
    <button key={key} id={id} className={classes} onClick={onClick}>
      {icon}
      {label}
    </button>
  );
};

/**
 * Material Design 3 Toolbar component
 *
 * @param props ToolbarProps
 * @param props.id Element id
 * @param props.items Array of ToolbarItem configurations
 * @param props.items[].key Unique key for the item
 * @param props.items[].id Element id for the item
 * @param props.items[].label Label text
 * @param props.items[].icon Icon element
 * @param props.items[].disabled Disabled state
 * @param props.items[].onClick Click handler
 * @param props.items[].href Link URL (renders as anchor tag)
 * @param props.items[].toggle Renders as toggle button if true
 * @param props.items[].checked Toggle button checked state
 * @param props.items[].primary Primary button styling if true
 * @param props.items[].fab Renders as floating action button if true on floating toolbars
 * @param props.variant Toolbar variant: 'docked' or 'floating'
 * @param props.color Toolbar color scheme: 'standard' or 'vibrant'
 * @param props.style Custom inline styles
 * @returns JSX.Element
 *
 * @example
 * <Toolbar
 *   id="example-toolbar"
 *   items={[
 *     {
 *       icon: {<svg>...</svg>},
 *       onClick: () => {},
 *     },
 *     { divider: true },
 *     {
 *       icon: {<svg>...</svg>},
 *       href: "...",
 *     },
 *   ]}
 * />
 */
export const Toolbar: React.FC<ToolbarProps> = ({
  id,
  items = [],
  style,
  variant = 'docked',
  color = 'standard',
}) => {
  const classes = ['toolbar', variant, color].join(' ');

  return variant === 'floating' ? (
    <div className="toolbar-container" style={style}>
      <div id={id} className={classes}>
        {Array.from(items)
          .filter((item) => !item.fab)
          .map((item, index) => (
            <ToolbarItem key={item.key || index} {...item} />
          ))}
      </div>
      {Array.from(items)
        .filter((item) => item.fab)
        .map((item, index) => (
          <ToolbarItem key={item.key || index} {...item} />
        ))}
    </div>
  ) : (
    <div id={id} className={classes} style={style}>
      {Array.from(items).map((item, index) => (
        <ToolbarItem key={item.key || index} {...item} fab={false} />
      ))}
    </div>
  );
};

export default Toolbar;
