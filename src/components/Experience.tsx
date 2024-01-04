import React, { useEffect, useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePause,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
// Icons Imports
import { ReactComponent as IconCplusplus } from "../icons/cplusplus-svgrepo-com.svg";
import { ReactComponent as IconCsharp } from "../icons/csharp2-svgrepo-com.svg";
import { ReactComponent as IconPython } from "../icons/python-127-svgrepo-com.svg";
import { ReactComponent as IconUnity } from "../icons/unity-svgrepo-com.svg";
import { ReactComponent as IconGit } from "../icons/git-svgrepo-com.svg";
import { ReactComponent as IconTS } from "../icons/typescript-svgrepo-com.svg";
import { ReactComponent as IconReact } from "../icons/react-svgrepo-com.svg";
import { ReactComponent as IconTailwind } from "../icons/tailwind-svgrepo-com.svg";
import { ReactComponent as IconNextJS } from "../icons/nextjs-svgrepo-com.svg";
import { ReactComponent as IconMongoDB } from "../icons/mongodb-svgrepo-com.svg";
import { ReactComponent as IconNodeJS } from "../icons/node-js-svgrepo-com.svg";

type Props = {};

export default function Experience({}: Props) {
  const experienceData = [
    {
      title: "CS Academic Tutor",
      company: "ConocoPhillips CS Learning Center at UofH",
      techIcons: [
        <IconCplusplus className="h-[42px] w-[42px]" />,
        <IconPython className="h-[40px] w-[40px]" />,
      ],
      date: "Sep. 2022 - Dec. 2023",
      summaries: [
        "Hosted both individualized and group tutoring sessions in Computer Science.",
        "Instructed a wide array of CS concepts, spanning from foundational basics and syntax to advanced data structures and algorithms. ",
        "Delivered comprehensive lessons on programming paradigms, adept problem-solving techniques, and rigorous debugging skills.",
      ],
    },
    {
      title: "3D Action Side-scrolling Game Demo",
      company: "Interactive Game Development at UofH",
      techIcons: [
        <IconCsharp className="h-[42px] w-[42px]" />,
        <IconUnity className="h-[40px] w-[40px]" />,
        <IconGit className="h-[46px] w-[46px]" />,
      ],
      date: "Aug. - Dec. 2022",
      summaries: [
        "Team Lead: Directed game development, managed sub-teams (UI, gameplay, level design), and led productive meetings.",
        "Gameplay Designer: Designed player skills, enemy types, and attacks for engaging gameplay mechanics.",
        "Level Designer: Crafted game maps and strategic enemy placements for immersive and challenging experiences.",
        "Employed Git for robust version control practices to facilitate collaborative and organized development processes.",
        <a href="https://youtu.be/Q9Z-05qVYfE" className="underline">
          Game Demo Video
        </a>,
      ],
    },
    {
      title: "Fullstack Fuel Price Website",
      company: "Software Design at UofH",
      techIcons: [
        <IconMongoDB className="h-[42px] w-[42px]" />,
        <IconNodeJS className="h-[42px] w-[42px]" />,
        <IconReact className="h-[42px] w-[42px]" />,
        <IconNextJS className="h-[40px] w-[40px]" />,
        <IconTS className="h-[50px] w-[50px]" />,
        <IconTailwind className="h-[42px] w-[42px]" />,
        <IconGit className="h-[46px] w-[46px]" />,
      ],
      date: "Sep. - Dec. 2023",
      summaries: [
        "Developed backend functionalities (i.e. microservices) to support diverse business requirements with Node.js (Express)",
        "Implemented MongoDB for efficient and organized data storage",
        "Continuously enhancing proficiency in React, TypeScript, and Tailwind to craft engaging and dynamic user interfaces.",
        "Employed Git for robust version control practices to facilitate collaborative and organized development processes.",
      ],
    },
    {
      title: "Be My Next Opportunity!",
      company: "", // "──●─────────────────",
      techIcons: [
        // <FontAwesomeIcon
        //   icon={faBackwardStep}
        //   style={{ color: "#ffffff" }}
        //   size="2xl"
        //   className="mr-5 cursor-pointer"
        // />,
        // <FontAwesomeIcon
        //   icon={faCirclePause}
        //   style={{ color: "#ffffff" }}
        //   size="2xl"
        //   className="cursor-pointer"
        // />,
        // <FontAwesomeIcon
        //   icon={faForwardStep}
        //   style={{ color: "#ffffff" }}
        //   size="2xl"
        //   className="ml-5 cursor-pointer"
        // />,
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
