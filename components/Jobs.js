import { useState } from "react";
import Link from "next/link";
import { Title } from "components";

export default function Jobs() {
  const [value, setValue] = useState(0);
  return (
    <section className="section jobs">
      <Title title="experience"></Title>
      <div className="jobs-center">
        <div className="btn-container">
          <button className="job-btn">Test</button>
        </div>
        <article className="job-info">
          <h3>pos</h3>
          <h4>com</h4>
          <p className="job-date">date</p>
          <div className="job-desc">
            <i className="job-icon"></i>
            <p>name</p>
          </div>
        </article>
      </div>
      <Link href="/about">
          <a className="btn center-btn">more info</a>
      </Link>
    </section>
  );
}
// onClick={()=>setValue(index)}
//   /*`job-btn ${index === value && "active-btn"}`*/
