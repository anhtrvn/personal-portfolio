import React from "react";
import Skill from "../components/Skill";
import { ReactComponent as IconCplusplus } from "../icons/cplusplus-svgrepo-com.svg";
import { ReactComponent as IconCsharp } from "../icons/csharp2-svgrepo-com.svg";
import { ReactComponent as IconJS } from "../icons/js02-svgrepo-com.svg";
import { ReactComponent as IconPython } from "../icons/python-127-svgrepo-com.svg";
import { ReactComponent as IconReact } from "../icons/react-svgrepo-com.svg";
import { ReactComponent as IconTailwind } from "../icons/tailwind-svgrepo-com.svg";
import { ReactComponent as IconTS } from "../icons/typescript-svgrepo-com.svg";
import { ReactComponent as IconUnity } from "../icons/unity-svgrepo-com.svg";
import { ReactComponent as IconVScode } from "../icons/visual-studio-code-svgrepo-com.svg";

type Props = {}

export default function Skills({}: Props) {
  return (
    <div className="flex flex-col h-screen relative text-center md:text-left justify-center
    items-center xl:flex-row xl:px-10 xl:space-y-0 max-w-[2000px] min-h-screen mx-auto">
      <h3 className="uppercase absolute top-24 text-gray-400 text-2xl tracking-[20px]">
        Skills
      </h3>

      <div className="grid grid-cols-3 gap-5">
        <div className="group relative flex cursor-pointer">
          <IconCplusplus className="skill-icon-fade w-[100px] h-[100px]" />
          <div className="skill-name-appear m-[21px] my-[30px]">
            <p className="font-bold text-3xl">C++</p>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <IconPython className="skill-icon-fade w-[100px] h-[100px]" />
          <div className="skill-name-appear my-[30px]">
            <p className="font-bold text-3xl">Python</p>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <IconCsharp className="skill-icon-fade w-[105px] h-[105px]" />
          <div className="skill-name-appear m-[34px] my-[34px]">
            <p className="font-bold text-3xl">C#</p>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <IconJS className="skill-icon-fade w-[100px] h-[100px]" />
          <div className="skill-name-appear ml-[-15px] my-[30px]">
            <p className="font-bold text-3xl">Javascript</p>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <IconTS className="skill-icon-fade w-[130px] h-[130px] ml-[-8px] mt-[-17px]" />
          <div className="skill-name-appear ml-[-15px] my-[30px]">
            <p className="font-bold text-3xl">Typescript</p>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <IconTailwind className="skill-icon-fade w-[100px] h-[100px]" />
          <div className="skill-name-appear ml-[-21px] my-[12px]">
            <p className="font-bold text-3xl text-center">Tailwind CSS</p>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <IconReact className="skill-icon-fade w-[100px] h-[100px]" />
          <div className="skill-name-appear ml-[10px] my-[30px]">
            <p className="font-bold text-3xl">React</p>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <IconVScode className="skill-icon-fade w-[95px] h-[95px]" />
          <div className="skill-name-appear ml-[-5px] my-[27px]">
            <p className="font-bold text-3xl text-center">VSCode</p>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <IconUnity className="skill-icon-fade w-[100px] h-[100px]" />
          <div className="skill-name-appear m-[16px] my-[30px]">
            <p className="font-bold text-3xl">Unity</p>
          </div>
        </div>
      </div>
    </div>
  )
}