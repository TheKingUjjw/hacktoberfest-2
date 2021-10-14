"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCounter = void 0;
const react_1 = require("react");
const useCounter = (initialValue) => {
    const [count, setCount] = (0, react_1.useState)(initialValue || 0);
    const increment = () => setCount((x) => x + 1);
    const decrement = () => setCount((x) => x - 1);
    const reset = () => setCount(initialValue || 0);
    return {
        count,
        increment,
        decrement,
        reset,
    };
};
exports.useCounter = useCounter;
