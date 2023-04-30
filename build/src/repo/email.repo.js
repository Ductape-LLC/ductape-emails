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
exports.EmailsRepo = void 0;
const nodemailer_1 = require("../clients/nodemailer");
const nodemailer_express_handlebars_1 = __importDefault(require("nodemailer-express-handlebars"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
exports.EmailsRepo = {
    createConfirmationEmail(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const viewPath = path_1.default.resolve(__dirname, '../templates/views/');
                const partialsPath = path_1.default.resolve(__dirname, '../templates/partials');
                const { firstname, lastname, email, public_key, token } = payload;
                const transporter = (0, nodemailer_1.mailerClient)();
                transporter.use('compile', (0, nodemailer_express_handlebars_1.default)({
                    viewEngine: {
                        extName: '.handlebars',
                        // partialsDir: viewPath,
                        layoutsDir: viewPath,
                        // @ts-ignore
                        defaultLayout: false,
                        partialsDir: partialsPath,
                        express: express_1.default
                    },
                    viewPath: viewPath,
                    extName: '.handlebars',
                }));
                const mailOptions = {
                    from: process.env.MAIL_USER,
                    to: email,
                    subject: 'Confirm your Ductape.io account',
                    // @ts-ignore
                    template: 'confirm',
                    context: { firstname, lastname, token },
                    /**attachments: [
                      { filename: 'abc.jpg', path: path.resolve(__dirname, './image/abc.jpg')}
                    ]*/
                };
                const success = yield transporter.sendMail(mailOptions);
                return success;
            }
            catch (e) {
                if (process.env.NODE_ENV !== "production")
                    console.log(e);
                throw e;
            }
        });
    },
    createForgotEmail(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const viewPath = path_1.default.resolve(__dirname, '../templates/views/');
                const partialsPath = path_1.default.resolve(__dirname, '../templates/partials');
                const { firstname, lastname, email, public_key, token } = payload;
                const transporter = (0, nodemailer_1.mailerClient)();
                transporter.use('compile', (0, nodemailer_express_handlebars_1.default)({
                    viewEngine: {
                        extName: '.handlebars',
                        // partialsDir: viewPath,
                        layoutsDir: viewPath,
                        // @ts-ignore
                        defaultLayout: false,
                        partialsDir: partialsPath,
                        express: express_1.default
                    },
                    viewPath: viewPath,
                    extName: '.handlebars',
                }));
                const mailOptions = {
                    from: process.env.MAIL_USER,
                    to: email,
                    subject: 'Ductape.io Password Reset',
                    // @ts-ignore
                    template: 'forgot',
                    context: { firstname, lastname, token },
                    /**attachments: [
                      { filename: 'abc.jpg', path: path.resolve(__dirname, './image/abc.jpg')}
                    ]*/
                };
                // if(process.env.NODE_ENV !== "production") console.log(mailOptions);
                const success = yield transporter.sendMail(mailOptions);
                // if(process.env.NODE_ENV !== "production") console.log(success);
                return success;
            }
            catch (e) {
                if (process.env.NODE_ENV !== "production")
                    console.log(e);
                throw e;
            }
        });
    },
    createOTPEmail(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const viewPath = path_1.default.resolve(__dirname, '../templates/views/');
                const partialsPath = path_1.default.resolve(__dirname, '../templates/partials');
                const { firstname, lastname, email, public_key, token } = payload;
                const transporter = (0, nodemailer_1.mailerClient)();
                transporter.use('compile', (0, nodemailer_express_handlebars_1.default)({
                    viewEngine: {
                        extName: '.handlebars',
                        // partialsDir: viewPath,
                        layoutsDir: viewPath,
                        // @ts-ignore
                        defaultLayout: false,
                        partialsDir: partialsPath,
                        express: express_1.default
                    },
                    viewPath: viewPath,
                    extName: '.handlebars',
                }));
                const mailOptions = {
                    from: process.env.MAIL_USER,
                    to: email,
                    subject: 'Ductape.io Login OTP',
                    // @ts-ignore
                    template: 'otp',
                    context: { firstname, lastname, token },
                    /**attachments: [
                      { filename: 'abc.jpg', path: path.resolve(__dirname, './image/abc.jpg')}
                    ]*/
                };
                const success = yield transporter.sendMail(mailOptions);
                return success;
            }
            catch (e) {
                if (process.env.NODE_ENV !== "production")
                    console.log(e);
                throw e;
            }
        });
    },
    fetch(get) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Function not implemented.");
        });
    }
};
