import { useState } from "react";
import { parseCookies } from "nookies";

import { API_URL } from "../../utils/urls";

export default function CreateBlog() {
  const [state, setstate] = useState(initialState);

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
      <h2>Create Blog</h2>
      <div className=""></div>
    </>
  );
}
