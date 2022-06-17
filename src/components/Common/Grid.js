import clsx from 'clsx';
import React from 'react';

const Grid = ({ className, children }) => {
  return (
    <div className={clsx('grid grid-cols-12 gap-8', className)}>{children}</div>
  );
};

export default Grid;
