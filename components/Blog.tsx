import Image from "next/image";
import Link from "next/link";
import propTypes from "prop-types";
import React from "react";
import { fromImageToUrl } from "utils/urls";

const Blog = ({ id, slug, title, image, desc, category, published_at }) => {
	return (
		<article>
			<Link href={`/blog/${slug}`}>
				<a key={id} className="blog">
					{image && (
						<div
							className="blog-img"
							style={{ position: "relative", width: "", height: "" }}
						>
							<Image src={fromImageToUrl(image)} layout="fill" />
						</div>
					)}
				</a>
			</Link>
			<div className="blog-card">
				<Link href={`/blog/${slug}`}>
					<a key={id}>
						<h4>{title}</h4>
					</a>
				</Link>
				<p>
					{desc ||
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, id."}
				</p>
				<div className="blog-footer">
					<p>{category.name || "undefined"}</p>
					<p>{published_at}</p>
				</div>
			</div>
		</article>
	);
};

Blog.propTypes = {
	id: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
	category: propTypes.string.isRequired,
	desc: propTypes.string.isRequired,
	slug: propTypes.string.isRequired,
	image: propTypes.object.isRequired,
};

export default Blog;
