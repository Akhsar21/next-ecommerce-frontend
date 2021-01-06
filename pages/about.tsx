import { Hero, Layout, Title } from "components";
import Head from "next/head";
import Image from "next/image";
import { fetchAPI } from "utils/api";
import { API_URL, fromImageToUrl } from "utils/urls";

const About = ({ about }) => {
	const { info, stack, title, image } = about;
	return (
		<Layout>
			<Head>
				<title>About</title>
			</Head>
			<section className="about-page">
				<div className="section-center about-center">
					<div
						className="about-img"
						style={{ position: "relative", width: "", height: "" }}
					>
						<Image src={fromImageToUrl(image)} layout="fill" />
					</div>
					<article className="about-text">
						<Title title={title} />
						<p>{info}</p>
						<div className="about-stack">
							{stack.map((item) => {
								return <span key={item.id}>{item.title}</span>;
							})}
						</div>
					</article>
				</div>
			</section>
		</Layout>
	);
};

export async function getStaticProps() {
	// Fetch the products
	const about = await fetchAPI("/about");

	// Return the products as props
	return {
		props: {
			about,
		},
		revalidate: 1,
	};
}

export default About;
