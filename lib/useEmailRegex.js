"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEmailRegex = void 0;
const useEmailRegex = (regex) => {
    const regexEmail = regex !== null && regex !== void 0 ? regex : /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const isEmail = (email) => {
        const emailBool = email.match(regexEmail);
        return emailBool ? true : false;
    };
    return {
        isEmail,
    };
};
exports.useEmailRegex = useEmailRegex;
