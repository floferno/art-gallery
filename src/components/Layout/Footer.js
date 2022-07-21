import React from 'react'
import Container from '../Common/Container'
import Image from 'next/image'
import Button from '../Common/Button'

const Footer = () => {
  return (
    <>
      <div className="bg-brand-senary w-full ">
        <Container className={'flex flex-col'}>
          <div className="border bg-brand-quaternary text-white py-[63px] px-[34px] w-auto border-brand-primary rounded-lg relative  -mt-[125px]">
            <div className="flex items-end">
              <h3 className="font-bold text-[36px] leading-relaxed mr-2">
                Get informed for our latest update
              </h3>

              <form className="w-full max-w-[842px] flex items-end justify-between gap-8">
                <div>
                  <label className="block text-white-700 text-base mb-2" for="name">
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


          <div className="flex flex-wrap bg-brand-senary mt-[200px]">
            <div className="grid grid-rows-4">
              <Image
                width={275}
                height={60}
                src="/logo-footer.png"
                alt="Logo Footer"
              />
            </div>

            <div className="grid grid-rows-4">
              <div className="">
                <p className="w-[12rem] h-[5rem] font-sfpro text-weight-400 text-brand-neutral line-height:0.875rem text-xs mb-2">
                  Artmazigh studios
                  160 Robinson Road, #14-04 Singapore Business
                  Federation Centre - 068914, Singapore
                </p>
              </div>
            </div>

            <div className="grid grid-rows-4 margin-auto">
              <p className="width={187} height={83} text-weight-400 text-brand-neutral line-height:1.225rem text-xs mb-2">
                Contact Us
              </p>
            </div>

            <div className="grid grid-rows-4 gap-8"> 
              <div className="">
                <Image 
                  width={44}
                  height={44}
                  src="/fb-icon.svg"
                  alt="Facebook Icon"
                />
                <Image 
                  width={44}
                  height={44}
                  src="/ig-icon.svg"
                  alt="Instagram Icon"
                />
                <Image 
                  width={44}
                  height={44}
                  src="/fiverr-icon.svg"
                  alt="Fiverr Icon"
                />
              </div>
            </div>

          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer
