import { Title } from "components";
import services from "../lib/constants/services";

export default function Services() {
  return (
    <section className="section bg-grey">
      <Title title="services" />
      <div className="setion-center services-center">
        {services.map((service) => {
          const { id, icon, title, text } = service;

          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
