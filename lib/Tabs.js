import { jsx as _jsx } from "react/jsx-runtime";
import React, {} from 'react';
/**
 * Material Design 3 Tab item component
 *
 * @param props TabItemProps
 * @returns JSX.Element
 *
 * @example
 * <TabItem onClick={() => {}} active={true}>
 *   <svg>...</svg>
 *   Item 1
 * </TabItem>
 *
 * @example
 * <TabItem href="...">
 *   Item 2
 * </TabItem>
 */
export const TabItem = ({ id, active = false, children, onClick, href, }) => {
    const classes = [active ? 'active' : ''].join(' ');
    return href ? (_jsx("a", { id: id, className: classes, href: href, children: children })) : (_jsx("button", { id: id, className: classes, onClick: onClick, children: children }));
};
/**
 * Material Design 3 Tabs component
 *
 * @param props TabsProps
 * @returns JSX.Element
 *
 * @example
 * <Tabs id="example-tabs">
 *   <TabItem onClick={() => {}} active={true}>
 *     <svg>...</svg>
 *     Item 1
 *   </TabItem>
 *   <TabItem href="...">
 *     Item 2
 *   </TabItem>
 * </Tabs>
 */
export const Tabs = ({ id, children }) => {
    return (_jsx("div", { id: id, className: "tabs", children: children }));
};
export default Tabs;
//# sourceMappingURL=Tabs.js.map