import React, { useEffect } from "react";
import { ReactComponent as IconCplusplus } from "../icons/cplusplus-svgrepo-com.svg";
import { ReactComponent as IconPython } from "../icons/python-127-svgrepo-com.svg";
import { ReactComponent as IconGit } from "../icons/git-svgrepo-com.svg";
import { ReactComponent as IconUnity } from "../icons/unity-svgrepo-com.svg";
import { ReactComponent as IconCsharp } from "../icons/csharp2-svgrepo-com.svg";

type Props = {}

export default function Experience({}: Props) {
  const titles = ["CS Tutor", "Team Lead"];
  const descrips = ["Teach", "Directed"];
  
  return (
    <section id="experience"
      className="relative flex flex-col md:flex-row 
      justify-evenly items-center overflow-hidden
      h-screen max-w-full px-5 mx-auto 
      text-center md:text-left
      snap-start"
    >
      <h3 className="absolute top-24
      uppercase text-gray-400 text-2xl font-mono tracking-[20px]"
      >
        Experience
      </h3>

      <div className="relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory w-full z-20">
        {titles.map((title, i) => (
          <div className="flex flex-col flex-shrink-0 w-screen space-y-5 snap-center items-center justify-center 
          p-20 md:p-44">
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">{titles[i]}</h4>
              {descrips.map((descrip, j) => (
                <p className="text-lg text-center md:text-left">{descrips[j]}</p>
              ))}
            </div>
          </div>
        ))}
        
      </div>
      <div className="absolute top-[30%] w-full left-0 h-[500px] -skew-y-12 bg-[#333842]"></div>
    </section>
  )
}