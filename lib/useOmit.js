"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOmit = void 0;
const useOmit = (obj, keys) => keys.reduce((acc, key) => {
    const { [key]: keyAlias, ...rest } = acc;
    return rest;
}, obj);
exports.useOmit = useOmit;
