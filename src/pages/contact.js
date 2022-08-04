import CallToAction from '@/components/Common/CallToAction'
import Container from '@/components/Common/Container'
import Layout from '@/components/Layout/Layout'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <Layout>
      <div className="w-full h-[580px] relative">
        <Image
          src="/contact/bg-artmazigh.png"
          alt="Artmazigh"
          className={'absolute inset-0'}
          width={1920}
          height={1080}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <Container className={'absolute inset-0'}>
        <div className="relative z-[3]">
          <CallToAction />
        </div>
      </Container>
    </Layout>
  )
}

export default Contact
