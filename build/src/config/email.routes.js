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
const express_1 = require("express");
const email_service_1 = __importDefault(require("../services/email.service"));
const successResponse_1 = __importDefault(require("../commons/successResponse"));
const errorResponse_1 = __importDefault(require("../commons/errorResponse"));
const email_validator_create_1 = __importDefault(require("../validators/email.validator.create"));
const email_validator_forgot_1 = __importDefault(require("../validators/email.validator.forgot"));
const email_validator_otp_1 = __importDefault(require("../validators/email.validator.otp"));
const email_utils_string_1 = require("../utils/email.utils.string");
const emails_middleware_modules_1 = require("../middleware/emails.middleware.modules");
const router = (0, express_1.Router)();
const emailService = new email_service_1.default();
router.post("/confirmation", 
// @ts-ignore
emails_middleware_modules_1.validateModuleRequest, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const { error } = yield email_validator_create_1.default.validateAsync(body);
        if (error)
            return res.status(400).json((0, errorResponse_1.default)(error));
        const result = yield emailService.accountConfirmation(body);
        return res.status(201).json((0, successResponse_1.default)(result));
    }
    catch (e) {
        if (process.env.NODE_ENV !== "production")
            console.log("ERROR-CONFIRM-EMAIL", e);
        const error = (0, email_utils_string_1.extractError)(e);
        return res.status(500).json((0, errorResponse_1.default)(error));
    }
}));
router.post("/forgot", 
// @ts-ignore
emails_middleware_modules_1.validateModuleRequest, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const { error } = yield email_validator_forgot_1.default.validateAsync(body);
        if (error)
            return res.status(400).json((0, errorResponse_1.default)(error));
        if (process.env.NODE_ENV !== "production")
            console.log("Zuper!");
        const result = yield emailService.accountForgot(body);
        return res.status(201).json((0, successResponse_1.default)(result));
    }
    catch (e) {
        if (process.env.NODE_ENV !== "production")
            console.log("ERROR-FORGOT-EMAIL", e);
        const error = (0, email_utils_string_1.extractError)(e);
        return res.status(500).json((0, errorResponse_1.default)(error));
    }
}));
router.post("/otp", 
// @ts-ignore
emails_middleware_modules_1.validateModuleRequest, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const { error } = yield email_validator_otp_1.default.validateAsync(body);
        if (error)
            return res.status(400).json((0, errorResponse_1.default)(error));
        const result = yield emailService.accountOTP(body);
        return res.status(201).json((0, successResponse_1.default)(result));
    }
    catch (e) {
        if (process.env.NODE_ENV !== "production")
            console.log("ERROR-OTP-EMAIL", e);
        const error = (0, email_utils_string_1.extractError)(e);
        return res.status(500).json((0, errorResponse_1.default)(error));
    }
}));
exports.default = router;
