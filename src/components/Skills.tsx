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
import { ReactComponent as IconHex } from "../icons/hexagon-svgrepo-com.svg";

type Props = {}

export default function Skills({}: Props) {
  return (
    <div className="flex flex-col h-screen relative text-center md:text-left justify-center
    items-center xl:flex-row xl:px-10 xl:space-y-0 max-w-[2000px] min-h-screen mx-auto">
      <h3 className="uppercase absolute top-24 text-gray-400 text-2xl tracking-[20px]">
        Skills
      </h3>

     <div className="grid grid-cols-3 gap-5">
      <div>
        <IconCplusplus className="skill-icon-fade w-[100px] h-[100px]" />
      </div>
      <div>
        <IconCsharp className="skill-icon-fade w-[100px] h-[100px]"/>
      </div>
      <div>
        <IconJS className="skill-icon-fade w-[100px] h-[100px]"/>
      </div>
      <div>
        <IconTS className="skill-icon-fade w-[130px] h-[130px] mt-[-17px]"/>
      </div>
      <div>
        <IconPython className="skill-icon-fade w-[100px] h-[100px]"/>
      </div>
      <div>
        <IconTailwind className="skill-icon-fade w-[100px] h-[100px]"/>
      </div>
      <div>
        <IconReact className="skill-icon-fade w-[100px] h-[100px]"/>
      </div>
      <div>
        <IconUnity className="skill-icon-fade w-[100px] h-[100px]"/>
      </div>
      <div>
        <IconVScode className="skill-icon-fade w-[98px] h-[98px]"/>
      </div>
     </div>
    </div>
  )
}