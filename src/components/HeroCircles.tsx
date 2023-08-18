import React, { useEffect, useRef, useState } from "react";

type Props = {};

export default function HeroCircles({}: Props) {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const [animPulse, setAnimPulse] = useState(false);

  function onLoadCircles() {
    if (innerRef.current == null || outerRef.current == null) return;
    innerRef.current.classList.add("load-inner-circle");
    outerRef.current.classList.add("load-outer-circle");
  }

  setTimeout(() => {
    setAnimPulse(true);
    if (innerRef.current == null || outerRef.current == null) return;
    outerRef.current.classList.remove("load-outer-circle");
    outerRef.current.classList.add("pulse-circle");
  }, 1000);

  useEffect(() => {
    onLoadCircles();
  }, []);

  return (
    <div className="relative z-0 flex items-center justify-center">
      <div
        ref={innerRef}
        className="absolute -mt-[280px] h-[170px] w-[170px] rounded-full border border-gray-500
        md:-mt-[300px]"
      ></div>
      <div
        ref={outerRef}
        className="absolute -mt-[280px] rounded-full border border-gray-500"
      ></div>
    </div>
  );
}
