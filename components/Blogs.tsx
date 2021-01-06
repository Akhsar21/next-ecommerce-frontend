import React from "react";
import Title from "./elements/Title";
import Blog from "./Blog";
import Link from "next/link";

const Blogs = ({ blogs, title, showLink = false }) => {
	return (
		<section className="section">
			<Title title={title} />
			<div className="section-center blogs-center">
				{blogs.map((blog) => {
					return <Blog key={blog.id} {...blog} />;
				})}
			</div>
			{showLink && (
				<Link href="/blog">
					<a className="btn center-btn">blog</a>
				</Link>
			)}
		</section>
	);
};

export default Blogs;
