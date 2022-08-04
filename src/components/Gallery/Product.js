import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Product = ({ urlProduct, titleProduct, imgProduct, paragrafProduct }) => {
  return (
    <>
      <Link href={`/gallery/${urlProduct}`} passHref>
        <a>
          <div className="w-full h-[192px] sm:h-[300px] lg:h-[472px] group relative overflow-hidden rounded-lg mb-3">
            <Image
              src={imgProduct}
              alt={titleProduct}
              height={475}
              width={700}
              objectFit="cover"
              layout="fill"
            />

            <div className="bg-gallery top-0 left-0 bottom-0 right-0 hidden sm:flex absolute invisible group-hover:visible transition-all duration-100">
              <p className="text-xl text-brand-primary transition-all duration-500 opacity-0 group-hover:opacity-100 absolute flex-auto ml-[32px] mt-[411px] text-clip overflow-hidden">
                {titleProduct}
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <StarIcon className="h-[14px] w-[14px] mr-1 text-brand-primary" />
              <p className="text-white text-sm">5</p>
            </div>
            <h6 className="text-white text-sm font-sf-pro mb-3">
              {titleProduct}
            </h6>
            <p className="text-neutral-50 text-2xs">{paragrafProduct}</p>
          </div>
        </a>
      </Link>
    </>
  )
}

export default Product
