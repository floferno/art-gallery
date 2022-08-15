import React from 'react'
import Grid from '../Common/Grid'
import StarGolds from '../../../public/icons/star-gold.svg'

const TopSeller = () => {
  return (
    <Grid className={' mb-14 xl:mb-64 grid-cols-5 lg:grid-cols-12'}>
      <div
        className="col-span-2 xl:col-span-4 flex flex-col items-center justify-center"
        data-aos="fade-left"
      >
        <h2 className="font-bold tracking-wider text-brand-primary text-3xl sm:text-4xl xl:text-[218px] text-center leading-none">
          5
        </h2>
        <div className="flex">
          <StarGolds className="h-6 sm:h-8 xl:h-[54px] w-6 sm:w-8 xl:w-[54px]" />
          <StarGolds className="h-6 sm:h-8 xl:h-[54px] w-6 sm:w-8 xl:w-[54px]" />
          <StarGolds className="h-6 sm:h-8 xl:h-[54px] w-6 sm:w-8 xl:w-[54px]" />
          <StarGolds className="h-6 sm:h-8 xl:h-[54px] w-6 sm:w-8 xl:w-[54px]" />
          <StarGolds className="h-6 sm:h-8 xl:h-[54px] w-6 sm:w-8 xl:w-[54px]" />
        </div>
      </div>
      <div className="col-span-3 xl:col-span-8 xl:col-end-13 flex items-center">
        <p
          className="text-white text-base sm:text-xl xl:text-[40px] leading-normal font-prettywise font-semibold tracking-wider"
          data-aos="fade-right"
        >
          We are{' '}
          <strong className="text-brand-primary">top rated seller</strong> on
          Fiverrr with more than{' '}
          <strong className="text-brand-primary">1k satisfying client</strong>
        </p>
      </div>
    </Grid>
  )
}

export default TopSeller
