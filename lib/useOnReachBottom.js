"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useOnReachBottom = (callback) => {
    const elemRef = (0, react_1.useRef)(null);
    const reachedBottom = (0, react_1.useCallback)((elem) => elem.getBoundingClientRect().bottom <= window.innerHeight + 1, [elemRef.current, window]);
    (0, react_1.useEffect)(() => {
        if (elemRef.current && window) {
            const elem = elemRef.current;
            const onScroll = () => {
                if (reachedBottom(elem)) {
                    callback();
                }
            };
            onScroll();
            window.addEventListener('wheel', onScroll);
            return () => {
                window.removeEventListener('wheel', onScroll);
            };
        }
    }, [window, elemRef.current]);
    return elemRef;
};
exports.default = useOnReachBottom;
