"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMediaQuery = exports.breakpoints = void 0;
const react_1 = require("react");
exports.breakpoints = {
    up: {
        mobile: '(min-width: 0px)',
        tablet: '(min-width: 768px)',
        desktop: '(min-width: 1024x)',
    },
    down: {
        mobile: '(max-width: 0px)',
        tablet: '(max-width: 768px)',
        desktop: '(max-width: 1024x)',
    },
};
const useMediaQuery = (query) => {
    const [matches, setMatches] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [matches, query]);
    return matches;
};
exports.useMediaQuery = useMediaQuery;
