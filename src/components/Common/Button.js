import React from 'react'
import clsx from 'clsx'

const Button = ({ props, children, variant, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'py-3 px-14 rounded-xl text-sm   transition-all border',
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
    >
      {children}
    </button>
  )
}

export default Button
