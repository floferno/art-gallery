import clsx from 'clsx'
import React from 'react'

const Container = ({ className, children }) => {
  return (
    <section className={clsx('max-w-screen-xl px-5 w-full mx-auto', className)}>
      {children}
    </section>
  )
}

export default Container
