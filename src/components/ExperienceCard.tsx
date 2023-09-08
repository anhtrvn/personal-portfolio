import React, { HTMLAttributes, useEffect, useRef } from "react";

type ExperienceData = {
  title: string;
  company: string;
  techIcons: React.ReactNode[];
  date: string;
  summaries: React.ReactNode[];
};

export default function ExperienceCard({
  title,
  company,
  techIcons,
  date,
  summaries,
}: ExperienceData) {
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
        <p className="text-md py-2 uppercase text-gray-300">{date}</p>
      </div>
      <ul className="ml-5 list-disc space-y-4 text-left text-lg">
        {summaries.map((summary, j) => (
          <li key={j}>{summary}</li>
        ))}
      </ul>
    </article>
  );
}
