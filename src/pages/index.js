// import Head from 'next/head';

// import Button from '@/components/Common/Button';
import Container from '@/components/Common/Container';
import Jumbotron from '@/components/Homepage/Jumbotron';

import Layout from '@/components/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <Container className="mt-4">
        <Jumbotron />
      </Container>
    </Layout>
  );
}
