import Link from 'next/link'
import React from 'react'

const Breadcumb = () => {
  return (
    <div className="flex items-center gap-2 text-brand-secondary font-medium text-sm">
      <Link href="/">
        <a className="">Home</a>
      </Link>
      /{' '}
      <Link href={'/gallery'}>
        <a className="">Gallery</a>
      </Link>{' '}
      / <p className="text-neutral-50">Title Pages</p>
    </div>
  )
}

export default Breadcumb
