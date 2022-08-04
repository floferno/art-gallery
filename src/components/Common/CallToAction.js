import React from 'react'
import Image from 'next/image'
import Button from './Button'
import Input from './Input'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const CallToAction = () => {
  const router = useRouter()
  const pathUrl = router.pathname
  return (
    <>
      <div
        className={clsx(
          'border text-white p-6 xl:py-[63px] xl:px-[34px] w-auto border-brand-primary bg-brand-quaternary rounded-lg relative  ',
          pathUrl !== '/contact' ? '-mt-[135px]' : 'mt-[270px] mb-[84px]'
        )}
      >
        <div className="flex items-end flex-col xl:flex-row">
          <h3 className="font-bold text-xl sm:text-[36px] leading-relaxed xl:mr-2 mx-auto xl:mx-0 mb-6 sm:mb-0">
            Get informed for our latest update
          </h3>

          <form className="w-full lg:max-w-[100%] xl:max-w-[842px] flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <label className="block text-white-700 text-base mb-2" for="name">
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
            <Button
              className={'sm:max-w-[186px] w-full h-11 sm:h-auto'}
              variant="primary"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CallToAction
