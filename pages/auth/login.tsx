import Router from "next/router";
import { useState } from "react";
import { API_URL } from "utils/urls";
import { setCookie } from "nookies";
import { Title } from "components";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	async function handleLogin() {
		const loginInfo = {
			identifier: username,
			password,
		};

		const login = await fetch(`${API_URL}/auth/local`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginInfo),
		});

		const loginResponse = await login.json();

		setCookie(null, "jwt", loginResponse.jwt, {
			maxAge: 30 * 24 * 60 * 60,
			path: "/",
		});

		Router.push("/");
	}

	return (
		<>
			<Title title="You need to login to access this page" />
			<form>
				<input
					type="email"
					onChange={(e) => setUsername(e.target.value)}
					value={username}
				/>
				<input
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
				<button type="button" onClick={() => handleLogin()}>
					Submit
				</button>
			</form>
		</>
	);
};

export default Login;
