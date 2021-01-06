import { useState } from "react";
import { parseCookies } from "nookies";
import { Title } from "components";

const CreateBlog = () => {
	const [state, setstate] = useState();

	async function addBlog() {
		const jwt = parseCookies().jwt;

		const blogInfo = {};

		const create = await fetch(`${API_URL}/blogs`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${jwt}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(blogInfo),
		});

		const createResponse = await create.json();

		console.log(createResponse);
	}

	return (
		<>
			<Title title="Create Blog" />
			<div className=""></div>
		</>
	);
};

export default CreateBlog;
