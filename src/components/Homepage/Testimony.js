import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from '@heroicons/react/solid'
import Container from '../Common/Container'
import React from 'react'
import useSwiperRef from '@/hooks/useSwiperRef'
import CardPerson from './components/CardPerson'
// import { Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'

const Testimony = () => {
  const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  const [nextEl, nextElRef] = useSwiperRef()
  const [prevEl, prevElRef] = useSwiperRef()
  return (
    <div className="flex flex-col mb-[270px]">
      <div className="flex justify-between mb-11">
        <Container className={'flex items-center justify-between'}>
          <h2 className="text-2xl font-semibold  text-white">
            what did they say
          </h2>

          <div className="flex items-center justify-center gap-4">
            <button
              className="h-6 w-6 flex items-center justify-center"
              ref={prevElRef}
            >
              <ChevronLeftIcon className="h-4 w-4 text-neutral-50 hover:text-brand-primary transition-all" />{' '}
            </button>
            <button>
              <div className="h-3 w-3 bg-brand-secondary border border-brand-secondary rounded-full transition-all"></div>
            </button>
            <button>
              <div className="h-3 w-3 bg-transparent border border-neutral-50 hover:bg-brand-secondary hover:border-brand-secondary  rounded-full  transition-all"></div>
            </button>

            <button ref={nextElRef}>
              {' '}
              <ChevronRightIcon className="h-4 w-4 text-neutral-50 hover:text-brand-primary transition-all" />
            </button>
          </div>
        </Container>
      </div>
      <div className="max-w-[1340px] ml-auto 2xl:mx-auto">
        <Swiper
          // install Swiper modules
          // modules={[Navigation, A11y]}
          spaceBetween={20}
          slidesPerView={'auto'}
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
          {data.slice(0, 7).map((data, i) => (
            <SwiperSlide key={i}>
              <div className="w-[497px] h-[133px] ">
                <CardPerson />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Testimony
