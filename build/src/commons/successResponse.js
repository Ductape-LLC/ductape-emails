"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const success = (data, meta = {}) => {
    return ({
        status: true,
        meta: meta,
        data: data
    });
};
exports.default = success;
