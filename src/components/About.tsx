import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

type Props = {};

export default function About({}: Props) {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);

  function inView() {
    if (headerRef.current == null || bioRef.current == null) return;
    headerRef.current.style.marginLeft = "0px";
    headerRef.current.style.opacity = "1";
    bioRef.current.style.opacity = "1";
  }

  useEffect(() => {
    const bioObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) inView();
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
      className="mx-7xl relative mx-auto flex h-screen snap-start flex-col items-center justify-evenly px-5 text-center 
      md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 font-mono text-2xl uppercase tracking-[20px] text-gray-400">
        About
      </h3>

      <div className="z-10 space-y-10 md:px-10">
        <h4
          ref={headerRef}
          className="-ml-[400px] text-4xl font-semibold opacity-0 transition-all delay-300 duration-1000"
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
        <p
          ref={bioRef}
          className="opacity-0 transition-all delay-300 duration-1000"
        >
          [Your Name], a passionate and forward-thinking undergraduate student
          at the esteemed University of Houston, eagerly pursuing a degree in
          Computer Science with an unwavering determination to become a skilled
          software engineer. Since a young age, [Your Name] has been captivated
          by the world of creativity, finding joy in a plethora of artistic
          endeavors such as visual and performing arts, as well as engaging in
          exciting DIY projects. Their fascination with the ever-evolving
          technologies has been a driving force behind their pursuit of
          knowledge and innovation. As [Your Name] ventured into the realm of
          higher education, the allure of computer science proved irresistible,
          as it seamlessly blends creativity and problem-solving, leading to the
          creation of imaginative and practical solutions—an endeavor [Your
          Name] finds true fulfillment in. Beyond the intricacies of
          programming, [Your Name] seeks solace and exhilaration in various
          physical activities, from the invigorating challenges of weight
          lifting and bouldering to pushing their physical boundaries, fostering
          a sense of growth and achievement. Amidst the hustle and bustle, [Your
          Name] cherishes moments of relaxation and companionship, enjoying the
          company of their beloved feline friends and finding tranquility
          through cruising, whether it be in their car or on their skateboard.
          With an unyielding commitment to combining creativity, technology, and
          a balanced lifestyle, [Your Name] is destined to embark on an
          extraordinary journey as a software engineer, while embracing life's
          diverse passions and experiences along the way.
        </p>
      </div>

      <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-6 bg-[#333842]"></div>
    </section>
  );
}
