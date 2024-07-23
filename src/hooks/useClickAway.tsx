import { RefObject, useEffect } from "react";

export default function useClickAway(ref: RefObject<HTMLDivElement>, callback: () => void) {
  useEffect(() => {
    function handleClickAway(event: MouseEvent) {
      console.log(ref.current)
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }


    }
    document.addEventListener("mousedown", handleClickAway);
    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [ref]);
}