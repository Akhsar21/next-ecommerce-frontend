import { Layout } from "components";
import Head from "next/head";
import { fetchAPI } from "utils/api";

const Blog = ({ blog }) => {
	return (
		<Layout>
			<Head>{blog.title && <title>{blog.title}</title>}</Head>
			<section className="blog-template">
				<div className="section-center">
					<article className="blog-content">{blog.content}</article>
				</div>
			</section>
		</Layout>
	);
};

export async function getStaticPaths() {
	const blogs = await fetchAPI("/blogs");

	return {
		paths: blogs.map((blog) => ({
			params: { slug: String(blog.slug) },
		})),
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const blogs = await fetchAPI(`/blogs/?slug=${slug}`);
	// &status=published
	return {
		props: {
			blog: blogs[0],
			revalidate: 1,
		},
	};
}

export default Blog;
