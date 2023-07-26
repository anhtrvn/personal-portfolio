import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

type Props = {};

export default function Header({}: Props) {
	const homeRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	function onLoad() {
  	if (contactRef.current == null || homeRef.current == null) return;
  	contactRef.current.style.marginRight = "0px";
  	homeRef.current.style.marginLeft = "0px";
		contactRef.current.style.opacity = "1";
		homeRef.current.style.opacity = "1";
	}

	useEffect(() => {
	  onLoad();
	}, []);

	return (
	  <header className="sticky top-0 flex 
		item-start xl:items-center justify-between 
		p-5 max-w-6xl mx-auto z-20"
		>
				{/* Home button */}
	  		<div ref={homeRef} 
					className="flex flex-row 
					items-center 
					space-x-2 -ml-[100px] 
					opacity-0
					transition-all duration-1000"
				>
					<a href="#hero">
            <button className="md:inline-flex
						uppercase text-sm text-gray-400 hover:text-white 
						px-1 hover:-translate-y-1 
						duration-300"
					>
							// AnhTran.
						</button>
        	</a>
	  		</div>
	
	  		{/* Contact */}
	  	  <div ref={contactRef} 
					className="flex flex-row 
					items-center cursor-pointer 
					space-x-2 -mr-[100px] 
					opacity-0 
					transition-all duration-1000"
				>
	  	  	<a href="#contact" className="group">
            <p className="md:inline-flex hidden 
						uppercase text-sm text-gray-400 
						px-1 group-hover:-translate-y-1 
						group-hover:text-white 
						duration-300"
					>
							// ContactMe.
						</p>
						<FontAwesomeIcon icon={faPaperPlane} size="lg"
							className="px-1 group-hover:-translate-y-1 group-hover:scale-110 duration-300" 
						/>
          </a>
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
		</header>
	);
}
