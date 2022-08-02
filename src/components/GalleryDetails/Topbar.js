import { ShareIcon, StarIcon } from '@heroicons/react/solid'
import React from 'react'

const Topbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3">
        <p className="text-neutral-50 text-xs">Mastermind</p>
        <div className="flex items-center">
          <StarIcon className="h-4 w-4 mr-1 text-brand-primary" />
          <p className="text-neutral-50 text-xs">5</p>
        </div>
        <p className="text-neutral-50 text-xs">01 January 2022</p>
      </div>
      <button>
        <ShareIcon className="h-6 w-6 text-neutral-50" />
      </button>
    </div>
  )
}

export default Topbar
