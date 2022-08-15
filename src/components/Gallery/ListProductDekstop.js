import React from 'react'

import Image from 'next/image'
import gallery from '@/data/gallery.json'
import Link from 'next/link'

const ListProductDekstop = () => {
  return (
    <div className="hidden lg:grid grid-cols-3 mb-[245px] ">
      {gallery.map((el, i) => {
        return (
          <>
            {/* class parent harus relative kalo childrennya pake class absolute */}
            <Link href={`/gallery/${gallery[i].link}`} passHref>
              <a
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay={`${i * 200}`}
              >
                <div className="w-full h-[472px] group relative flex-auto">
                  <Image
                    width={413}
                    height={472}
                    objectFit="cover"
                    layout="fill"
                    src={gallery[i].imgSrc}
                    alt={gallery[i].title}
                  />
                  <div className="bg-gallery top-0 left-0 bottom-0 right-0 flex absolute invisible group-hover:visible transition-all duration-100">
                    <p className="text-xl text-brand-primary transition-all duration-500 opacity-0 group-hover:opacity-100 absolute flex-auto ml-[32px] mt-[411px] text-clip overflow-hidden">
                      {gallery[i].title}
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </>
        )
      })}
    </div>
  )
}

export default ListProductDekstop
