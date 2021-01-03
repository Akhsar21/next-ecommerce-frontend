import { Footer } from "components";

import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      {/* <Meta /> */}
      {children}
      <Footer />
    </>
  );
}
