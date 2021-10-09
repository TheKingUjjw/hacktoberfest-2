"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFlatMap = void 0;
function useFlatMap(array, keyValue) {
    return array.map((item) => item[keyValue]).flat();
}
exports.useFlatMap = useFlatMap;
