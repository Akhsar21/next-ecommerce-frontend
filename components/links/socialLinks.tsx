import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import HeaderContext from "contexts/HeaderContext";

const socialLinks = ({ styleClass }) => {
	const router = useRouter();
	const { menuItems } = useContext(HeaderContext);
	return (
		<ul className={`social-links ${styleClass ? styleClass : ""}`}>
			{menuItems.map((link) => (
				<li key={link.id}>
					<Link href={link.url}>
						<a className="social-link">
							<i className="social-icon"></i>
						</a>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default socialLinks;
