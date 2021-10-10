import { useCallback, useEffect, useRef } from "react";

const useOnReachBottom = (callback: () => void) => {
    const elemRef = useRef<HTMLElement | null>(null);

    const reachedBottom = useCallback(
        (elem: HTMLElement) => elem.getBoundingClientRect().bottom <= window.innerHeight + 1,
        [elemRef.current, window]
    );

    useEffect(() => {
        if (elemRef.current && window) {
            const elem = elemRef.current;

            const onScroll = () => {
                if (reachedBottom(elem)) {
                    callback();
                }
            }

            onScroll();

            window.addEventListener('wheel', onScroll);

            return () => {
                window.removeEventListener('wheel', onScroll)
            }
        }
    }, [window, elemRef.current]);

    return elemRef;
}

export default useOnReachBottom;