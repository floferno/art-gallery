import Container from '@/components/Common/Container'
import Layout from '@/components/Layout/Layout'
import React, { Fragment } from 'react'
import Image from 'next/image'
import gallery from '../data/gallery.json'
import Link from 'next/link'
import Grid from '@/components/Common/Grid'
import { Tab } from '@headlessui/react'
import Button from '@/components/Common/Button'
import { serviceButton } from '@/components/Homepage/OurService'
/*
 * * 1. Container sesuai design
 * * 2. Grid sesuai design, grid 3 column. & ga ada jaraknya.
 * * 3. import gambar dan benar
 * * 4. Looping gambar tersebut
 * * 5. data utk simpan url gambar
 */
const Gallery = () => {
  // console.log(gallery[0], "isinya obj imgsrc")
  return (
    <Layout>
      <Container>
        <Grid>
          <div className="col-span-full ">
            <Tab.Group defaultIndex={0}>
              <Tab.List className="gap-4 flex mb-8 overflow-x-auto lg:overflow-x-hidden">
                {serviceButton.map((item, index) => {
                  return (
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <Button
                          variant={selected ? 'primary' : 'outline'}
                          className="flex-grow rounded flex-shrink-0 sm:flex-shrink"
                          key={index}
                        >
                          {item}
                        </Button>
                      )}
                    </Tab>
                  )
                })}
              </Tab.List>

              {gallery.map((item, index) => {
                return (
                  <Tab.Panels>
                    <Tab.Panel
                      key={index}
                      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8 w-full"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Facilis dignissimos reiciendis distinctio alias inventore
                      officiis repellat beatae in nulla, fugiat quaerat veniam
                      accusamus quam odio, laboriosam a vitae accusantium
                      doloremque.
                    </Tab.Panel>
                  </Tab.Panels>
                )
              })}
            </Tab.Group>
          </div>
        </Grid>
        <div className="grid grid-cols-3 mb-[245px]">
          {gallery.map((el, i) => {
            return (
              <>
                {/* class parent harus relative kalo childrennya pake class absolute */}
                <Link href={`/gallery/${gallery[i].link}`} passHref>
                  <a>
                    <div className="w-full h-[472px] group relative flex-auto">
                      <img
                        className="w-full h-full text-white"
                        src={gallery[i].imgSrc}
                        alt={gallery[i].title}
                      />
                      <div className="bg-gallery top-0 left-0 bottom-0 right-0 flex absolute invisible group-hover:visible transition-all duration-100">
                        <p className="text-xl text-brand-primary transition-all duration-500 opacity-0 group-hover:opacity-100 absolute flex-auto ml-[32px] mt-[411px] text-clip overflow-hidden">
                          {gallery[i].title}
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </>
            )
          })}
        </div>
      </Container>
    </Layout>
  )
}

export default Gallery
