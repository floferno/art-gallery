import React from 'react'
import Container from '../Common/Container'
import Image from 'next/image'
import Button from '../Common/Button'
import Link from 'next/link'
import FacebookIcons from '../../../public/icons/fb-icons.svg'
import InstagramIcons from '../../../public/icons/ig-icons.svg'
import FiverrIcons from '../../../public/icons/fiverr-icons.svg'
import CallToAction from '../Common/CallToAction'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter()
  console.log('router', router.pathname)
  return (
    <>
      <div className="bg-brand-senary w-full h-[388px]">
        <Container className={'flex flex-col '}>
          {router.pathname !== '/contact' ? <CallToAction /> : null}

          <div className="grid grid-cols-12 gap-8 bg-brand-senary mt-[84px]">
            <div className="col-span-3 col-start flex items-center mx-auto">
              <Image
                width={275}
                height={60}
                src="/logo-footer.png"
                alt="Logo Footer"
              />
            </div>
            <div className="col-span-3 col-start-5">
              <p>Artmazigh studios</p>
              <p>
                160 Robinson Road, #14-04 Singapore Business Federation Centre -
                068914, Singapore
              </p>
            </div>
            <Link href={'/contact-us'}>
              <a className="flex col-span-2 text-center justify-center items-center">
                Contact Us
              </a>
            </Link>
            <div className="col-span-3 col-end-13 flex items-center justify-end">
              <div className="flex flex-row space-x-8 ">
                <FacebookIcons className="w-11 h-11" />
                <InstagramIcons className="w-11 h-11" />
                <FiverrIcons className="w-11 h-11" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="grid grid-cols-12 max-w-screen-xl text-sm gap-8 w-full px-5 mx-auto relative h-[67px] items-center">
        <p className="col-start-1 col-span-3">
          Design by: Mindhunter Studios @danyasary
        </p>
      </div>
    </>
  )
}

export default Footer
