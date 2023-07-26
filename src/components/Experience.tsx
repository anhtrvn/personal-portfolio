import React from "react";
import { ReactComponent as IconCplusplus } from "../icons/cplusplus-svgrepo-com.svg";
import { ReactComponent as IconPython } from "../icons/python-127-svgrepo-com.svg";
import { ReactComponent as IconGit } from "../icons/git-svgrepo-com.svg";
import { ReactComponent as IconUnity } from "../icons/unity-svgrepo-com.svg";
import { ReactComponent as IconCsharp } from "../icons/csharp2-svgrepo-com.svg";

type Props = {}

export default function Experience({}: Props) {
  // const cards = document.querySelectorAll<HTMLDivElement>(".card");
  // // TODO: find solution to no animation in view
  // console.log("hi");
  // const observer = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {
  //     entry.target.classList.toggle("card-show", entry.isIntersecting);
  //   })
  // })

  // cards.forEach(card => {
  //   observer.observe(card);
  // })

  return (
    <section id="experience"
      className="relative flex flex-col md:flex-row 
      justify-evenly items-center overflow-hidden
      h-4/6 max-w-full px-5 mx-auto 
      text-center md:text-left"
    >
      <h3 className="absolute top-24
      uppercase text-gray-400 text-2xl tracking-[20px]"
      >
        Experience
      </h3>

      <div className="card-group group p-10 mt-[-250px]">
        <div className="card">
          <h4 className="text-4xl font-light">CS Tutor</h4>
          <p className="text-2x font-bold mt-1">
            ConocoPhillips CS Learning Center <br />
            at University of Houston
          </p>
          <div className="flex space-x-2 my-2">
            <IconCplusplus className="w-[30px] h-[30px]" />
            <IconPython className="w-[30px] h-[30px]" />
          </div>
          <p className="py-5 uppercase text-gray-300">Sep 2022 - Present</p>
          <ul className="list-dict space-y-4 ml-5 text-lg">
            <li>summary</li>
            <li>summary</li>
            <li>summary</li>
          </ul>
        </div>
        <div className="card">
          <h4 className="text-4xl font-light">Team Lead</h4>
          <p className="text-2x font-bold mt-1">
            Interactive Game Development Team Prospective <br />
            at University of Houston
          </p>
          <div className="flex space-x-2 my-2">
            <IconCsharp className="w-[30px] h-[30px]" />
            <IconUnity className="w-[30px] h-[30px]" />
            <IconGit className="w-[30px] h-[30px]" />
          </div>
          <p className="py-5 uppercase text-gray-300">Sep 2022 - Present</p>
          <ul className="list-dict space-y-4 ml-5 text-lg">
            <li>summary</li>
            <li>summary</li>
            <li>summary</li>
          </ul>
        </div>
        <div className="card">
          <h4 className="text-4xl font-light">CS Tutor</h4>
          <p className="text-2x font-bold mt-1">
            ConocoPhillips CS Learning Center <br />
            at University of Houston
          </p>
          <div className="flex space-x-2 my-2">
            <IconCplusplus className="w-[30px] h-[30px]" />
            <IconPython className="w-[30px] h-[30px]" />
          </div>
          <p className="py-5 uppercase text-gray-300">Sep 2022 - Present</p>
          <ul className="list-dict space-y-4 ml-5 text-lg">
            <li>summary</li>
            <li>summary</li>
            <li>summary</li>
          </ul>
        </div>
        <div className="card">
          <h4 className="text-4xl font-light">CS Tutor</h4>
          <p className="text-2x font-bold mt-1">
            ConocoPhillips CS Learning Center <br />
            at University of Houston
          </p>
          <div className="flex space-x-2 my-2">
            <IconCplusplus className="w-[30px] h-[30px]" />
            <IconPython className="w-[30px] h-[30px]" />
          </div>
          <p className="py-5 uppercase text-gray-300">Sep 2022 - Present</p>
          <ul className="list-dict space-y-4 ml-5 text-lg">
            <li>summary</li>
            <li>summary</li>
            <li>summary</li>
          </ul>
        </div>
      </div>
    </section>
  )
}