"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useRandomString = () => {
    return (Math.random() + 1).toString(36).substring(7) + Date.now();
};
exports.default = useRandomString;
