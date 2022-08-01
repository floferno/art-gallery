import Image from 'next/image'
import React from 'react'
import Breadcumb from '../Common/Breadcumb'
import Container from '../Common/Container'

const Thumbnails = () => {
  return (
    <div className="w-full h-[170px] sm:h-[400px] lg:h-[608px] overflow-hidden relative">
      <Image
        src={'/gallery-details/thumbnails.png'}
        alt="thumbnails"
        layout="fill"
        objectFit={'cover'}
      />
      <div className="hidden sm:block absolute top-0 left-0 right-0">
        <Container className={'pt-7'}>
          <Breadcumb />
        </Container>
      </div>
    </div>
  )
}

export default Thumbnails
