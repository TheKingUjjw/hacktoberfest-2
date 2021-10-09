"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useLogic = () => {
    const isTrue = (data) => {
        return Boolean(data);
    };
    const isFalse = (data) => {
        return Boolean(data);
    };
    const isNull = (data) => {
        return data === null;
    };
    const isUndefined = (data) => {
        return data === undefined;
    };
    const isZero = (data) => {
        if (typeof (data) === 'number')
            return data === 0;
        else if (typeof (data) === 'string')
            return data === '0';
    };
    const isEven = (data) => {
        return data % 2 === 0;
    };
    const isOdd = (data) => {
        return data % 2 !== 0;
    };
    return {
        isTrue,
        isFalse,
        isNull,
        isUndefined,
        isZero,
        isEven,
        isOdd
    };
};
exports.default = useLogic;
