"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowSize = void 0;
const react_1 = require("react");
const useWindowSize = () => {
    const [windowSize, setWindowSize] = (0, react_1.useState)({
        width: 0,
        height: 0,
    });
    (0, react_1.useEffect)(() => {
        const listener = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', listener);
        return () => {
            window.removeEventListener('resize', listener);
        };
    }, []);
    return windowSize;
};
exports.useWindowSize = useWindowSize;
