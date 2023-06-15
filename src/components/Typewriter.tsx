import React, { useEffect, useState } from "react";

export default function Typewriter() {
  const firstText = "hi, I'm Anh Tran";
  const secondText = "welcome to my space";
  const thirdText = "<made with many cups of coffee/>";

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");

  const textState = ["isTyping", "isDeleting"];
  const [typing, setTyping] = useState(textState[0]);

  {/* Pause when finish typing */}
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing === "isTyping" && text1 !== firstText) {
        setText1(firstText.slice(0, text1.length + 1));
      }
      else if (typing === "isTyping" && text1 === firstText) {
        sleep(2000).then(() => {
          setTyping(textState[1]);
        })
      }
      else if ((typing === "isDeleting" && text1 === firstText) || typing === "isDeleting") {
        setText1(firstText.slice(0, text1.length - 1));
        if(text1.length <= 2){
          setTyping(textState[0]);
        }
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [text1]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing === "isTyping" && text2 !== secondText) {
        setText2(secondText.slice(0, text2.length + 1));
      }
      else if (typing === "isTyping" && text2 === secondText) {
        sleep(2000).then(() => {
          setTyping(textState[1]);
        })
      }
      else if ((typing === "isDeleting" && text2 === secondText) || typing === "isDeleting") {
        setText2(secondText.slice(0, text2.length - 1));
        if(text2.length <= 2){
          setTyping(textState[0]);
        }
      }
    }, 250);
    return () => clearTimeout(timeout);
  }, [text2]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing === "isTyping" && text3 !== thirdText) {
        setText3(thirdText.slice(0, text3.length + 1));
      }
      else if (typing === "isTyping" && text3 === thirdText) {
        sleep(2000).then(() => {
          setTyping(textState[1]);
        })
      }
      else if ((typing === "isDeleting" && text3 === thirdText) || typing === "isDeleting") {
        setText3(thirdText.slice(0, text3.length - 1));
        if(text3.length <= 2){
          setTyping(textState[0]);
        }
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, [text3]);

  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center rounded-md">
        {/* Display */}
        <span>
          <div className="text-2xl text-white blinking-cursor">{text1}</div>
          <div className="text-2xl text-white blinking-cursor">{text2}</div>
          <div className="text-2xl text-white blinking-cursor">{text3}</div>
        </span>
      </div>
    </div>
  );
}
