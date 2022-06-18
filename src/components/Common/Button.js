import React from 'react'
import clsx from 'clsx'

const Button = ({ props, children, variant, className }) => {
  return (
    <button
      className={clsx(
        'py-3 px-14 rounded-xl text-sm   transition-all',
        className,
        variant === 'primary' && [
          'text-white rounded-[4px] bg-brand-primary hover:bg-brand-tertiary',
        ],
        variant === 'secondary' && ['text-white bg-red-500 hover:bg-red-800']
      )}
    >
      {children}
    </button>
  )
}

export default Button
