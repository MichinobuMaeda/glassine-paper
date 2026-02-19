import React, { type ReactNode, type CSSProperties } from 'react';

export interface ToolbarItemProps {
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
  items: Iterable<ToolbarItemProps | false | null | undefined>;
  variant?: 'docked' | 'floating';
  color?: 'standard' | 'vibrant';
  style?: CSSProperties;
}

const ToolbarItem: React.FC<ToolbarItemProps> = ({
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
    <button id={id} className={`fab sm`} disabled={disabled} onClick={onClick}>
      {icon}
    </button>
  ) : toggle ? (
    <label id={id} className={classes}>
      <input
        type="checkbox"
        disabled={disabled}
        onChange={onClick}
        checked={checked}
      />
      {icon}
      {label}
    </label>
  ) : href ? (
    <a id={id} className={classes} href={href}>
      {icon}
      {label}
    </a>
  ) : (
    <button id={id} className={classes} onClick={onClick}>
      {icon}
      {label}
    </button>
  );
};

/**
 * Material Design 3 Toolbar component
 *
 * @param {ToolbarProps} props ToolbarProps
 * @param {string} [props.id] Element id
 * @param {Iterable<(ToolbarItemProps | false | null | undefined)>} props.items Array of ToolbarItem configurations
 * @param {string} [props.items[].id] Element id for the item
 * @param {string} [props.items[].label] Label text
 * @param {React.ReactNode} [props.items[].icon] Icon element
 * @param {boolean} [props.items[].disabled] Disabled state
 * @param {Function} [props.items[].onClick] Click handler
 * @param {string} [props.items[].href] Link URL (renders as anchor tag)
 * @param {boolean} [props.items[].toggle] Renders as toggle button if true
 * @param {boolean} [props.items[].checked] Toggle button checked state
 * @param {boolean} [props.items[].primary] Primary button styling if true
 * @param {boolean} [props.items[].fab] Renders as floating action button if true on floating toolbars
 * @param {('docked' | 'floating')} [props.variant] Toolbar variant: 'docked' or 'floating'
 * @param {('standard' | 'vibrant')} [props.color] Toolbar color scheme: 'standard' or 'vibrant'
 * @param {React.CSSProperties} [props.style] Custom inline styles
 * @returns {JSX.Element}
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
 *     status !== 'loading' && {
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
  const activeItems = Array.from(items).filter((item) => !!item);

  return variant === 'floating' ? (
    <div className="toolbar-container" style={style}>
      <div id={id} className={classes}>
        {activeItems
          .filter((item) => !item.fab)
          .map((item, index) => {
            const { key: itemKey, ...rest } = item as ToolbarItemProps & {
              key?: string | number;
            };
            const key = itemKey ?? index;
            return <ToolbarItem key={key} {...rest} />;
          })}
      </div>
      {activeItems
        .filter((item) => item.fab)
        .map((item, index) => {
          const { key: itemKey, ...rest } = item as ToolbarItemProps & {
            key?: string | number;
          };
          const key = itemKey ?? index;
          return <ToolbarItem key={key} {...rest} />;
        })}
    </div>
  ) : (
    <div id={id} className={classes} style={style}>
      {activeItems.map((item, index) => {
        const { key: itemKey, ...rest } = item as ToolbarItemProps & {
          key?: string | number;
        };
        const key = itemKey ?? index;
        return <ToolbarItem key={key} {...rest} fab={false} />;
      })}
    </div>
  );
};

export default Toolbar;
