import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

type Props = {};

export default function About({}: Props) {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);

  function bioInView() {
    if (headerRef.current == null || bioRef.current == null) return;
    headerRef.current.style.marginLeft = "0px";
    headerRef.current.style.opacity = "1";
    bioRef.current.style.opacity = "1";
  }

  function bioOutView() {
    if (headerRef.current == null || bioRef.current == null) return;
    headerRef.current.style.marginLeft = "-400px";
    headerRef.current.style.opacity = "0";
    bioRef.current.style.opacity = "0";
  }

  useEffect(() => {
    const bioObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) bioInView();
          else bioOutView();
        });
      },
      {
        threshold: 1,
      },
    );
    if (headerRef.current == null || bioRef.current == null) return;
    bioObserver.observe(bioRef.current);
  }, []);

  return (
    <section
      id="about"
      className="mx-7xl relative mx-auto flex h-screen snap-start flex-col items-center justify-evenly
      px-5 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 font-mono text-2xl uppercase tracking-[20px] text-gray-400 md:text-3xl">
        About
      </h3>

      <div className="z-10 space-y-10 md:px-10">
        <h4
          ref={headerRef}
          className="-ml-[400px] text-3xl font-semibold opacity-0 transition-all delay-300 duration-1000 
          md:text-4xl"
        >
          <FontAwesomeIcon
            icon={faBookmark}
            style={{ color: "#ffffff" }}
            className="pr-4"
          />
          a{" "}
          <span className="group relative font-mono">
            <span className="relative z-10">bit</span>
            <div className="highlighter"></div>
          </span>{" "}
          about me
        </h4>

        {/* Bio */}
        <p
          ref={bioRef}
          className="text-base opacity-0 transition-all delay-300 duration-1000 md:text-xl"
        >
          {"<"} Hi there, I'm Anh, a student at the University of Houston.
          Currently, I'm exploring the world of Computer Science, striving to
          become a proficient software engineer. Beyond coding, I've got this
          adventurous side that's drawn to creativity and pushing boundaries –
          whether that's delving into artsy projects or challenging workout
          routines. I like to view challenges as opportunities for growth and
          learning. When I'm not in productive mode, I love spending time with
          my sweet furry buddies and cruising around town. My guidance stems
          from blending technology, creativity, and moments of relaxation. Thus,
          I'm on a journey to relish the software engineering world while
          maintaining a balanced and enjoyable lifestyle. {"/>"}
        </p>
      </div>

      <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-6 bg-[#333842]"></div>
    </section>
  );
}
