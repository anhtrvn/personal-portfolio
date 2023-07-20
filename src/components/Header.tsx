import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

type Props = {};

export default function Header({}: Props) {
	const socialsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	function onLoad() {
  	if (contactRef.current == null || socialsRef.current == null) return;
  	contactRef.current.style.marginRight = "0px";
  	socialsRef.current.style.marginLeft = "0px";
		contactRef.current.style.opacity = "1";
		socialsRef.current.style.opacity = "1";
	}

	useEffect(() => {
	  onLoad();
	}, []);

	return (
	  <header className="sticky top-0 p-5 flex item-start justify-between max-w-6xl mx-auto 
		xl:items-center z-20">
				{/* Socials */}
	  		<div ref={socialsRef} 
					className="flex flex-row items-center space-x-2 -ml-[100px] opacity-0
					transition-all duration-1000"
				>
	  		  <a href="https://www.linkedin.com/in/anh-tran-12b233233/">
	  		    <FontAwesomeIcon icon={faLinkedin} size="lg" 
							className="px-1 hover:-translate-y-1 hover:scale-110 duration-300" 
						/>
	  		  </a>
	  		  <a href="https://github.com/anhtrvn">
	  		    <FontAwesomeIcon icon={faGithub} size="lg"
							className="px-1 hover:-translate-y-1 hover:scale-110 duration-300"
						/>
	  		  </a>
	  		</div>
	
	  		{/* Contact */}
	  	  <div ref={contactRef} 
					className="group flex flex-row items-center space-x-2 cursor-pointer -mr-[100px] 
					opacity-0 transition-all duration-1000"
				>
	  	  	<a href="#contact">
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400 px-1
						group-hover:text-white group-hover:-translate-y-1 duration-300">
							Get In Touch
						</p>
						<FontAwesomeIcon icon={faPaperPlane} size="lg"
							className="px-1 group-hover:-translate-y-1 group-hover:scale-110 duration-300" 
						/>
          </a>
				</div>
		</header>
	);
}
