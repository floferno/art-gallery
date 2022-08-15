import Image from 'next/image'
import React from 'react'
import Grid from '../Common/Grid'

const AboutUs = () => {
  return (
    <Grid className="mb-14 lg:mb-[120px]">
      <div
        className="col-span-full lg:col-span-6 order-2 lg:order-1 relative"
        data-aos="fade-left"
      >
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
      <div
        className="col-span-full lg:col-span-6 order-1 lg:order-2 flex flex-col"
        data-aos="fade-right"
      >
        <div className="flex flex-col">
          <h3 className="text-xl lg:text-2xl font-semibold font-prettywise mb-3 tracking-wide">
            About Us
          </h3>
          <p className="text-sm mb-4 lg:mb-8">
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
          <h4 className="text-base lg:text-lg font-semibold mb-1 font-prettywise">
            Vision
          </h4>
          <p className="text-sm mb-4 lg:mb-8">
            To gain trust, love and respect from everyone by realizing every
            imagination through works of illustration art
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-prettywise text-base lg:text-lg font-semibold mb-1">
            Mission
          </h4>
          <ul className="text-sm list-none list-outside ml-6">
            <li className="dots-white">
              Doing illustration artworks based on freedom of expression and
              professionalism,
            </li>
            <li className="dots-white">
              Becoming a space for imaginators (clients) and illustrators to
              explore and communicate ideas and imaginations,
            </li>
            <li className="dots-white">
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
