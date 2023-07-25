import React from "react";
import { ReactComponent as IconCplusplus } from "../icons/cplusplus-svgrepo-com.svg";
import { ReactComponent as IconPython } from "../icons/python-127-svgrepo-com.svg";
import { ReactComponent as IconGit } from "../icons/git-svgrepo-com.svg";
import { ReactComponent as IconUnity } from "../icons/unity-svgrepo-com.svg";
import { ReactComponent as IconCsharp } from "../icons/csharp2-svgrepo-com.svg";

type Props = {}

export default function Experience({}: Props) {
  return (
    <section id="experience"
      className="flex flex-col relative h-screen text-center md:flex-row md:text-left
      mx-auto max-w-full px-5 justify-evenly items-center overflow-hidden">
      <h3 className="uppercase absolute top-24 text-gray-400 text-2xl tracking-[20px]">
        Experience
      </h3>

      <div className="flex w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <div className="xp-card">
          <h4 className="text-4xl font-light">CS Tutor</h4>
          <p className="text-2x font-bold mt-1">
            ConocoPhillips CS Learning Center <br />
            at University of Houston
          </p>
          <div className="flex space-x-2 my-2">
            <IconCplusplus className="w-[30px] h-[30px]" />
            <IconPython className="w-[30px] h-[30px]" />
          </div>
          <p className="uppercase text-gray-300 py-5">Sep 2022 - Present</p>
          <ul className="list-dict space-y-4 ml-5 text-lg">
            <li>summary</li>
            <li>summary</li>
            <li>summary</li>
          </ul>
        </div>

        <div className="xp-card">
          <h4 className="text-4xl font-light">Team Lead</h4>
          <p className="text-2x font-bold mt-1">
            Interactive Game Development Team <br />
            at University of Houston
          </p>
          <div className="flex flex-row space-x-2 my-2">
            <IconCsharp className="w-[30px] h-[30px]" />
            <IconUnity className="w-[30px] h-[30px]" />
            <IconGit className="w-[33px] h-[33px]" />
          </div>
          <p className="uppercase text-gray-300 py-5">Aug - Dec 2022</p>
          <ul className="list-dict space-y-4 ml-5 text-lg">
            <li>summary</li>
            <li>summary</li>
            <li>summary</li>
          </ul>
        </div>
      </div>

    </section>
  )
}