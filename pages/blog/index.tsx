import { Layout, Blogs } from "components";
import Head from "next/head";
import { fetchAPI } from "utils/api";

const Blog = ({ blogs }) => {
	return (
		<Layout>
			<Head>
				<title>Blog</title>
			</Head>
			<Blogs blogs={blogs} title="blog" />
		</Layout>
	);
};

export async function getStaticProps() {
	// Fetch the products
	const blogs = await fetchAPI("/blogs");
	// await Promise.all([/blogs?status=published])
	// Return the products as props
	return {
		props: {
			blogs,
		},
		revalidate: 1,
	};
}

export default Blog;
