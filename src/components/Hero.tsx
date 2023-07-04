import React from "react";
import Typewriter from "./Typewriter";
import SquareAnim from "./SquareAnim";

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className="flex flex-col h-screen space-y-8 items-center justify-center 
    text-center overflow-hidden">
      <img
        className="relative rounded-full border-double border-2 border-gray-400 h-32 w-32 
        mx-auto object-cover"
        src="https://cdn.discordapp.com/attachments/697129633090371677/1118230003918839929/IMG_20230114_042647_304.jpg"
        alt=""
      />
      <div className="z-20">
        <h2 className="uppercase text-sm pb-5 text-gray-400 tracking-[10px]">
          — Software Engineer —
        </h2>
        <h1>
          <span><Typewriter /></span>
        </h1>
        <div className="pt-5">
          <a href="#about">
            <button className="hero-button">About</button>
          </a>
          <a href="#skills">
            <button className="hero-button">Skills</button>
          </a>
          {/* <a href="#experience">
            <button className="hero-button">Experience</button>
          </a> */}
          <a href="#projects">
            <button className="hero-button">Projects</button>
          </a>
        </div>
      </div>
    </div>
  )
}
