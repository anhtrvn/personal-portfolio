import React, { useEffect, useState } from "react";

type Props = {};

enum TypedState {
  typing,
  pausing,
  deleting,
}

const TYPE_TIME = 150;
const PAUSE_TIME = 1000;
const DELETE_TIME = 50;

export const useTypewriter = (txts: string[]) => {
  const [typedState, setTypedState] = useState(TypedState.typing);
  const [typed, setTyped] = useState("");
  useEffect(() => {
    if (typedState === TypedState.pausing) return;

    const nextTyped = txts[0].slice(0, typed.length + 1);
    if (nextTyped === typed) {
      setTypedState(TypedState.pausing);
      const timeout = setTimeout(() => {
        setTypedState(TypedState.deleting);
      }, PAUSE_TIME)
      return;
    }
  
    const timeout = setTimeout(() => {
      setTyped(txts[0].slice(0, typed.length + 1));
    }, TYPE_TIME);
  
    return () => clearTimeout(timeout);
  }, [typed])

  return typed;
}
