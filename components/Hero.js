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
        {/* <img src="/images/herobg.png" alt="Hero" className="hero-img" /> */}
        <Image
          src="/images/herobg.png"
          width={400}
          height={400}
          layout="fixed"
          className="hero-img"
          style="hero-img"
        />
      </div>
    </header>
  );
}
