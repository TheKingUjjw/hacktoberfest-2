"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breakpoints = exports.useMediaQuery = exports.useLogic = void 0;
const useLogic_1 = require("./useLogic");
exports.useLogic = useLogic_1.default;
const useMediaQuery_1 = require("./useMediaQuery");
Object.defineProperty(exports, "useMediaQuery", { enumerable: true, get: function () { return useMediaQuery_1.useMediaQuery; } });
Object.defineProperty(exports, "breakpoints", { enumerable: true, get: function () { return useMediaQuery_1.breakpoints; } });
