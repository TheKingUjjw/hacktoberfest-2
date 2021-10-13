"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRandomToken = void 0;
const useRandomToken = (len, special) => {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (special) {
        chars =
            '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    var passwordLength = len || 16;
    var password = '';
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password;
};
exports.useRandomToken = useRandomToken;
