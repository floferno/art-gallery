import Container from '@/components/Common/Container'
import Layout from '@/components/Layout/Layout'
import Gallery from '@/components/Homepage/Gallery'
import React from 'react'

const ImageGallery = () => {
  return (
    <Layout>
      <Container>
        <Gallery></Gallery>
      </Container>
    </Layout>
  )
}

export default ImageGallery