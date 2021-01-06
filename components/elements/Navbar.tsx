import Link from "next/link";
import { Links } from "components";

const Navbar = ({ toggleSidebar }) => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					Aksar
					{/* <img src="" alt=""/> */}
					<button type="button" className="toggle-btn" onClick={toggleSidebar}>
						test
					</button>
				</div>
				<Links styleClass="nav-links" />
			</div>
		</nav>
	);
};
export default Navbar;
