import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

type Props = {};

export default function Header({}: Props) {
  const homeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  function onLoadHeader() {
    if (contactRef.current == null || homeRef.current == null) return;
    contactRef.current.style.marginRight = "0px";
    homeRef.current.style.marginLeft = "0px";
    contactRef.current.style.opacity = "1";
    homeRef.current.style.opacity = "1";
  }

  useEffect(() => {
    onLoadHeader();
  }, []);

  return (
    <header
      className="item-start text-md sticky top-0 z-50 mx-auto flex max-w-6xl justify-between p-5
      font-mono xl:items-center"
    >
      {/* Home button */}
      <div
        ref={homeRef}
        className="-ml-[100px] flex flex-row items-center space-x-2 opacity-0 transition-all duration-1000"
      >
        <a href="#hero" className="group">
          <p className="header-button">// AnhTran</p>
          <FontAwesomeIcon
            icon={faAngleUp}
            style={{ color: "#ffffff" }}
            className="duration-300 group-hover:-translate-y-1 group-hover:scale-110"
          />
        </a>
      </div>

      {/* Contact */}
      <div
        ref={contactRef}
        className="-mr-[100px] flex cursor-pointer flex-row items-center space-x-2 opacity-0 
        transition-all duration-1000"
      >
        <a href="https://www.linkedin.com/in/anh-tran-12b233233/">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="xl"
            className="px-1 duration-300 hover:-translate-y-1 hover:scale-110"
          />
        </a>
        <a href="https://github.com/anhtrvn">
          <FontAwesomeIcon
            icon={faGithub}
            size="xl"
            className="px-1 duration-300 hover:-translate-y-1 hover:scale-110"
          />
        </a>
        <a href="#contact" className="group">
          <p className="header-button">// ContactMe</p>
          <FontAwesomeIcon
            icon={faAngleDown}
            style={{ color: "#ffffff" }}
            className="px-1 duration-300 group-hover:-translate-y-1 group-hover:scale-110"
          />
        </a>
      </div>
    </header>
  );
}
