import { Footer, Meta } from "components";

import styles from "./Layout.module.css";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      {/* <div className={styles.container}> */}
        {/* <main></main> */}
        {children}
        <Footer />
      {/* </div> */}
    </>
  );
}
