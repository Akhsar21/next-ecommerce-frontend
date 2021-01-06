import { Links } from "components";
import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
	return (
		<aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
			<button className="close-btn" onClick={toggleSidebar}>
				X
			</button>
			<div className="side-container">
				<Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
				{/* <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} /> */}
			</div>
		</aside>
	);
};

export default Sidebar;
