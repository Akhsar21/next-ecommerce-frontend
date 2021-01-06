import { useState } from "react";
import Link from "next/link";
import { Title } from "components";

const Jobs = ({ jobs }) => {
	const [value, setValue] = useState(0);
	const { company, position, date, desc } = jobs[value];

	return (
		<section className="section jobs">
			<Title title="experience"></Title>
			<div className="jobs-center">
				<div className="btn-container">
					{jobs.map((item, index) => {
						return (
							<button
								key={item.id}
								onClick={() => setValue(index)}
								className={`job-btn ${index === value && "active-btn"}`}
							>
								{item.company}
							</button>
						);
					})}
				</div>
				<article className="job-info">
					<h3>{position}</h3>
					<h4>{company}</h4>
					<p className="job-date">{date}</p>
					{desc.map((item) => {
						return (
							<div key={item.id} className="job-desc">
								&copy;
								<p>{item.name}</p>
							</div>
						);
					})}
				</article>
			</div>
			<Link href="/about">
				<a className="btn center-btn">more info</a>
			</Link>
		</section>
	);
};
export default Jobs;
