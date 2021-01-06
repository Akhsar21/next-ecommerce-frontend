import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<header className="hero">
			<div className="section-center hero-center">
				<article className="hero-info">
					<div className="underline"></div>
					<h1>i'm akhsar</h1>
					<h4>frelance web and mobile UI/UX Designer</h4>
					<Link href="/contact">
						<a className="btn">contact me</a>
					</Link>
					{/* <SocialLinks/> */}
				</article>
				<div
					className="hero-img"
					style={{ position: "relative", width: 350, height: 350 }}
				>
					<Image src="/images/herobg.png" layout="fill" />
				</div>
			</div>
		</header>
	);
}
