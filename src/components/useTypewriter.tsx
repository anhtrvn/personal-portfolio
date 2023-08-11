import React, { useEffect, useState } from "react";

type Props = {};

export enum TypeState {
  Typing,
  Pausing,
  Deleting,
}

const TYPE_TIME = 150;
const PAUSE_TIME = 1000;
const DELETE_TIME = 50;

export const useTypewriter = (
  txts: string[],
): {
  typed: string;
  text: string;
} => {
  const [index, setIndex] = useState(0);
  const [typeState, setTypeState] = useState(TypeState.Typing);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    switch (typeState) {
      case TypeState.Typing: {
        {
          /* Typing State */
        }
        const nextType = txts[index].slice(0, typed.length + 1);
        if (nextType === typed) {
          setTypeState(TypeState.Pausing);
          return;
        }
        const timeout = setTimeout(() => {
          setTyped(nextType);
        }, TYPE_TIME);

        return () => clearTimeout(timeout);
      }
      case TypeState.Deleting: {
        if (!typed) {
          const nextIndex = index + 1;
          setIndex(txts[nextIndex] ? nextIndex : 0);
          setTypeState(TypeState.Typing);
          return;
        }
        const nextRemaining = txts[index].slice(0, typed.length - 1);

        const timeout = setTimeout(() => {
          setTyped(nextRemaining);
        }, DELETE_TIME);

        return () => clearTimeout(timeout);
      }
      case TypeState.Pausing:
      default:
        const timeout = setTimeout(() => {
          setTypeState(TypeState.Deleting);
        }, PAUSE_TIME);
        return () => clearTimeout(timeout);
    }
  }, [txts, typed, index, typeState]);

  return { typed, text: txts[index] };
};
