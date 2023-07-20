import React from "react";
import { ReactComponent as IconCplusplus } from "../icons/cplusplus-svgrepo-com.svg";
import { ReactComponent as IconPython } from "../icons/python-127-svgrepo-com.svg";

type Props = {}

export default function Experience({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:flex-row md:text-left
    mx-7xl px-5 justify-evenly items-center mx-auto">
      <h3 className="uppercase absolute top-24 text-gray-400 text-2xl tracking-[20px]">
        Experience
      </h3>

      <article className="flex flex-col flex-shrink-0 rounded-lg items-center snap-center
      bg-[#333842] space-y-7 p-10 opacity-50 transition-opacity hover:opacity-100 duration-200
      overflow-hidden cursor-pointer w-[500px] md:w-[600px] xl:w-[900px]">
        <div className="px-0 md:px-10">
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
      </article>
    </div>
  )
}