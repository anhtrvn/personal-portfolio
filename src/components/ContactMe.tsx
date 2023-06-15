import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

type Props = {}

export default function ContactMe({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:flex-row md:text-left max-w-7xl
    justify-evenly items-center px-10 mx-auto">
      <h3 className="uppercase absolute top-24 text-gray-400 text-2xl tracking-[20px]">
        Get In Touch
      </h3>
      <div>
        <div className="space-y-5">
          <div className="flex justify-center items-center space-x-5">
            <FontAwesomeIcon icon={faEnvelope} />
            <p className="text-2xl">anhtran18202@gmail.com</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <FontAwesomeIcon icon={faPhone} />
            <p className="text-2xl">+1 832-916-1508</p>
          </div>
        </div>
      </div>
    </div>
  )
}