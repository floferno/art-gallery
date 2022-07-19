import React from 'react'
import Container from '../Common/Container'
import Grid from '../Common/Grid'
import Button from '../Common/Button'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const Jumbotron = () => {
  return (
    <div className="w-full h-auto mb-[100px]">
      <div className="flex flex-col">
        <div
          className="w-full bg-cover bg-no-repeat mb-8"
          style={{ backgroundImage: `url('/homepage/slider.png')` }}
        >
          <div className="w-full h-full bg-slider ">
            <Container className="pt-44 pb-[188px]">
              <Grid>
                <div className="col-span-6">
                  <h1 className="font-semibold font-prettywise text-6xl text-white mb-5">
                    WE BELIEVE IN IMAGINATION
                  </h1>
                  <h6 className="text-white text-lg font-SFPro">
                    <strong> 1,334 people’s</strong> have teamed up with us to
                    make their imaginations come true.{' '}
                  </h6>
                  <h6 className="text-white mb-9 font-bold text-lg">
                    It’s your turn now!
                  </h6>

                  <Button variant="primary">Learn More</Button>
                </div>
              </Grid>
            </Container>
          </div>
        </div>
        {/* Slider Pagination */}
        <div className="flex items-center justify-center mx-auto gap-4">
          <button className="h-6 w-6 flex items-center justify-center">
            <ChevronLeftIcon className="h-4 w-4 text-neutral-50 hover:text-brand-primary transition-all" />{' '}
          </button>
          <button>
            <div className="h-3 w-3 bg-brand-secondary border border-brand-secondary rounded-full transition-all"></div>
          </button>
          <button>
            <div className="h-3 w-3 bg-transparent border border-neutral-50 hover:bg-brand-secondary hover:border-brand-secondary  rounded-full  transition-all"></div>
          </button>

          <button>
            {' '}
            <ChevronRightIcon className="h-4 w-4 text-neutral-50 hover:text-brand-primary transition-all" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
