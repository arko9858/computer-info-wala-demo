import Head from "next/head";
import Layout from "../src/Layout/Layout";
import HomeComponent from "../src/Container/Home/Home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Computer Information Wala</title>
        <meta name="description" content="Upwork sample demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <HomeComponent />
      </Layout>
    </div>
  );
}
