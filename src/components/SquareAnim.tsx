import React from "react";

type Props = {}

export default function SquareAnim({}: Props) {
  return (
    <div className="flex relative justify-center items-center">
      <div className="absolute border-[#333333] h-[200px] w-[200px] mt-52 animate-ping"></div>
      <div className="absolute border-[#333333] rounded-full h-[300px] w-[300px] mt-52"></div>
      <div className="absolute border-[#333333] rounded-full h-[500px] w-[500px] mt-52"></div>
      <div className="absolute border-[#92a9ff] rounded-full h-[650px] w-[650px] mt-52 animate-pulse"></div>
    </div>
  )
}