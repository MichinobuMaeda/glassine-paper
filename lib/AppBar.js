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
 * @returns JSX.Element
 *
 * @example
 * const [scrolled, setScrolled] = useState(false);
 *
 * <div
 *   className="content-area"
 *   onScroll={(e) => setScrolled(e.currentTarget.scrollTop > 0)}
 * >
 *   <AppBar
 *     sticky
 *     scrolled={scrolled}
 *     items={[
 *       {
 *         icon: <svg>...</svg>,
 *         onClick: () => {...},
 *       },
 *       {
 *         type: "appLogo",
 *         icon: <img src="./favicon.svg" alt="Glassine Paper" />,
 *       },
 *       {
 *         type: "title",
 *         title: "App name",
 *         subtitle: "Description",
 *       },
 *       { type: "spacer" },
 *       {
 *         icon: <svg>...</svg>,
 *         onClick: () => {...},
 *       },
 *     ]}
 *   />
 *   ... ...
 * </div>
 */
export const AppBar = ({ id, items, sticky = false, scrolled = false, }) => {
    const classes = [
        'app-bar',
        sticky ? 'sticky' : '',
        scrolled ? 'on-scroll' : '',
    ].join(' ');
    return (_jsx("div", { id: id, className: classes, children: Array.from(items).map((item, index) => (_jsx(AppBarItem, { ...item }, item.key || index))) }));
};
export default AppBar;
//# sourceMappingURL=AppBar.js.map