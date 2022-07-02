import React from "react";
import Container from "../Common/Container";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-navbar-bg w-full overflow-hidden"> 
        <Container>
          <div className="border text-white h-[226px] w-auto mt-[100px] mb-[389px] border-brand-primary rounded-lg place-items-center grid grid-cols-4">

            <div className="grid-cols-4 mr-[30px] mb-[100px]">
              <p className="ml-[34px] pt-[50px] text-[36px] font-700 leading-[50px] font-prettywise">Get informed for our latest update</p>
            </div>

            <div className="grid-cols-4">
              <div className="">
                <label class="block text-white-700 text-base mb-2" for="name">
                Name
              </label>
              <input class="shadow border rounded h-[54px] w-[296px] py-2 px-3 text-gray-700 leading-tight focus:outline-brand-primary focus:shadow-outline placeholder:text-base" id="name" type="text" placeholder="Input your name here..." />
              </div>
            </div>

            <div className="ml-[32px] grid-cols-4">
            <div className="">
              <label class="text-base block text-white-700 mb-2" for="email">
                E-mail
              </label>
              <input class="shadow appearance-none h-[54px] w-[296px] border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-brand-primary  placeholder:text-base" id="email" type="text" placeholder="Input your e-mail here..." />
              </div>
            </div>
            
            <div className="grid-cols-4 mt-[111px] mb-[71px] mr-[34px] ml-[32px]">
              <button class="transition-all h-[44px] w-[186px] bg-brand-primary hover:bg-brand-tertiary text-white py-2 px-4 rounded border-transparent focus:outline focus:shadow-outline" type="button">
                Send
              </button>
            </div>

              {/* footer: logo & contact */}
            {/* 

             

              <div className="ml-[32px] grid-cols-4 absolute">
              <div className="absolute">
                <p class="text-base block text-white-700 mb-2" for="email">
                  Contact Us
                </p>
                
                </div>
              </div>

              <div className="ml-[32px] grid-cols-4">
                <div className="absolute">
                  <span class="grid grid-cols-3">
                  
                    <div className="grid cols-3 ml-[33px]" id="logo-fb">
                      <Image width={44} height={44} src="/fb-icon.svg" alt="FB Icon"></Image>
                    </div>
                    <div className="grid cols-3 ml-[33px]" id="logo-ig">
                      <Image width={44} height={44} src="/ig-icon.svg" alt="IG Icon"></Image>
                    </div>
                    <div className="grid cols-3 ml-[33px]" id="logo-fiverr">
                      <Image width={44} height={44} src="/fiverr-icon.svg" alt="Fiverr Icon"></Image>
                    </div>
                  </span>
                  
                </div>
              </div>
            </div> */}


            <div className="flex flex-wrap bg-brand-senary">
              <div className="">
                <Image width={275} height={60} src="/logo-footer.png" alt="Logo Footer" />
              </div>

               <div className="grid grid-rows-4">
                <div className="">
                  <p class="width={187} height={83} text-weight-400 text-brand-neutral line-height:0.875rem text-xs  mb-2">
                
                  Artmazigh studios

                  160 Robinson Road, #14-04
                  Singapore Business Federation
                  Centre - 068914, Singapore

                  </p>
                </div>
              </div>





            </div>
        </div>
        </Container>
      </div>
    </>

  )
};

export default Footer;
