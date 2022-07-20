import Container from '@/components/Common/Container'
import Layout from '@/components/Layout/Layout'
import React from 'react'
import Image from 'next/image'
import gallery from '../data/gallery.json'
/*
 * * 1. Container sesuai design
 * * 2. Grid sesuai design, grid 3 column. & ga ada jaraknya.
 * * 3. import gambar dan benar
 * * 4. Looping gambar tersebut
 * * 5. data utk simpan url gambar
 */
const Gallery = () => {
  // console.log(gallery[0], "isinya obj imgsrc")
  return (
    <Layout>
      <Container>
        <div className="grid grid-cols-3 mb-[245px]">
          {gallery.map((el, i) => {
            return (
              <>
                {/* class parent harus relative kalo childrennya pake class absolute */}
                <div className="w-full h-[472px] group relative flex-auto">
                  <img
                    className="w-full h-full text-white"
                    src={gallery[i].imgSrc}
                    alt={gallery[i].title}
                  />
                  <div className="bg-gallery top-0 left-0 bottom-0 right-0 flex absolute invisible group-hover:visible transition-all duration-100">
                    <p className="text-xl text-brand-primary transition-all duration-500 opacity-0 group-hover:opacity-100 absolute flex-auto ml-[32px] mt-[411px] text-clip overflow-hidden">
                      {gallery[i].title}
                    </p>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </Container>
    </Layout>
  )
}

export default Gallery
