"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailerClient = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const mailerClient = () => {
    const transport = nodemailer_1.default.createTransport({
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT),
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
        },
        secure: false,
        tls: {
            rejectUnauthorized: false
        }
    });
    return transport;
};
exports.mailerClient = mailerClient;
/**host: 'smtp.xcelapp.com',
            port: 587,
            auth: {
                user: 'noreply@xcelapp.com',
                pass: process.env.MAIL_PASSWORD
            },
            secure: false, // true for 465, false for other ports
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false
            }  */ 
