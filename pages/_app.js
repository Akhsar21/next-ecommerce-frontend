import "../styles/reset.css";
import "../styles/globals.css";
import Router from "next/router";
import ContextWrapper from "../lib/constants/ContextWrapper";
import { parseCookies } from "nookies";
import { Header } from "components";
import { API_URL } from "../utils/urls";

export default function MyApp({ Component, pageProps, navigation }) {
  // console.log(navigation);
  return (
    <>
      <ContextWrapper navigation={navigation}>
        <Header />
      </ContextWrapper>
      <Component {...pageProps} />
    </>
  );
}

function redirectUser(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const jwt = parseCookies(ctx).jwt;

  const res = await fetch(`${API_URL}/navigations`);
  const navigation = await res.json();

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (!jwt) {
    if (ctx.pathname === "/payed-articles") {
      redirectUser(ctx, "/login");
    }
  }

  return {
    pageProps,
    navigation,
  };
};
