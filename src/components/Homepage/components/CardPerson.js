import { StarIcon } from '@heroicons/react/solid'
import React from 'react'

const CardPerson = () => {
  return (
    <div className="flex items-start">
      <div className="w-6 h-6 sm:w-10 sm:h-10 lg:h-[60px] lg:w-[60px] rounded-full overflow-hidden flex-shrink-0 mr-6">
        <img
          src="/homepage/testimoni/user-1.png"
          className="object-cover w-full h-full"
          alt="Person Testimony"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-end mb-1 sm:mb-3">
          <p className=" text-base sm:text-xl mr-3">Kayib</p>
          <StarIcon className="h-4 w-4 text-brand-secondary mb-[2px] mr-1" />
          <p className=" text-sm sm:text-base">5</p>
        </div>
        <p className="text-sm mb-3">
          Fantastic! I’ve worked with them multiple times and each time they
          surprise me with how good the quality of their work is,
          professionalism and communication. Will keep using!{' '}
        </p>
        <p className="opacity-50 text-sm">Fiverr . Published 1 month ago</p>
      </div>
    </div>
  )
}

export default CardPerson
