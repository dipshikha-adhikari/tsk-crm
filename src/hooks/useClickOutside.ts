import { RefObject, useEffect } from "react";

type RefType<T extends HTMLElement> = RefObject<T> | RefObject<T>[];

export function useClickOutside<T extends HTMLElement>(
  ref: RefType<T>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (Array.isArray(ref)) {
        if (ref.some(r => r.current && r.current.contains(event.target as Node))) return;
      } else {
        if (ref.current && ref.current.contains(event.target as Node)) return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
