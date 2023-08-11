import React from "react";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="md:[600px] xl:[900px] flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center
      space-y-7 overflow-hidden rounded-lg bg-[#49505f] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100"
    >
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Title</h4>
        <p className="mt-1 text-2xl font-bold">Company</p>
        <div className="my-2 flex space-x-2">
          {/* Tech Icon */}
          {/* Tech Icon */}
        </div>
        <p className="py-5 uppercase text-gray-300">From - To</p>
      </div>
      <ul className="ml-5 list-disc space-y-4 text-lg">
        <li>summary</li>
        <li>summary</li>
        <li>summary</li>
      </ul>
    </article>
  );
}
