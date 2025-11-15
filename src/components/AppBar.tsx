import React, { type ReactNode } from 'react';

/**
 * App bar item component props
 */
export interface AppBarItemProps {
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
 * App bar title component props
 */
export interface AppBarTitleProps {
  /** Element id */
  id?: string;
  /** Title */
  title: string;
  /** Subtitle */
  subtitle?: string;
}

/**
 * App bar component props
 */
export interface AppBarProps {
  /** Element id */
  id?: string;
  /** Children AppBarItem elements */
  children: ReactNode;
  /** Sticky state */
  sticky?: boolean;
  /** Whether the content is scrolled */
  scrolled?: boolean;
}

/**
 * Material Design 3 App bar item component
 *
 * @param props AppBarItemProps
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
export const AppBarItem: React.FC<AppBarItemProps> = ({
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

export const AppBarTitle: React.FC<AppBarTitleProps> = ({
  id = 'app-bar-title',
  title,
  subtitle,
}) => {
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
};

/**
 * Material Design 3 App bar component
 *
 * @param props AppBarProps
 * @returns JSX.Element
 *
 * @example
 * const [scrolled, setScrolled] = useState(false);
 *
 * <div
 *   className="content-area"
 *   onScroll={(e) => setScrolled(e.currentTarget.scrollTop > 0)}
 * >
 *   <AppBar sticky scrolled={scrolled}>
 *     <AppBarItem onClick={() => {}} active={true}>
 *       <svg>...</svg>
 *     </AppBarItem>
 *     <img src="./favicon.svg" alt="Glassine Paper" />
 *     <AppBarTitle title="App Title" subtitle="Subtitle" />
 *     <AppBarItem href="...">
 *       <svg>...</svg>
 *     </AppBarItem>
 *   </AppBar>
 *   ... ...
 * </div>
 */
export const AppBar: React.FC<AppBarProps> = ({
  id,
  children,
  sticky = false,
  scrolled = false,
}) => {
  const classes = [
    'app-bar',
    sticky ? 'sticky' : '',
    scrolled ? 'on-scroll' : '',
  ].join(' ');
  return (
    <div id={id} className={classes}>
      {children}
    </div>
  );
};

export default AppBar;
