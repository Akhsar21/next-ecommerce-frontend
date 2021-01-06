import AuthContext from "contexts/AuthContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

let magic;
const AuthWrapper = ({ children }) => {
	const [user, setUser] = useState(null);
	const router = useRouter();

	/**
	 * Adds email to user
	 * @param {string} email
	 */
	const loginUser = async (email) => {
		try {
			await magic.auth.loginWithMagicLink({ email });
			setUser({ email });
			router.push("/");
		} catch (err) {
			setUser(null);
		}
	};

	/**
	 * Sets the user to null
	 */
	const logoutUser = async () => {
		try {
			await magic.user.logout();
			setUser(null);
			router.push("/");
		} catch (err) {}
	};

	/**
	 * Sets the user to null
	 */
	const checkUserLoggedIn = async () => {
		try {
			const isLoggedIn = await magic.user.isLoggedIn();

			if (isLoggedIn) {
				const { email } = await magic.user.getMetadata();
				setUser({ email });
			}
		} catch (err) {}
	};

	// useEffect(() => {
	// 	magic = new Magic(MAGIC_PUBLIC_KEY);
	// });

	return (
		<AuthContext.Provider value={{ user, loginUser, logoutUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthWrapper;
