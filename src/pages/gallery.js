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
        <div className="grid grid-cols-3 px-{100}">
          {gallery.map((el, i) => {
            return (
              <>
                <div className="group object-cover">
                  <p className="items-center text-2xl text-brand-primary transition-all duration-500 opacity-0 group-hover:opacity-100 absolute flex pl-[32px] pt-[411px]">{gallery[i].title}</p>
                  <div className=''>
                    <img className="absolute h-[71%] opacity:100 group-hover:opacity-0 h-full" src='/rectangle.svg' />
                    <img className="duration-500 transition-all opacity:10 delay-100 text-white" src={gallery[i].imgSrc} />
                    {/* <div class="absolute -z-10 bg-gradient-to-t from-white via-gray-900 to-black h-[70vh] lg:h-[80vh]" /> */}
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