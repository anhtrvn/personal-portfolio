import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

type Props = {};

export default function Header({}: Props) {
	const socialsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	function onLoad() {
  	if (contactRef.current == null || socialsRef.current == null) {
  	  return;
  	}
  	contactRef.current.style.marginLeft = "0px";
  	socialsRef.current.style.marginRight = "0px";
	}

	useEffect(() => {
	  onLoad();
	}, []);

	return (
	  <header>
	  	<div className="sticky top-0 p-5 flex item-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
				{/* Socials */}
	  		<div ref={contactRef} className="flex flex-row items-center space-x-2 -ml-[100px] transition-margin duration-1000">
	  		  <a href="https://www.linkedin.com/in/anh-tran-12b233233/">
	  		    <FontAwesomeIcon icon={faLinkedin} fixedWidth />
	  		  </a>
	  		  <a href="https://github.com/anhtrvn">
	  		    <FontAwesomeIcon icon={faGithub} fixedWidth />
	  		  </a>
	  		</div>
	
	  		{/* Contact */}
	  	  	<div ref={socialsRef} className="flex flex-row items-center space-x-2 cursor-pointer -mr-[100px] transition-margin duration-1000">
	  	  	  <FontAwesomeIcon icon={faEnvelope} fixedWidth />
	  	  	  <p className="uppercase hidden md:inline-flex text-sm cursor-pointer">Get In Touch</p>
	  	  	</div>
	  	</div>
		</header>
	);
}
