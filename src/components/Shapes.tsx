import React, { useEffect, useRef } from "react";

type Props = {};

export default function Shapes({}: Props) {
  const circleRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  function onLoadCircles() {
    if (circleRef.current == null || outerRef.current == null) return;
    circleRef.current.classList.add("load-inner-circle");
    outerRef.current.classList.add("load-outer-circle");
  }

  useEffect(() => {
    onLoadCircles();
  }, []);

  return (
    <div className="relative z-0 flex items-center justify-center">
      <div
        ref={circleRef}
        className="absolute -mt-[275px] h-[150px] w-[150px] rounded-full border border-gray-500"
      ></div>
      <div
        ref={outerRef}
        className="absolute -mt-[275px] h-[250px] w-[250px] rounded-full border border-gray-500"
      ></div>
    </div>
  );
}
