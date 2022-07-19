import React from 'react'
import clsx from 'clsx'

const Input = ({ 
    label, placeholder, props, children, variant }) => {
  return (
    <div className="columns ">
        <label className="block text-white-700 text-base mb-2" >
        </label>
        {/* {label} */}
         <input className="shadow border rounded h-[54px] w-[296px] py-2 px-3 text-gray-700 leading-tight focus:outline-brand-primary focus:shadow-outline placeholder:text-base" id="name" type="text" placeholder={placeholder} />
    </div>
  )
}

export default Input
