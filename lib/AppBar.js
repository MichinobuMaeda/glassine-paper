import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, {} from 'react';
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
export const AppBarItem = ({ id, active = false, children, onClick, href, }) => {
    const classes = [active ? 'active' : ''].join(' ');
    return href ? (_jsx("a", { id: id, className: classes, href: href, children: children })) : (_jsx("button", { id: id, className: classes, onClick: onClick, children: children }));
};
export const AppBarTitle = ({ id = 'app-bar-title', title, subtitle, }) => {
    return (_jsxs("div", { id: id, className: "title-area", children: [_jsx("div", { id: `${id}-title`, className: "title", children: title }), subtitle && (_jsx("div", { id: `${id}-subtitle`, className: "subtitle", children: subtitle }))] }));
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
export const AppBar = ({ id, children, sticky = false, scrolled = false, }) => {
    const classes = [
        'app-bar',
        sticky ? 'sticky' : '',
        scrolled ? 'on-scroll' : '',
    ].join(' ');
    return (_jsx("div", { id: id, className: classes, children: children }));
};
export default AppBar;
//# sourceMappingURL=AppBar.js.map