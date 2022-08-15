import React from 'react'
import Container from '../Common/Container'
import Image from 'next/image'
import Link from 'next/link'

import CallToAction from '../Common/CallToAction'
import { useRouter } from 'next/router'
import {  BsInstagram } from 'react-icons/bs'
import { SiFiverr } from 'react-icons/si'
import { FaFacebookF } from 'react-icons/fa'
const Footer = () => {∂
  const router = useRouter()
  console.log('router', router.pathname)
  return (
    <>
      <div className="bg-brand-senary w-full h-[200px] sm:h-[300px] xl:h-[388px]">
        <Container className={'flex flex-col '}>
          {router.pathname !== '/contact' ? <CallToAction /> : null}

          <div className="grid grid-cols-12 gap-8 bg-brand-senary mt-[84px]">
            <div
              className="col-span-6 lg:col-span-3 flex items-center justify-center mx-auto row-start-1"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <Link href="/">
                <a className="transition-all hover:opacity-60">
                  <Image
                    width={275}
                    height={60}
                    src="/logo-footer.png"
                    alt="Logo Footer"
                  />
                </a>
              </Link>
            </div>
            <div
              className="col-span-6 lg:col-span-3 lg:col-start-5 row-start-1 flex flex-col "
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <p className="mb-4">Artmazigh studios</p>
              <p>
                160 Robinson Road, #14-04 Singapore Business Federation Centre -
                068914, Singapore
              </p>
            </div>
            <div className="row-start-2 lg:row-start-1 col-span-2 my-auto">
              <Link href={'/contact-us'}>
                <a
                  className="flex  text-center    items-center justify-center hover:text-brand-tertiary transition-all"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  Contact Us
                </a>
              </Link>
            </div>
            <div className="col-span-3 col-end-13 flex items-center justify-end row-start-2 lg:row-start-1">
              <div className="flex flex-row space-x-8 ">
                <Link href="/">
                  <a
                    className="bg-brand-primary h-11 w-11 rounded-full flex items-center justify-center transition-all hover:opacity-60"
                    data-aos="fade-down"
                    data-aos-delay="500"
                  >
                    <FaFacebookF className="w-8 h-8 text-white" />
                  </a>
                </Link>
                <Link href="/">
                  <a
                    className="bg-brand-primary h-11 w-11 rounded-full flex items-center justify-center transition-all hover:opacity-60"
                    data-aos="fade-down"
                    data-aos-delay="600"
                  >
                    <BsInstagram className="w-8 h-8 text-white" />
                  </a>
                </Link>
                <Link href="/">
                  <a
                    className="bg-brand-primary h-11 w-11 rounded-full flex items-center justify-center transition-all hover:opacity-60"
                    data-aos="fade-down"
                    data-aos-delay="700"
                  >
                    <SiFiverr className="w-8 h-8 text-white" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="grid grid-cols-12 max-w-screen-xl text-sm gap-8 w-full px-5 mx-auto relative py-5 items-center">
        <p className="col-span-3">Design by: Mindhunter Studios @danyasary</p>
      </div>
    </>
  )
}

export default Footer
