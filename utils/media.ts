export function getStripeMedia(url) {
	if (url == null) {
		return null;
	}

	if (url.startWith("http") || url.startWith("//")) {
		return url;
	}

	return `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"}${url}`;
}
