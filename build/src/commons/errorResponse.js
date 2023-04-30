"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error = (error, meta = {}) => {
    return ({
        status: false,
        meta: meta,
        errors: error
    });
};
exports.default = error;
