import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import HeaderContext from "contexts/HeaderContext";
import AuthContext from "contexts/AuthContext";

const Links = ({ styleClass }) => {
	const router = useRouter();
	const { menuItems } = useContext(HeaderContext);
	const { user } = useContext(AuthContext);

	return (
		<ul className={`page-links ${styleClass ? styleClass : ""}`}>
			{menuItems.map((item) => (
				<li key={item.id}>
					<Link href={item.slug}>
						<a className={router.pathname === item.slug ? "active" : ""}>
							{item.title}
						</a>
					</Link>
				</li>
			))}
			<li>
				{user ? (
					<Link href="/account">
						<a>{user.username}</a>
					</Link>
				) : (
					<Link href="/login">
						<a>Log in</a>
					</Link>
				)}
			</li>
		</ul>
	);
};

export default Links;
