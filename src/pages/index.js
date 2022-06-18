// import Head from 'next/head';

// import Button from '@/components/Common/Button';
import Container from '@/components/Common/Container'
import Jumbotron from '@/components/Homepage/Jumbotron'

import Layout from '@/components/Layout/Layout'

export default function Home() {
  return (
    <Layout>
      <Jumbotron />
      <Container className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio
        consequatur debitis magni iste modi deserunt omnis eveniet laudantium
        illum ab nulla illo vitae a, nam sequi eius! Ut, suscipit.
      </Container>
    </Layout>
  )
}
