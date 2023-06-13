import React from "react";
import Typewriter from "./Typewriter";
import CircleAnim from "./CircleAnim";

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className="flex flex-col h-screen space-y-8 items-center justify-center 
    text-center overflow-hidden">
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://cdn.discordapp.com/attachments/697129633090371677/1118230003918839929/IMG_20230114_042647_304.jpg"
        alt=""
      />
      <div>
        <h1>
          <span><Typewriter /></span>
        </h1>
      </div>
    </div>
  )
}