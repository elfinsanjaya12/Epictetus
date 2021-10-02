import * as React from 'react';
import Head from 'next/head';
import FeaturePost from '@components/FeaturePost';
import CardPost from '@components/CardPost';
import Container from '@components/Container';
import Layout from '@components/Layout';
import mockPost from '../utils/posts.json';

export default function Home() {
  const [posts, setPosts] = React.useState(mockPost);

  return (
    <Layout>
      <Head>
        <title>Home &mdash; Epictetus</title>
      </Head>
      <Container>
        <FeaturePost />
        <div className='flex flex-wrap -mx-4 mt-6'>
          {posts.map((post, i) => (
            <div className='md:w-4/12 w-full px-4 py-6' key={i}>
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
