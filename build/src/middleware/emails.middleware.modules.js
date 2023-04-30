"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateModuleRequest = void 0;
const auth_repo_1 = require("../repo/auth.repo");
const email_utils_string_1 = require("../utils/email.utils.string");
const errorResponse_1 = __importDefault(require("../commons/errorResponse"));
const validateModuleRequest = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const auth = req.headers["x-access-token"] || req.headers["authorization"];
        if (!auth)
            return res.status(401).json((0, errorResponse_1.default)("Auth token is not supplied"));
        const token = (0, email_utils_string_1.stripAuth)(auth);
        const valid = yield auth_repo_1.AuthRepo.validateModuleAuthJWT(token);
        if (valid) {
            // @ts-ignore
            req.decoded;
            next();
        }
    }
    catch (e) {
        console.log(e);
        return res.status(401).json((0, errorResponse_1.default)(e));
    }
});
exports.validateModuleRequest = validateModuleRequest;
