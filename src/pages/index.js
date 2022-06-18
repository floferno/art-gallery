// import Head from 'next/head';

// import Button from '@/components/Common/Button';
import Container from '@/components/Common/Container'
import Grid from '@/components/Common/Grid'
import Gallery from '@/components/Homepage/Gallery'
import Jumbotron from '@/components/Homepage/Jumbotron'
import Layout from '@/components/Layout/Layout'
import gallery from '@/data/gallery'

export default function Home() {
  const imageSrc = ['/artworks/1.png', '/artworks/2.png', '/artworks/3.png']
  console.log('gallery', gallery)
  return (
    <Layout>
      <Jumbotron />
      <Container className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio
        consequatur debitis magni iste modi deserunt omnis eveniet laudantium
        illum ab nulla illo vitae a, nam sequi eius! Ut, suscipit.
        <div className="grid grid-cols-3">
          {gallery.map((src, index) => {
            return (
              <div>
                <img src={src.imgSrc} key={index} />
              </div>
            )
          })}
        </div>
      </Container>
      {/* <Container className="mt-4">
        <Gallery />
      </Container> */}
    </Layout>
  )
}
