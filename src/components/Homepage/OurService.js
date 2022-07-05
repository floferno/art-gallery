import React, { Fragment } from 'react'
import Button from '../Common/Button'
import Grid from '../Common/Grid'
import { Tab } from '@headlessui/react'
import CardProduct from './components/CardProduct'
import packageProduct from '@/data/packageProduct.json'
const OurService = () => {
  const serviceButton = [
    'NFT',
    'Dark Art',
    'Ilustration',
    'Logo',
    'ArtWork',
    'Other',
  ]

  return (
    <Grid>
      <div className="col-span-3">
        <h2 className="text-2xl font-semibold mb-11 text-white">Our Service</h2>
      </div>
      <div className="col-span-full ">
        <Tab.Group defaultIndex={0}>
          <Tab.List className="gap-4 flex mb-8">
            {serviceButton.map((item, index) => {
              return (
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <Button
                      variant={selected ? 'primary' : 'outline'}
                      className="flex-grow rounded"
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
                  className="grid grid-cols-3 gap-8 w-full"
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
