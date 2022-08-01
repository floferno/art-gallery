import React from 'react'
import Image from 'next/image'
import Button from './Button'
import Input from './Input'

const CallToAction = ({ className, children, variant }) => {
  return (
    <>
        <div className="border text-white h-[226px] w-auto mb-[389px] bg-brand-quaternary border-brand-primary rounded-lg grid grid-cols-4 -top-28 relative">

            <div className="place-content-center grid-cols-4 mr-[30px]">
                <p className="ml-[34px] pt-[50px] text-[36px] font-700 leading-[50px] font-prettywise">Get informed for our latest update</p>
            </div>

            <div className="grid grid-cols-4">
                <Input className="grid-cols-4 w-[296px] py-2 px-3" placeholder="Input your name here..."></Input>
            </div>
            <div className="grid grid-cols-4">
                <Input className="grid-cols-4" placeholder="Input your e-mail here..."></Input>
            </div>

            <div className="grid-cols-4 mt-[111px] mb-[71px] mr-[34px] ml-[32px]">
                 <Button variant="primary" className="h-[44px] w-[186px]">Send</Button>
            </div>


            <div className="flex flex-wrap bg-brand-senary">
                <div className="">
                    <Image width={275} height={60} src="/logo-footer.png" alt="Logo Footer" />
                </div>

                <div className="grid grid-rows-4">
                    <div className="">
                        <p className="w-[187px] h-[83px] text-weight-400 text-brand-neutral line-height:0.875rem text-xs  mb-2">
                        
                        Artmazigh studios

                        160 Robinson Road, #14-04
                        Singapore Business Federation
                        Centre - 068914, Singapore

                        </p>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default CallToAction
