import Container from '@/components/Common/Container'
import Layout from '@/components/Layout/Layout'
import React, { Fragment } from 'react'

import ListProductMobile from '@/components/Gallery/ListProductMobile'
import ListProductDekstop from '@/components/Gallery/ListProductDekstop'
/*
 * * 1. Container sesuai design
 * * 2. Grid sesuai design, grid 3 column. & ga ada jaraknya.
 * * 3. import gambar dan benar
 * * 4. Looping gambar tersebut
 * * 5. data utk simpan url gambar
 */
const Gallery = () => {
  // console.log(gallery[0], "isinya obj imgsrc")
  const [filterTab, setFilterTab] = React.useState('nft')
  return (
    <Layout>
      <Container>
        <ListProductMobile />
        <ListProductDekstop />
      </Container>
    </Layout>
  )
}

export default Gallery
