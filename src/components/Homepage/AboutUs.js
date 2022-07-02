import Image from 'next/image'
import React from 'react'
import Grid from '../Common/Grid'

const AboutUs = () => {
  return (
    <Grid className="mb-[120px]">
      <div className="col-span-6 relative">
        <Image
          width={607}
          height={458}
          src="/homepage/about-us.png"
          alt="About Us"
          layout="responsive"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="col-span-6 flex flex-col">
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold font-prettywise mb-3 tracking-wide">
            About Us
          </h3>
          <p className="text-sm mb-8">
            Inspired by a nomadic tribe that calls themselves the Amazigh (which
            means free or noble people) in North Africa, Artmazigh team believes
            that everyone is free and unique individual, and imagination is no
            exception. Through the illustration works that we have done since
            2011 and together with people who believe in the power of
            imagination (Musicians, Politicians, Soldiers, Writers, Youtubers,
            Gamers, Athletes and many more), we call on everyone to have brave
            imaginations and go beyond the feeling of failing to make it happen.
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-1 font-prettywise">Vision</h4>
          <p className="text-sm mb-8">
            To gain trust, love and respect from everyone by realizing every
            imagination through works of illustration art
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-prettywise text-lg font-semibold mb-1">Mission</h4>
          <ul className="text-sm list-none list-outside ml-6">
            <li className='before:content-["\2022"] before:text-white before:font-bold before:inline-block before:w-3 before:text-base before:absolute relative before:-ml-4'>
              Doing illustration artworks based on freedom of expression and
              professionalism,
            </li>
            <li className='before:content-["\2022"] before:text-white before:font-bold before:inline-block before:w-3 before:text-base before:absolute relative before:-ml-4'>
              Becoming a space for imaginators (clients) and illustrators to
              explore and communicate ideas and imaginations,
            </li>
            <li className='before:content-["\2022"] before:text-white before:font-bold before:inline-block before:w-3 before:text-base before:absolute relative before:-ml-4'>
              Producing high-quality illustration arts by prioritizing the
              values of professionalism and beauty.
            </li>
          </ul>
        </div>
      </div>
    </Grid>
  )
}

export default AboutUs
