import React from "react";
import { ReactComponent as IconCplusplus } from "../icons/cplusplus-svgrepo-com.svg";
import { ReactComponent as IconCsharp } from "../icons/csharp2-svgrepo-com.svg";
import { ReactComponent as IconJS } from "../icons/js02-svgrepo-com.svg";
import { ReactComponent as IconPython } from "../icons/python-127-svgrepo-com.svg";
import { ReactComponent as IconReact } from "../icons/react-svgrepo-com.svg";
import { ReactComponent as IconTailwind } from "../icons/tailwind-svgrepo-com.svg";
import { ReactComponent as IconTS } from "../icons/typescript-svgrepo-com.svg";
import { ReactComponent as IconGit } from "../icons/git-svgrepo-com.svg";
import { ReactComponent as IconUnity } from "../icons/unity-svgrepo-com.svg";
import { ReactComponent as IconVScode } from "../icons/visual-studio-code-svgrepo-com.svg";

type Props = {}

export default function Skills({}: Props) {
  const skills = document.querySelectorAll<HTMLDivElement>(".skill");
  // TODO: find solution to no animation in view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("skill-show", entry.isIntersecting);
    })
  })

  skills.forEach(skill => {
    observer.observe(skill);
  })
  
  return (
    <div className="flex flex-col h-screen relative text-center md:text-left justify-center
    items-center xl:flex-row xl:px-10 xl:space-y-0 max-w-[2000px] min-h-screen mx-auto">
      <h3 className="uppercase absolute top-24 text-gray-400 text-2xl tracking-[20px]">
        Skills
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-5">
        <div className="skill group">
          <IconCplusplus className="skill-fade w-[100px] h-[100px]"/>
          <div className="skill-name m-[21px] my-[30px]">
            <p className="font-semibold text-3xl">C++</p>
          </div>
        </div>
        <div className="skill group">
          <IconPython className="skill-fade w-[100px] h-[100px]" />
          <div className="skill-name mx-[2px] my-[30px]">
            <p className="font-semibold text-3xl">Python</p>
          </div>
        </div>
        <div className="skill group">
          <IconCsharp className="skill-fade w-[105px] h-[105px]" />
          <div className="skill-name m-[34px] my-[34px]">
            <p className="font-semibold text-3xl">C#</p>
          </div>
        </div>
        <div className="skill group">
          <IconJS className="skill-fade w-[100px] h-[100px]" />
          <div className="skill-name ml-[-15px] my-[30px]">
            <p className="font-semibold text-3xl">Javascript</p>
          </div>
        </div>
        <div className="skill group">
          <IconTS className="skill-fade w-[130px] h-[130px] ml-[-8px] mt-[-17px]" />
          <div className="skill-name ml-[-15px] my-[30px]">
            <p className="font-semibold text-3xl">Typescript</p>
          </div>
        </div>
        <div className="skill group">
          <IconTailwind className="skill-fade w-[100px] h-[100px]" />
          <div className="skill-name ml-[-21px] my-[12px]">
            <p className="font-semibold text-3xl text-center">Tailwind CSS</p>
          </div>
        </div>
        <div className="skill group">
          <IconReact className="skill-fade w-[100px] h-[100px]" />
          <div className="skill-name ml-[10px] my-[30px]">
            <p className="font-semibold text-3xl">React</p>
          </div>
        </div>
        <div className="skill group">
          <IconVScode className="skill-fade w-[92px] h-[92px]" />
          <div className="skill-name ml-[-5px] my-[27px]">
            <p className="font-semibold text-3xl text-center">VSCode</p>
          </div>
        </div>
        <div className="skill group">
          <IconUnity className="skill-fade w-[100px] h-[100px]" />
          <div className="skill-name m-[16px] my-[30px]">
            <p className="font-semibold text-3xl">Unity</p>
          </div>
        </div>
        <div className="skill group">
          <IconGit className="skill-fade w-[120px] h-[120px] ml-[-8px]" />
          <div className="skill-name m-[30px] my-[40px] ">
            <p className="font-semibold text-3xl">Git</p>
          </div>
        </div>
      </div>
    </div>
  )
}