"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const schema = joi_1.default.object({
    firstname: joi_1.default.string().alphanum().min(2).max(50).required(),
    lastname: joi_1.default.string().alphanum().min(2).max(50).required(),
    email: joi_1.default.string().email({ minDomainSegments: 2 }).required(),
    confirm_id: joi_1.default.string().min(24).max(24).required(),
    token: joi_1.default.string().min(6).max(6).required()
});
exports.default = schema;
