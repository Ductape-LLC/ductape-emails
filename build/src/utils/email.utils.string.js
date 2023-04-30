"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripAuth = exports.removeRegEx = exports.extractError = exports.sha256 = exports.capitalize = void 0;
const sha256_1 = __importDefault(require("crypto-js/sha256"));
const capitalize = (s) => {
    return `${s[0].toUpperCase()}${s.slice(1)}`;
};
exports.capitalize = capitalize;
const sha256 = (s) => {
    return ((0, sha256_1.default)(s)).toString();
};
exports.sha256 = sha256;
const extractError = (e) => {
    const { code, _original, details } = e;
    console.log("ORIGINAL", _original);
    if (code === 11000)
        return "Email in use";
    if (_original)
        return (0, exports.removeRegEx)(/"/g, details[0].message);
    return e.toString();
};
exports.extractError = extractError;
const removeRegEx = (exp, str) => {
    return str.replace(exp, '');
};
exports.removeRegEx = removeRegEx;
const stripAuth = (token) => {
    if (token.startsWith("Bearer "))
        token = token.slice(7, token.length);
    return token;
};
exports.stripAuth = stripAuth;
