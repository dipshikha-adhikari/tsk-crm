// hooks/useClickOutside.ts
import { RefObject, useEffect } from 'react';

type RefType<T extends HTMLElement = HTMLElement> = RefObject<T>;

export function useClickOutside<T extends HTMLElement>(
    ref: RefType<T> | RefType<T>[],
    callback: () => void
) {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const refs = Array.isArray(ref) ? ref : [ref];
            const isOutside = refs.every(
                r => r.current && !r.current.contains(event.target as Node)
            );

            if (isOutside) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
}