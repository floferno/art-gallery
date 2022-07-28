import React from 'react'

const CardProduct = ({ namePackage, listItem, price }) => {
  return (
    <div className="border border-brand-primary flex flex-col p-3 xl:px-9 xl:pt-14 xl:pb-12 rounded h-[400px] xl:h-[603px]">
      <h4 className="font-bold text-xl xl:text-2xl mb-4 xl:mb-11">
        {namePackage}
      </h4>
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
      <hr className="mt-auto border-neutral-50 max-w-[147px] mb-4 xl:mb-11" />
      <div className="flex flex-col">
        <p className="text-white mb-1 text-lg opacity-50">Starts from</p>
        <h6 className="text-white font-bold text-4xl xl:text-[68px]">
          $ {price}
        </h6>
      </div>
    </div>
  )
}

export default CardProduct
