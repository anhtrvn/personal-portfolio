import React, { useEffect, useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePause,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as IconCplusplus } from "../icons/cplusplus-svgrepo-com.svg";
import { ReactComponent as IconCsharp } from "../icons/csharp2-svgrepo-com.svg";
import { ReactComponent as IconPython } from "../icons/python-127-svgrepo-com.svg";
import { ReactComponent as IconUnity } from "../icons/unity-svgrepo-com.svg";

type Props = {};

export default function Experience({}: Props) {
  const experienceData = [
    {
      title: "CS Tutor",
      company: "ConocoPhillips CS Learning Center at UofH",
      techIcons: [
        <IconCplusplus className="h-[42px] w-[42px]" />,
        <IconPython className="h-[40px] w-[40px]" />,
      ],
      date: "Sept 2022 - Present",
      summaries: [
        "Hosted both individualized and group tutoring sessions in Computer Science.",
        "Instructed a wide array of CS concepts, spanning from foundational basics and syntax to advanced data structures and algorithms. ",
        "Delivered comprehensive lessons on programming paradigms, adept problem-solving techniques, and rigorous debugging skills.",
      ],
    },
    {
      title: "Game Dev Team Lead",
      company: "Interactive Game Development at UofH",
      techIcons: [
        <IconCsharp className="h-[42px] w-[42px]" />,
        <IconUnity className="h-[40px] w-[40px]" />,
      ],
      date: "Aug - Dec 2022",
      summaries: [
        "Team Lead: Directed game development, managed sub-teams (UI, gameplay, level design), and led productive meetings.",
        "Gameplay Designer: Designed player skills, enemy types, and attacks for engaging gameplay mechanics.",
        "Level Designer: Crafted game maps and strategic enemy placements for immersive and challenging experiences.",
        "Game Demo Video: https://youtu.be/Q9Z-05qVYfE",
      ],
    },
    {
      title: "Be My Next Opportunity!",
      company: "──●─────────────────",
      techIcons: [
        <FontAwesomeIcon
          icon={faBackwardStep}
          style={{ color: "#ffffff" }}
          size="2xl"
          className="mr-5"
        />,
        <FontAwesomeIcon
          icon={faCirclePause}
          style={{ color: "#ffffff" }}
          size="2xl"
        />,
        <FontAwesomeIcon
          icon={faForwardStep}
          style={{ color: "#ffffff" }}
          size="2xl"
          className="ml-5"
        />,
      ],
      date: "",
      summaries: [],
    },
  ];

  return (
    <section
      id="experience"
      className="relative mx-auto flex h-screen max-w-full snap-start flex-col items-center
      justify-evenly overflow-hidden px-5 text-center md:flex-row md:text-left"
    >
      <h3
        className="absolute top-24 font-mono text-2xl uppercase tracking-[20px] text-gray-400
        md:text-3xl"
      >
        Experience
      </h3>

      <div
        className="z-20 flex max-h-full w-full snap-x snap-mandatory space-x-5 overflow-x-scroll
        pt-28"
      >
        {experienceData.map((experience, i) => (
          <ExperienceCard
            key={i}
            title={experience.title}
            company={experience.company}
            techIcons={experience.techIcons}
            date={experience.date}
            summaries={experience.summaries}
          />
        ))}
      </div>

      <div className="absolute left-0 top-[30%] h-[500px] w-full skew-y-6 bg-[#333842]"></div>
    </section>
  );
}
