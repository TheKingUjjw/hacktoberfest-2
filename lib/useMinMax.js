"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useMinMax = () => {
    const findMin = (numbers) => {
        let minNumber = numbers[0];
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < minNumber) {
                minNumber = numbers[i];
            }
        }
        return minNumber;
    };
    const findMax = (numbers) => {
        let maxNumber = numbers[0];
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > maxNumber) {
                maxNumber = numbers[i];
            }
        }
        return maxNumber;
    };
    return { findMin, findMax };
};
exports.default = useMinMax;
