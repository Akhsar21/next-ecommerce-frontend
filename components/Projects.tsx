import Link from "next/link";
import Project from "./Project";
import React from "react";
import Title from "./elements/Title";

const Projects = ({ projects, title, showLink = false }) => {
	return (
		<section className="section projects">
			<Title title={title} />
			<div className="section-center projects-center">
				{projects.map((project, index) => {
					return <Project key={project.id} index={index} {...project} />;
				})}
			</div>
			{showLink && (
				<Link href="/projects">
					<a className="btn center-btn">projects</a>
				</Link>
			)}
		</section>
	);
};

export default Projects;
