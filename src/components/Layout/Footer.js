import React from 'react'
import Container from '../Common/Container'
import Image from 'next/image'
import Button from '../Common/Button'
import Link from 'next/link'
import FacebookIcons from '../../../public/icons/fb-icons.svg'
import InstagramIcons from '../../../public/icons/ig-icons.svg'
import FiverrIcons from '../../../public/icons/fiverr-icons.svg'

const Footer = () => {
  return (
    <>
      <div className="bg-brand-senary w-full h-[388px]">
        <Container className={'flex flex-col '}>
          <div className="border text-white p-6 xl:py-[63px] xl:px-[34px] w-auto border-brand-primary bg-brand-quaternary rounded-lg relative  -mt-[135px]">
            <div className="flex items-end flex-col xl:flex-row">
              <h3 className="font-bold text-xl sm:text-[36px] leading-relaxed xl:mr-2 mx-auto xl:mx-0 mb-6 sm:mb-0">
                Get informed for our latest update
              </h3>

              <form className="w-full lg:max-w-[100%] xl:max-w-[842px] flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div>
                  <label
                    className="block text-white-700 text-base mb-2"
                    for="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow border rounded p-4 h-[54px] w-full lg:w-[300px] xl:w-[296px] py-2 px-3 text-gray-700 leading-tight focus:outline-brand-primary focus:shadow-outline placeholder:text-base"
                    id="name"
                    type="text"
                    placeholder="Input your name here..."
                  />
                </div>
                <div className="">
                  <label
                    className="text-base block text-white-700 mb-2"
                    for="email"
                  >
                    E-mail
                  </label>
                  <input
                    className="shadow appearance-none p-4  h-[54px] w-full lg:w-[300px] xl:w-[296px] border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-brand-primary  placeholder:text-base"
                    id="email"
                    type="text"
                    placeholder="Input your e-mail here..."
                  />
                </div>
                <Button className={'sm:max-w-[186px] w-full'} variant="primary">
                  Send
                </Button>
              </form>
            </div>
          </div>
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
