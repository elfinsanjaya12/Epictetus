import * as React from 'react';
import Head from 'next/head';
import Layout from '@components/Layout';
import CardPost from '@components/CardPost';
import Container from '@components/Container';
import mockPost from '../utils/posts.json';
import SectionHeader from '@components/SectionHeader';

export default function Posts() {
  const [posts, setPosts] = React.useState(mockPost);
  return (
    <Layout>
      <Head>
        <title>Posts &mdash; Epictetus</title>
      </Head>
      <Container>
        <SectionHeader>UI Design</SectionHeader>
        {!posts.length ? (
          <div className='text-center py-20'>
            <h2 className='text-6xl'>No result 😥</h2>
            <p className='text-xl mt-4 text-white/60 md:w-6/12 w-full mx-auto'>
              We couldn’t find any posts with the keyword `yahahahayuk`. Please
              try another keyword.
            </p>
          </div>
        ) : (
          <div className='flex flex-wrap -mx-4 mt-6'>
            {posts.map((post, i) => (
              <div className='md:w-4/12 w-full px-4 py-6' key={i}>
                <CardPost {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  );
}
