import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

type Props = {};

export default function Header({}: Props) {
	const socialsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	function onLoad() {
  	if (contactRef.current == null || socialsRef.current == null) {
  	  return;
  	}
  	socialsRef.current.style.marginRight = "0px";
  	contactRef.current.style.marginLeft = "0px";
		socialsRef.current.style.opacity = "1";
		contactRef.current.style.opacity = "1";
	}

	useEffect(() => {
	  onLoad();
	}, []);

	return (
	  <header>
	  	<div className="sticky top-0 p-5 flex item-start justify-between max-w-6xl mx-auto 
			z-20 xl:items-center">
				{/* Socials */}
	  		<div ref={contactRef} className="flex flex-row items-center space-x-2 -ml-[100px] 
				opacity-0 transition-margin duration-1000">
	  		  <a href="https://www.linkedin.com/in/anh-tran-12b233233/">
	  		    <FontAwesomeIcon icon={faLinkedin} fixedWidth />
	  		  </a>
	  		  <a href="https://github.com/anhtrvn">
	  		    <FontAwesomeIcon icon={faGithub} fixedWidth />
	  		  </a>
	  		</div>
	
	  		{/* Contact */}
	  	  <div ref={socialsRef} className="flex flex-row items-center space-x-2 cursor-pointer
				-mr-[100px] opacity-0 transition-margin duration-1000">
	  	  	<p className="uppercase hidden md:inline-flex text-sm cursor-pointer">Contact Me</p>
					<FontAwesomeIcon icon={faPaperPlane} fixedWidth/>
				</div>
	  	</div>
		</header>
	);
}
