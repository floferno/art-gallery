import React from 'react'
import Container from '../Common/Container'
import Grid from '../Common/Grid'
import Button from '../Common/Button'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import SlideJumbotron from './components/SlideJumbotron'
import useSwiperRef from 'src/hooks/useSwiperRef'
import dataSlider from '@/data/jumbotron.json'

const Jumbotron = () => {
  const [nextEl, nextElRef] = useSwiperRef()
  const [prevEl, prevElRef] = useSwiperRef()
  return (
    <div className="w-full h-auto mb-14 md:mb-[100px]">
      <div className="flex flex-col">
        <Swiper
          // install Swiper modules
          // modules={[Navigation, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          // centeredSlides={true}
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          id="testimoni-slider"
          navigation={{
            prevEl,
            nextEl,
          }}
          // scrollbar={true}
        >
          {dataSlider.map((item, index) => (
            <SwiperSlide key={index}>
              <SlideJumbotron
                title={item.title}
                description={item.description}
                image={item.image}
                bg={item.bg}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Slider Pagination */}
        <div className="flex items-center justify-center mx-auto gap-4">
          <button
            className="h-6 w-6  items-center justify-center hidden lg:flex"
            ref={prevElRef}
          >
            <ChevronLeftIcon className="h-4 w-4 text-neutral-50 hover:text-brand-primary transition-all" />{' '}
          </button>
          <button>
            <div className="h-2 lg:h-3 w-2 lg:w-3 bg-brand-secondary border border-brand-secondary rounded-full transition-all"></div>
          </button>
          <button>
            <div className="h-2 lg:h-3 w-2 lg:w-3 bg-transparent border border-neutral-50 hover:bg-brand-secondary hover:border-brand-secondary  rounded-full  transition-all"></div>
          </button>

          <button
            className="h-6 w-6  items-center justify-center hidden lg:flex"
            ref={nextElRef}
          >
            {' '}
            <ChevronRightIcon className="h-4 w-4 text-neutral-50 hover:text-brand-primary transition-all" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
