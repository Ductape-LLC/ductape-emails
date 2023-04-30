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
exports.createEmails = void 0;
const nodemailer_1 = require("../clients/nodemailer");
const createEmails = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const create = yield (0, nodemailer_1.mailerClient)().sendMail(payload);
        if (create) {
            return true;
        }
        throw "Email sending failed";
    }
    catch (e) {
        throw e;
    }
});
exports.createEmails = createEmails;
