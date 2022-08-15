import React from 'react'
import clsx from 'clsx'

const Button = ({ children, variant, className, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'py-2 px-[11px] xl:py-3 xl:px-14 rounded-xl text-xs lg:text-sm   transition-all border',
        className,
        variant === 'primary' && [
          'text-white rounded-[4px] bg-brand-primary hover:bg-brand-tertiary border-brand-primary hover:border-brand-tertiary',
        ],
        variant === 'secondary' && [
          'text-white bg-red-500 hover:bg-red-800 border-red-500 hover:border-red-800',
        ],
        variant === 'outline' && [
          'text-white bg-transparent hover:bg-brand-primary border-white hover:border-brand-primary',
        ]
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
