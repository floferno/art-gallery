import React, { Fragment } from 'react'
import Button from '../Common/Button'
import Grid from '../Common/Grid'
import { Tab } from '@headlessui/react'
import CardProduct from './components/CardProduct'
import packageProduct from '@/data/packageProduct.json'
export const serviceButton = [
  'NFT',
  'Dark Art',
  'Ilustration',
  'Logo',
  'ArtWork',
  'Other',
]

const OurService = () => {
  return (
    <Grid className={'mb-14 lg:mb-[200px]'}>
      <div className="col-start-2 col-span-2 lg:col-span-3">
        <h2 className="text-xl lg:text-2xl font-semibold lg:mb-11 text-white text-center ">
          Our Service
        </h2>
      </div>
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

          {packageProduct.map((item, index) => {
            return (
              <Tab.Panels>
                <Tab.Panel
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8 w-full"
                >
                  {item.map((packageItem, index) => {
                    return (
                      <CardProduct
                        key={index}
                        namePackage={packageItem.namePackage}
                        listItem={packageItem.listItem}
                        price={packageItem.price}
                      />
                    )
                  })}
                </Tab.Panel>
              </Tab.Panels>
            )
          })}
        </Tab.Group>
      </div>
    </Grid>
  )
}

export default OurService
