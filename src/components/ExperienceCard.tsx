import React, { HTMLAttributes, useEffect, useRef } from "react";

type ExperienceData = {
  title: string;
  company: string;
  techIcons: React.ReactNode[];
  date: string;
  summaries: string[];
};

export default function ExperienceCard({
  title,
  company,
  techIcons,
  date,
  summaries,
}: ExperienceData) {
  // useEffect(() => {
  //   const cards = document.querySelectorAll<HTMLDivElement>(".card");
  //   const skillObserver = new IntersectionObserver((entries) => {
  //     entries.forEach(
  //       (entry) => {
  //         entry.target.classList.toggle("bounce-show", entry.isIntersecting);
  //       },
  //       {
  //         threshold: 2,
  //       },
  //     );
  //   });

  //   cards.forEach((card) => {
  //     skillObserver.observe(card);
  //   });
  // }, []);

  return (
    <article className="card">
      <div className="px-0 md:px-10">
        <h4 className="pb-5 text-4xl">{title}</h4>
        <p className="mt-1 text-xl font-semibold">{company}</p>
        <div className="my-5 flex items-center justify-center space-x-2">
          {techIcons.map((icon, i) => (
            <div key={i}>{icon}</div>
          ))}
        </div>
        <p className="text-md py-5 uppercase text-gray-300">{date}</p>
      </div>
      <ul className="ml-5 list-disc space-y-4 text-lg">
        {summaries.map((summary, j) => (
          <li key={j}>{summary}</li>
        ))}
      </ul>
    </article>
  );
}
