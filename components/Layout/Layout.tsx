import { Footer, Seo } from "components";

const Layout = ({ children }) => {
	return (
		<>
			<Seo />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
