import React from 'react'
import Container from '../Common/Container'
import Image from 'next/image'
import Button from '../Common/Button'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className="bg-brand-senary w-full ">
        <Container className={'flex flex-col '}>
          <div className="border text-white py-[63px] px-[34px] w-auto border-brand-primary rounded-lg relative  -mt-[135px]">
            <div className="flex items-end">
              <h3 className="font-bold text-[36px] leading-relaxed mr-2">
                Get informed for our latest update
              </h3>

              <form className="w-full max-w-[842px]   flex items-end justify-between gap-8">
                <div>
                  <label
                    className="block text-white-700 text-base mb-2"
                    for="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow border rounded h-[54px] w-[296px] py-2 px-3 text-gray-700 leading-tight focus:outline-brand-primary focus:shadow-outline placeholder:text-base"
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
                    className="shadow appearance-none h-[54px] w-[296px] border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-brand-primary  placeholder:text-base"
                    id="email"
                    type="text"
                    placeholder="Input your e-mail here..."
                  />
                </div>
                <Button className={'max-w-[186px] w-full'} variant="primary">
                  Send
                </Button>
              </form>
            </div>
          </div>
          <div className="flex flex-wrap bg-brand-senary mt-[84px]">
            <div className="">
              <Image
                width={275}
                height={60}
                src="/logo-footer.png"
                alt="Logo Footer"
              />
            </div>

            <div className="flex flex-col">
              <p>Artmazigh studios</p>
              <p>
                160 Robinson Road, #14-04 Singapore Business Federation Centre -
                068914, Singapore
              </p>
            </div>
            <Link href={'/contact-us'}>
              <a>Contact Us</a>
            </Link>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer
