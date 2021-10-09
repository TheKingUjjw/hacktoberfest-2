"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useInterval = (callback, ms) => {
    (0, react_1.useEffect)(() => {
        const iv = setInterval(() => {
            callback();
        }, ms);
        return () => {
            clearInterval(iv);
        };
    }, [ms]);
};
exports.default = useInterval;
