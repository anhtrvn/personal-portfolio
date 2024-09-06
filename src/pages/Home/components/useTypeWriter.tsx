import { useEffect, useState } from 'react';

export enum TypeState {
  Typing,
  Pausing,
  Deleting,
}

const TYPE_TIME = 150;
const PAUSE_TIME = 1000;
const DELETE_TIME = 50;

export const useTypewriter = (texts: string[]): { typed: string } => {
  const [index, setIndex] = useState(0);
  const [typeState, setTypeState] = useState(TypeState.Typing);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    switch (typeState) {
      case TypeState.Typing: {
        const nextType = texts[index].slice(0, typed.length + 1);
        if (nextType === typed) {
          setTypeState(TypeState.Pausing);
        } else {
          timeout = setTimeout(() => {
            setTyped(nextType);
          }, TYPE_TIME);
        }
        break;
      }

      case TypeState.Deleting: {
        if (!typed) {
          const nextIndex = index + 1;
          setIndex(texts[nextIndex] ? nextIndex : 0);
          setTypeState(TypeState.Typing);
        } else {
          const nextRemaining = texts[index].slice(0, typed.length - 1);
          timeout = setTimeout(() => {
            setTyped(nextRemaining);
          }, DELETE_TIME);
        }
        break;
      }

      case TypeState.Pausing: {
        timeout = setTimeout(() => {
          setTypeState(TypeState.Deleting);
        }, PAUSE_TIME);
        break;
      }

      default:
        break;
    }

    return () => clearTimeout(timeout);
  }, [texts, typed, index, typeState]);

  return { typed };
};
