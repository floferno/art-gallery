import { Tab } from '@headlessui/react'
import React, { Fragment } from 'react'
import Button from '../Common/Button'
import Grid from '../Common/Grid'
import { serviceButton } from '../Homepage/OurService'
import Product from './Product'
import gallery from '@/data/gallery.json'
const ListProductMobile = () => {
  return (
    <Grid className={' lg:hidden mb-[245px]'}>
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
          <Tab.Panels>
            <Tab.Panel className="grid grid-cols-2 sm:grid-cols-3 gap-6 xl:gap-8 w-full">
              {gallery.map((item, index) => {
                return (
                  <Product
                    imgProduct={item.imgSrc}
                    titleProduct={item.title}
                    urlProduct={item.link}
                    key={index}
                    paragrafProduct={item.description}
                  />
                )
              })}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Grid>
  )
}

export default ListProductMobile
