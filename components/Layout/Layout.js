import { Footer, Seo } from "components";

import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      {children}
      <Footer />
    </>
  );
}
