import React, { type ReactNode, type CSSProperties } from 'react';

export interface TabItemProps {
  id?: string;
  label: string;
  leadingIcon?: ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}

export interface TabsProps {
  id?: string;
  items: Iterable<TabItemProps>;
  style?: CSSProperties;
}

const TabItem: React.FC<TabItemProps> = ({
  id,
  leadingIcon,
  label,
  active = false,
  onClick,
  href,
}) => {
  const classes = [active ? 'active' : ''].join(' ');
  return href ? (
    <a id={id} className={classes} href={href}>
      {leadingIcon}
      {label}
    </a>
  ) : (
    <button id={id} className={classes} onClick={onClick}>
      {leadingIcon}
      {label}
    </button>
  );
};

/**
 * Material Design 3 Tabs component
 *
 * @param {TabsProps} props TabsProps
 * @param {string} [props.id] Element id
 * @param {Iterable<TabItemProps>} props.items Array of TabItem configurations
 * @param {string} [props.items[].id] Element id for the item
 * @param {string} props.items[].label Label text
 * @param {React.ReactNode} [props.items[].leadingIcon] Leading icon element
 * @param {boolean} [props.items[].active] Active state
 * @param {boolean} [props.items[].disabled] Disabled state
 * @param {Function} [props.items[].onClick] Click handler
 * @param {string} [props.items[].href] Link URL (renders as anchor tag)
 * @param {React.CSSProperties} [props.style] Custom inline styles
 * @returns {JSX.Element}
 *
 * @example
 * <Tabs
 *   id="example-tabs"
 *   items={[
 *     {
 *       leadingIcon: {<svg>...</svg>},
 *       label: "Item 1",
 *     },
 *     {
 *       label: "Item 2",
 *     },
 *   ]}
 * />
 */
export const Tabs: React.FC<TabsProps> = ({ id, items = [], style = {} }) => {
  return (
    <div id={id} className="tabs" style={style}>
      {Array.from(items).map((item, index) => {
        const { key: itemKey, ...rest } = item as TabItemProps & {
          key?: string | number;
        };
        const key = itemKey ?? index;
        return <TabItem key={key} {...rest} />;
      })}
    </div>
  );
};

export default Tabs;
