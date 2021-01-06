import Head from "next/head";
import { Hero, Jobs, Layout, Projects, Services, Blogs } from "components";
import { fetchAPI } from "utils/api";

const Home = ({ projects, blogs, jobs }) => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<Layout>
				<Hero />
				<Services />
				<Jobs jobs={jobs} />
				<Projects projects={projects} title="featured projects" showLink />
				<Blogs blogs={blogs} title="latest articles" showLink />
			</Layout>
		</>
	);
};

export async function getStaticProps() {
	// Fetch the []
	const [blogs, jobs, projects] = await Promise.all([
		fetchAPI("/blogs"),
		fetchAPI("/jobs"),
		fetchAPI("/projects/?featured=true"),
	]);

	// Return the [] as props
	return {
		props: {
			blogs,
			jobs,
			projects,
		},
		revalidate: 1,
	};
}

export default Home;
