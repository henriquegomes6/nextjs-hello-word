import Head from 'next/head'

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data
    }
  };
}

export const Home = ({ data }): JSX.Element => (
  <div className="container">
    <Head>
      <title>{data.name}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <>
      <marquee direction="right" width="100%" height="200" behavior="alternate">
          {data.name}
      </marquee>
    </>
  </div>
)

export default Home
