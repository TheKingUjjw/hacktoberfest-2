"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useEmailRegex = (email) => {
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const emailBool = email.match(regexEmail)
    return emailBool ? true : false
}

exports.default = useEmailRegex;
