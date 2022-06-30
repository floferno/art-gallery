// import Head from 'next/head';

// import Button from '@/components/Common/Button';
import Container from '@/components/Common/Container'

import AboutUs from '@/components/Homepage/AboutUs'

import Jumbotron from '@/components/Homepage/Jumbotron'
import Layout from '@/components/Layout/Layout'
import gallery from '@/data/gallery'

export default function Home() {
  return (
    <Layout>
      <Jumbotron />
      <Container className="mt-4">
        <AboutUs />
      </Container>
    </Layout>
  )
}
