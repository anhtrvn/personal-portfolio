import React from "react";
import { useTypewriter } from "./useTypewriter";

type Props = {}

export default function Hero({}: Props) {
  const txts = ["hi, I'm Anh Tran", "welcome to my space", "<made with many cups of coffee />"];
  const {typed, text} = useTypewriter(txts);

  return (
    <div className="flex flex-col h-screen space-y-8 items-center justify-center 
    text-center overflow-hidden">
      {/* Profile */}
      <img
        className="relative rounded-full border-double border-8 border-gray-500 h-32 w-32 
        mx-auto object-cover hover:animate-spin"
        src="https://cdn.discordapp.com/attachments/697129633090371677/1118230003918839929/IMG_20230114_042647_304.jpg"
        alt=""
      />
      <div className="z-20">
        <h2 className="uppercase text-sm pb-5 text-gray-400 tracking-[10px]">
          — Software Engineer —
        </h2>

        {/* Typewriter effect */}
        <h1>
          <span 
            className="text-3xl text-white cursor-blink"
            aria-label={text}
          >
            {typed}
          </span>
        </h1>

        {/* Section buttons */}
        <div className="pt-5">
          <a href="#about">
            <button className="hero-button">About</button>
          </a>
          <a href="#skills">
            <button className="hero-button">Skills</button>
          </a>
          <a href="#experience">
            <button className="hero-button">Experience</button>
          </a>
          <a href="#projects">
            <button className="hero-button">Projects</button>
          </a>
        </div>
      </div>
    </div>
  )
}
