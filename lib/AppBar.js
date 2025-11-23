import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, {} from 'react';
const AppBarItem = ({ id, type = 'button', title, subtitle, icon, active = false, hidden = false, onClick, href, }) => {
    const classes = [active ? 'active' : ''].join(' ');
    if (hidden) {
        return _jsx(_Fragment, {});
    }
    switch (title ? 'title' : type) {
        case 'button':
            return href ? (_jsx("a", { id: id, className: classes, href: href, children: icon })) : (_jsx("button", { id: id, className: classes, onClick: onClick, children: icon }));
        case 'appLogo':
            return icon;
        case 'title':
            return (_jsxs("div", { id: id, className: "title-area", children: [_jsx("div", { id: `${id}-title`, className: "title", children: title }), subtitle && (_jsx("div", { id: `${id}-subtitle`, className: "subtitle", children: subtitle }))] }));
        case 'spacer':
            return _jsx("div", { style: { flexGrow: 1 } });
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
 * @param {Function} [props.items[].onClick] Click handler
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
export const AppBar = ({ id, items, sticky = false, scrolled = false, style = {}, }) => {
    const classes = [
        'app-bar',
        sticky ? 'sticky' : '',
        scrolled ? 'on-scroll' : '',
    ].join(' ');
    return (_jsx("div", { id: id, className: classes, style: style, children: Array.from(items).map((item, index) => (_jsx(AppBarItem, { ...item }, item.key || index))) }));
};
export default AppBar;
//# sourceMappingURL=AppBar.js.map