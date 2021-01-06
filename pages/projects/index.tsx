import { Layout, Projects } from "components";
import { fetchAPI } from "utils/api";

const ProjectsPage = ({ projects }) => {
	return (
		<Layout>
			<section className="project-page">
				<Projects projects={projects} title="all project" />
			</section>
		</Layout>
	);
};

export async function getStaticProps() {
	// Fetch the products
	const projects = await fetchAPI("/projects");

	// Return the products as props
	return {
		props: {
			projects,
		},
		revalidate: 1,
	};
}

export default ProjectsPage;
