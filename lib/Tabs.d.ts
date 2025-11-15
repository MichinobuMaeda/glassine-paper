import React, { type ReactNode } from 'react';
/**
 * Tab item component props
 */
export interface TabItemProps {
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
 * Tabs component props
 */
export interface TabsProps {
    /** Element id */
    id?: string;
    /** Children TabItem elements */
    children: ReactNode;
}
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
export declare const TabItem: React.FC<TabItemProps>;
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
export declare const Tabs: React.FC<TabsProps>;
export default Tabs;
//# sourceMappingURL=Tabs.d.ts.map