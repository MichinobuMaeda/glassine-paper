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
/**
 * Material Design 3 App bar component
 *
 * @param props AppBarProps
 * @param props.id Element id
 * @param props.items Array of AppBarItem configurations
 * @param props.items[].key Unique key for the item
 * @param props.items[].id Element id for the item
 * @param props.items[].type Item type: 'button', 'appLogo', 'title', or 'spacer'
 * @param props.items[].icon Icon element (svg or img)
 * @param props.items[].title Title text
 * @param props.items[].subtitle Subtitle text
 * @param props.items[].active Active state
 * @param props.items[].hidden Hidden state
 * @param props.items[].disabled Disabled state
 * @param props.items[].onClick Click handler
 * @param props.items[].href Link URL (renders as anchor tag)
 * @param props.sticky Whether the app bar sticks to the top
 * @param props.scrolled Whether the content is scrolled (affects styling)
 * @param props.style Custom inline styles
 * @returns JSX.Element
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
export declare const AppBar: React.FC<AppBarProps>;
export default AppBar;
//# sourceMappingURL=AppBar.d.ts.map