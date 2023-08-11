import React, { useEffect } from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <section
      id="experience"
      className="relative mx-auto flex h-screen max-w-full snap-start flex-col items-center justify-evenly overflow-hidden 
      px-5 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 font-mono text-2xl uppercase tracking-[20px] text-gray-400">
        Experience
      </h3>

      <div className="z-20 flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10">
        <ExperienceCard />
        <ExperienceCard />
      </div>

      <div className="absolute left-0 top-[30%] h-[500px] w-full skew-y-6 bg-[#333842]"></div>
    </section>
  );
}
