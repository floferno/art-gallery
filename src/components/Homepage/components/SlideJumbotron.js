import Button from '@/components/Common/Button'
import Container from '@/components/Common/Container'
import Grid from '@/components/Common/Grid'
import Image from 'next/image'
import React from 'react'

const SlideJumbotron = ({ title, description, image, bg }) => {
  return (
    <div
      className="w-full bg-cover bg-no-repeat mb-7 lg:mb-8"
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <div className="w-full h-full bg-slider ">
        <Container className="py-9 lg:py-16">
          <Grid>
            <div className="col-span-4 sm:col-span-3 lg:col-span-6 pr-16 sm:pr-0 flex flex-col justify-center items-start">
              <h1
                className="font-semibold font-prettywise text-xl lg:text-6xl text-white mb-[10px] lg:mb-5 capitalize"
                data-aos="fade-up"
              >
                {title}
              </h1>
              {/* <h6 className="text-white text-xs lg:text-lg font-sf-pro ">
                <strong> 1,334 people’s</strong> have teamed up with us to make
                their imaginations come true.{' '}
              </h6>
              <h6 className="text-white mb-6 lg:mb-9 font-bold text-xs lg:text-lg font-sf-pro">
                It’s your turn now!
              </h6> */}
              <h6
                className="text-white text-xs lg:text-lg font-sf-pro mb-6 lg:mb-9"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {description}
              </h6>

              <Button
                variant="primary"
                className={'w-[162px] sm:w-auto'}
                data-aos="fade-up"
                data-aos-delay="350"
              >
                Learn More
              </Button>
            </div>
            <div className="col-start-8 col-end-13 hidden lg:block relative">
              <div className="w-full h-[578px] " data-aos="fade-up">
                {image !== '' ? (
                  <Image
                    src={image ? image : '/images/hero-image.png'}
                    width={424}
                    height={578}
                    objectFit="cover"
                    layout="fill"
                  />
                ) : null}
              </div>
            </div>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default SlideJumbotron
