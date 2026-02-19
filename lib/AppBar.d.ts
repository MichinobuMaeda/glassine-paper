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
    style?: CSSProperties;
    className?: string;
}
export interface AppBarProps {
    id?: string;
    items: Iterable<AppBarItemProps | false | null | undefined>;
    sticky?: boolean;
    scrolled?: boolean;
    style?: CSSProperties;
    className?: string;
}
/**
 * Material Design 3 App bar component
 *
 * @param {AppBarProps} props The props for the AppBar component.
 * @param {string} [props.id] Element id
 * @param {Iterable<(AppBarItemProps | false | null | undefined)>} props.items Array of AppBarItem configurations
 * @param {string} [props.items[].id] Element id for the item
 * @param {('button' | 'appLogo' | 'title' | 'spacer')} [props.items[].type] Item type: 'button', 'appLogo', 'title', or 'spacer'
 * @param {React.ReactNode} [props.items[].icon] Icon element (svg or img)
 * @param {string} [props.items[].title] Title text
 * @param {string} [props.items[].subtitle] Subtitle text
 * @param {boolean} [props.items[].active] Active state
 * @param {boolean} [props.items[].hidden] Hidden state
 * @param {boolean} [props.items[].disabled] Disabled state
 * @param {Function} [props.items[].onClick] Click handler
 * @param {string} [props.items[].href] Link URL (renders as anchor tag)
 * @param {React.CSSProperties} [props.items[].style] Custom inline styles for the item
 * @param {string} [props.items[].className] Additional CSS classes for the item
 * @param {boolean} [props.sticky] Whether the app bar sticks to the top
 * @param {boolean} [props.scrolled] Whether the content is scrolled (affects styling)
 * @param {React.CSSProperties} [props.style] Custom inline styles
 * @param {string} [props.className] Additional CSS classes
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
 *     status !== "loading" && {
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
export declare const AppBar: React.FC<AppBarProps>;
export default AppBar;
//# sourceMappingURL=AppBar.d.ts.map