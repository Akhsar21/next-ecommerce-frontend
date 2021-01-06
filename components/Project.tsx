import propTypes from "prop-types";
import Image from "next/image";
import { fromImageToUrl } from "utils/urls";

const Project = ({ description, title, github, stack, url, image, index }) => {
	return (
		<article className="project">
			{image && (
				<div
					className="project-img"
					style={{ position: "relative", width: "", height: "" }}
				>
					<Image src={fromImageToUrl(image)} layout="fill" />
				</div>
			)}
			<div className="project-info">
				<span className="project-number">0{index + 1}</span>
				<h3>{title || "default title"}</h3>
				<p className="project-desc">{description}</p>
				<div className="project-stack">
					{stack.map((item) => {
						return <span key={item.id}>{item.title}</span>;
					})}
				</div>
				<div className="project-links">
					<a href={github}>
						<span className="project-icon">g</span>
					</a>
					<a href={url}>
						<span className="project-icon">u</span>
					</a>
				</div>
			</div>
		</article>
	);
};

Project.propTypes = {
	title: propTypes.string.isRequired,
	github: propTypes.string.isRequired,
	url: propTypes.string.isRequired,
	description: propTypes.string.isRequired,
	image: propTypes.object.isRequired,
	stack: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Project;
