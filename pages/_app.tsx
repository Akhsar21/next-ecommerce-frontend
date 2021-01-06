import "../styles/reset.css";
import "../styles/main.css";
import Router from "next/router";
import { parseCookies } from "nookies";
import { AuthWrapper, ContextWrapper, Header } from "components";
import { fetchAPI } from "utils/api";

export default function MyApp({ Component, pageProps, navigation }) {
	// console.log(navigation);
	return (
		<AuthWrapper>
			<ContextWrapper navigation={navigation}>
				<Header />
			</ContextWrapper>
			<Component {...pageProps} />
		</AuthWrapper>
	);
}

export function reportWebVitals(metric) {
	const body = JSON.stringify(metric);
	const url = "https://example.com/analyticts";

	if (navigator.sendBeacon) {
		navigator.sendBeacon(url, body);
	} else {
		fetch(url, { body, method: "POST", keepalive: true });
	}
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

	const navigation = await fetchAPI("/navigations");

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
