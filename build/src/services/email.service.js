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
Object.defineProperty(exports, "__esModule", { value: true });
const email_repo_1 = require("../repo/email.repo");
class EmailsService {
    constructor() {
        this.EmailRepo = email_repo_1.EmailsRepo;
    }
    accountConfirmation(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.EmailRepo.createConfirmationEmail(payload);
        });
    }
    accountForgot(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.EmailRepo.createForgotEmail(payload);
        });
    }
    accountOTP(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.EmailRepo.createOTPEmail(payload);
        });
    }
}
exports.default = EmailsService;
