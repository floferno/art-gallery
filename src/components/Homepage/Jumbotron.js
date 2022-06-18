import React from 'react'
import Container from '../Common/Container'
import Grid from '../Common/Grid'
import Button from '../Common/Button'
const Jumbotron = () => {
  return (
    <div className="w-full h-auto">
      <div className="flex flex-col">
        <div
          className="w-full bg-cover bg-no-repeat"
          style={{ backgroundImage: `url('/homepage/slider.png')` }}
        >
          <div className="w-full h-full bg-slider ">
            <Container className="pt-44 pb-[188px]">
              <Grid>
                <div className="col-span-6">
                  <h1 className="font-semibold text-6xl text-white mb-5">
                    WE BELIEVE IN IMAGINATION
                  </h1>
                  <h6 className="text-white text-lg">
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
        <div className="flex items-center justify-center mx-auto">
          <button>Arrow Left</button>
          <button>Bullet</button>
          <button>Bullet</button>
          <button>Arrow Right</button>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
