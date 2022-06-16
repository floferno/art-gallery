import React from 'react';
import clsx from 'clsx';

const Button = ({ props, children, variant, className }) => {
  return (
    <button
      className={clsx(
        'px-5 py-3 rounded-xl text-sm font-medium   transition-all',
        className,
        variant === 'primary' && [
          'text-white bg-indigo-500 hover:bg-indigo-800',
        ],
        variant === 'secondary' && ['text-white bg-red-500 hover:bg-red-800']
      )}
    >
      {children}
    </button>
  );
};

export default Button;
