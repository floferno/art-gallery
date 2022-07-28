import React from 'react'

const CardProduct = ({ namePackage, listItem, price }) => {
  return (
    <div className="border border-brand-primary flex flex-col p-3 xl:px-9 xl:pt-14 xl:pb-12 rounded h-auto sm:h-[400px] xl:h-[603px]">
      <div className="flex mb-3 sm:mb-0">
        <h4 className="font-bold text-sm sm:text-xl xl:text-2xl mb-4 xl:mb-11 break-normal w-[4.25em] sm:w-auto">
          {namePackage}
        </h4>
        <div className="flex flex-col ml-auto">
          <p className="text-white mb-1 text-2xs opacity-50">Starts from</p>
          <h6 className="text-white font-bold text-base font-sf-pro">
            $ {price}
          </h6>
        </div>
      </div>
      <hr className=" border-neutral-50 w-full block sm:hidden mb-3" />
      <div>
        <ul className="ml-4 text-sm ">
          {listItem?.map((item, index) => {
            return (
              <li key={index} className="dots-white">
                {item}
              </li>
            )
          })}
        </ul>
      </div>
      <hr className="mt-auto border-neutral-50 max-w-[147px] mb-4 xl:mb-11 hidden sm:block" />
      <div className="hidden sm:flex flex-col">
        <p className="text-white mb-1 text-lg opacity-50">Starts from</p>
        <h6 className="text-white font-bold text-4xl xl:text-[68px] font-sf-pro">
          $ {price}
        </h6>
      </div>
    </div>
  )
}

export default CardProduct
