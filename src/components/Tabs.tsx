import React, { type ReactNode } from 'react';

export interface TabItemProps {
  key?: string | number;
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
}

const TabItem: React.FC<TabItemProps> = ({
  key,
  id,
  leadingIcon,
  label,
  active = false,
  onClick,
  href,
}) => {
  const classes = [active ? 'active' : ''].join(' ');
  return href ? (
    <a key={key} id={id} className={classes} href={href}>
      {leadingIcon}
      {label}
    </a>
  ) : (
    <button key={key} id={id} className={classes} onClick={onClick}>
      {leadingIcon}
      {label}
    </button>
  );
};

/**
 * Material Design 3 Tabs component
 *
 * @param props TabsProps
 * @param props.id Element id
 * @param props.items Array of TabItem configurations
 * @param props.items[].key Unique key for the item
 * @param props.items[].id Element id for the item
 * @param props.items[].label Label text
 * @param props.items[].leadingIcon Leading icon element
 * @param props.items[].active Active state
 * @param props.items[].disabled Disabled state
 * @param props.items[].onClick Click handler
 * @param props.items[].href Link URL (renders as anchor tag)
 * @returns JSX.Element
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
export const Tabs: React.FC<TabsProps> = ({ id, items = [] }) => {
  return (
    <div id={id} className="tabs">
      {Array.from(items).map((item, index) => (
        <TabItem key={item.key || index} {...item} />
      ))}
    </div>
  );
};

export default Tabs;
