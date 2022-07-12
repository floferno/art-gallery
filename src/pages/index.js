// import Head from 'next/head';

// import Button from '@/components/Common/Button';
import Container from '@/components/Common/Container'

import AboutUs from '@/components/Homepage/AboutUs'

import Jumbotron from '@/components/Homepage/Jumbotron'
import OurService from '@/components/Homepage/OurService'
import Testimony from '@/components/Homepage/Testimony'
import TopSeller from '@/components/Homepage/TopSeller'
import Layout from '@/components/Layout/Layout'

export default function Home() {
  return (
    <Layout>
      <Jumbotron />
      <Container className="mt-4">
        <AboutUs />
        <OurService />
        <TopSeller />
      </Container>
      <Testimony />
    </Layout>
  )
}
