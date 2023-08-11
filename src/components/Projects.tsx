import React from "react";

type Props = {};

export default function Projects({}: Props) {
  return (
    <section
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden
      text-center md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-400">
        Projects
      </h3>
      <div></div>
    </section>
  );
}
