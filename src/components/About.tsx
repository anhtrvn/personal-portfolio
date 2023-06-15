import React from "react";
type Props = {}

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:flex-row 
    md:text-left mx-7xl px-5 justify-evenly items-center mx-auto">
      <h3 className="uppercase absolute top-24 text-gray-400 text-2xl tracking-[20px]">
        About
      </h3>
    </div>
  )
}