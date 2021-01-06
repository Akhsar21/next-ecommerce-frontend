import Link from "next/link";
import { Navbar, Sidebar } from "components";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
	// const router=useRouter()
	const [isOpen, setIsOpen] = useState(false);
	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Navbar toggleSidebar={toggleSidebar} />
			<Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
		</>
	);
}
