import React from 'react'
import Grid from '../Common/Grid'
import StarGolds from '../../../public/icons/star-gold.svg'

const TopSeller = () => {
  return (
    <Grid className={'mb-64'}>
      <div className="col-span-4 flex flex-col items-center justify-center">
        <h2 className="font-bold tracking-wider text-brand-primary text-[218px] text-center leading-none">
          5
        </h2>
        <div className="flex">
          <StarGolds className="h-[54px] w-[54px]" />
          <StarGolds className="h-[54px] w-[54px]" />
          <StarGolds className="h-[54px] w-[54px]" />
          <StarGolds className="h-[54px] w-[54px]" />
          <StarGolds className="h-[54px] w-[54px]" />
        </div>
      </div>
      <div className="col-span-8 col-end-13 flex items-center">
        <p className="text-white text-[40px] leading-normal font-prettywise font-semibold tracking-wider">
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
