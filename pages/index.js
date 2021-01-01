import Head from "next/head";
import { Layout } from "components";
import { fromImageToUrl, API_URL } from "../utils/urls";

export default function Home({products}) {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
      <Layout></Layout>
    </>
  );
}

export async function getStaticProps() {
  // Fetch the products
  const product_res = await fetch(`${API_URL}/products`);
  const products = await product_res.json();

  // Return the products as props
  return {
    props: {
      products,
    },
  };
}
