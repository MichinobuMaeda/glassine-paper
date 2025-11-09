import React, { type ReactNode, type CSSProperties } from 'react';

/**
 * Row component props
 */
export interface RowProps {
  /** Child elements */
  children: ReactNode;
  /** Vertical alignment */
  align?: 'start' | 'center' | 'bottom';
  /** Additional CSS class names */
  className?: string;
  /** Custom inline styles */
  style?: CSSProperties;
}

/**
 * Row component with flex layout
 *
 * @example
 * <Row>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Row>
 *
 * @example
 * <Row align="center">
 *   <button>Button</button>
 *   <span>Text</span>
 * </Row>
 *
 * @example
 * <Row align="bottom">
 *   <div>Top aligned by default</div>
 *   <div>Bottom aligned</div>
 * </Row>
 */
export const Row: React.FC<RowProps> = ({
  children,
  align = 'start',
  className = '',
  style,
}) => {
  const classes = ['row', align !== 'start' ? align : '', className]
    .filter(Boolean)
    .join(' ');

  const rowStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems:
      align === 'center'
        ? 'center'
        : align === 'bottom'
          ? 'flex-end'
          : 'flex-start',
    padding: '0 1rem',
    gap: '1rem',
    ...style,
  };

  return (
    <div className={classes} style={rowStyle}>
      {children}
    </div>
  );
};

export default Row;
