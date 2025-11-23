import React, { type ReactNode, type CSSProperties } from 'react';

export interface AppBarItemProps {
  key?: string | number;
  id?: string;
  type?: 'button' | 'appLogo' | 'title' | 'spacer';
  icon?: ReactNode;
  title?: string;
  subtitle?: string;
  active?: boolean;
  hidden?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}

export interface AppBarProps {
  id?: string;
  items: Iterable<AppBarItemProps>;
  sticky?: boolean;
  scrolled?: boolean;
  style?: CSSProperties;
}

const AppBarItem: React.FC<AppBarItemProps> = ({
  id,
  type = 'button',
  title,
  subtitle,
  icon,
  active = false,
  hidden = false,
  onClick,
  href,
}) => {
  const classes = [active ? 'active' : ''].join(' ');

  if (hidden) {
    return <></>;
  }
  switch (title ? 'title' : type) {
    case 'button':
      return href ? (
        <a id={id} className={classes} href={href}>
          {icon}
        </a>
      ) : (
        <button id={id} className={classes} onClick={onClick}>
          {icon}
        </button>
      );
    case 'appLogo':
      return icon;
    case 'title':
      return (
        <div id={id} className="title-area">
          <div id={`${id}-title`} className="title">
            {title}
          </div>
          {subtitle && (
            <div id={`${id}-subtitle`} className="subtitle">
              {subtitle}
            </div>
          )}
        </div>
      );
    case 'spacer':
      return <div style={{ flexGrow: 1 }}></div>;
  }
};

/**
 * Material Design 3 App bar component
 *
 * @param {AppBarProps} props The props for the AppBar component.
 * @param {string} [props.id] Element id
 * @param {Iterable<AppBarItemProps>} props.items Array of AppBarItem configurations
 * @param {(string | number)} [props.items[].key] Unique key for the item
 * @param {string} [props.items[].id] Element id for the item
 * @param {('button' | 'appLogo' | 'title' | 'spacer')} [props.items[].type] Item type: 'button', 'appLogo', 'title', or 'spacer'
 * @param {React.ReactNode} [props.items[].icon] Icon element (svg or img)
 * @param {string} [props.items[].title] Title text
 * @param {string} [props.items[].subtitle] Subtitle text
 * @param {boolean} [props.items[].active] Active state
 * @param {boolean} [props.items[].hidden] Hidden state
 * @param {boolean} [props.items[].disabled] Disabled state
 * @param {() => void} [props.items[].onClick] Click handler
 * @param {string} [props.items[].href] Link URL (renders as anchor tag)
 * @param {boolean} [props.sticky] Whether the app bar sticks to the top
 * @param {boolean} [props.scrolled] Whether the content is scrolled (affects styling)
 * @param {React.CSSProperties} [props.style] Custom inline styles
 * @returns {JSX.Element}
 *
 * @example
 * import useDetectScroll, { Axis } from '@smakss/react-scroll-direction';
 *
 * const [scrolled, setScrolled] = useState(false);
 * const { scrollPosition } = useDetectScroll({ axis: Axis.X });
 *
 * useEffect(() => {
 *   setScrolled(scrollPosition.top > 0);
 * }, [scrollPosition]);
 *
 * <AppBar
 *   sticky
 *   scrolled={scrolled}
 *   items={[
 *     {
 *       icon: <svg>...</svg>,
 *       onClick: () => {...},
 *     },
 *     {
 *       type: "appLogo",
 *       icon: <img src="./favicon.svg" alt="Glassine Paper" />,
 *     },
 *     {
 *       type: "title",
 *       title: "App name",
 *       subtitle: "Description",
 *     },
 *     { type: "spacer" },
 *     {
 *       icon: <svg>...</svg>,
 *       onClick: () => {...},
 *     },
 *   ]}
 * />
 */
export const AppBar: React.FC<AppBarProps> = ({
  id,
  items,
  sticky = false,
  scrolled = false,
  style = {},
}) => {
  const classes = [
    'app-bar',
    sticky ? 'sticky' : '',
    scrolled ? 'on-scroll' : '',
  ].join(' ');
  return (
    <div id={id} className={classes} style={style}>
      {Array.from(items).map((item, index) => (
        <AppBarItem key={item.key || index} {...item} />
      ))}
    </div>
  );
};

export default AppBar;
