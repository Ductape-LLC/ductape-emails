import { mailerClient } from '../clients/nodemailer';
import { confirmationEmailRequests, forgotEmailRequests, otpEmailRequests, workspaceEmailRequests } from '../types/email.type';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';
import express from 'express';
import { MailOptions } from 'nodemailer/lib/json-transport';
import { handleError } from '../errors/errors';
import * as dotEnv from 'dotenv';
dotEnv.config();

const year = new Date().getFullYear();

export interface IEmailsRepo {
  createConfirmationEmail(payload: confirmationEmailRequests): Promise<unknown>;
  createForgotEmail(payload: forgotEmailRequests): Promise<unknown>;
  fetch(get: unknown): Promise<Array<confirmationEmailRequests>>;
  createOTPEmail(payload: otpEmailRequests): Promise<unknown>;
  createWorkspaceInviteEmail(payload: any): Promise<unknown>;
  createWorkspaceNewMemberEmail(payload: any): Promise<unknown>;
}

export const EmailsRepo: IEmailsRepo = {
  async createConfirmationEmail(payload: confirmationEmailRequests): Promise<unknown> {
    try {
      const viewPath = path.resolve(__dirname, '../templates/views/');
      const partialsPath = path.resolve(__dirname, '../templates/partials');

      const { firstname, lastname, email, public_key, token } = payload;

      const transporter = mailerClient();

      transporter.use(
        'compile',
        hbs({
          viewEngine: {
            extName: '.handlebars',
            // partialsDir: viewPath,
            layoutsDir: viewPath,
            // @ts-ignore
            defaultLayout: false,
            partialsDir: partialsPath,
            express,
          },
          viewPath: viewPath,
          extName: '.handlebars',
        }),
      );

      const mailOptions: MailOptions = {
        from: process.env.MAIL_USER,
        to: email,
        subject: 'Welcome to Ductape',
        // @ts-ignore
        template: 'welcome',
        context: { firstname, lastname, token, year },
        /**attachments: [
                  { filename: 'abc.jpg', path: path.resolve(__dirname, './image/abc.jpg')}
                ]*/
      };

      const success = await transporter.sendMail(mailOptions);
      return success;
    } catch (e) {
      if (process.env.NODE_ENV !== 'production') console.log(e);
      throw handleError(e);
    }
  },
  async createForgotEmail(payload: forgotEmailRequests): Promise<unknown> {
    try {
      const viewPath = path.resolve(__dirname, '../templates/views/');
      const partialsPath = path.resolve(__dirname, '../templates/partials');

      const { firstname, lastname, email, token } = payload;

      const transporter = mailerClient();

      transporter.use(
        'compile',
        hbs({
          viewEngine: {
            extName: '.handlebars',
            // partialsDir: viewPath,
            layoutsDir: viewPath,
            // @ts-ignore
            defaultLayout: false,
            partialsDir: partialsPath,
            express,
          },
          viewPath: viewPath,
          extName: '.handlebars',
        }),
      );

      const mailOptions: MailOptions = {
        from: process.env.MAIL_USER,
        to: email,
        subject: 'Ductape.io Password Reset',
        // @ts-ignore
        template: 'forgot',
        context: { firstname, lastname, token, year },
        /**attachments: [
                  { filename: 'abc.jpg', path: path.resolve(__dirname, './image/abc.jpg')}
                ]*/
      };

      // if(process.env.NODE_ENV !== "production") console.log(mailOptions);
      const success = await transporter.sendMail(mailOptions);
      // if(process.env.NODE_ENV !== "production") console.log(success);
      return success;
    } catch (e) {
      if (process.env.NODE_ENV !== 'production') console.log(e);
      throw handleError(e);
    }
  },
  async createOTPEmail(payload: otpEmailRequests): Promise<unknown> {
    try {
      const viewPath = path.resolve(__dirname, '../templates/views/');
      const partialsPath = path.resolve(__dirname, '../templates/partials');

      const { firstname, lastname, email, public_key, token } = payload;

      const transporter = mailerClient();

      transporter.use(
        'compile',
        hbs({
          viewEngine: {
            extName: '.handlebars',
            // partialsDir: viewPath,
            layoutsDir: viewPath,
            // @ts-ignore
            defaultLayout: false,
            partialsDir: partialsPath,
            express,
          },
          viewPath: viewPath,
          extName: '.handlebars',
        }),
      );

      const mailOptions: MailOptions = {
        from: 'validation@ductape.app',
        to: email,
        subject: 'Ductape.io Login OTP',
        // @ts-ignore
        template: 'otp',
        context: { firstname, lastname, token, year },
        /**attachments: [
                  { filename: 'abc.jpg', path: path.resolve(__dirname, './image/abc.jpg')}
                ]*/
      };

      const success = await transporter.sendMail(mailOptions);
      return success;
    } catch (e) {
      if (process.env.NODE_ENV !== 'production') console.log(e);
      throw handleError(e);
    }
  },
  async createWorkspaceInviteEmail(payload: workspaceEmailRequests): Promise<unknown> {
    try {
      const viewPath = path.resolve(__dirname, '../templates/views/');
      const partialsPath = path.resolve(__dirname, '../templates/partials');

      const { owner, workspace_name, invitation_link, year, email } = payload;

      const redirect_url = process.env.INVITE_REDIRECT_URL

      const transporter = mailerClient();

      transporter.use(
        'compile',
        hbs({
          viewEngine: {
            extName: '.handlebars',
            // partialsDir: viewPath,
            layoutsDir: viewPath,
            // @ts-ignore
            defaultLayout: false,
            partialsDir: partialsPath,
            express,
          },
          viewPath: viewPath,
          extName: '.handlebars',
        }),
      );

      const mailOptions: MailOptions = {
        from: process.env.MAIL_USER,
        to: email,
        subject: 'Ductape Workspace Invite',
        // @ts-ignore
        template: 'workspace-invite',
        context: { owner, workspace_name, invitation_link, year, email, redirect_url  },
        /**attachments: [
                  { filename: 'abc.jpg', path: path.resolve(__dirname, './image/abc.jpg')}
                ]*/
      };

      // if(process.env.NODE_ENV !== "production") console.log(mailOptions);
      const success = await transporter.sendMail(mailOptions);
      // if(process.env.NODE_ENV !== "production") console.log(success);
      return success;
    } catch (e) {
      if (process.env.NODE_ENV !== 'production') console.log(e);
      throw handleError(e);
    }
  },

  async createWorkspaceNewMemberEmail(payload: workspaceEmailRequests): Promise<unknown> {
    try {
      const viewPath = path.resolve(__dirname, '../templates/views/');
      const partialsPath = path.resolve(__dirname, '../templates/partials');

      const { firstname, lastname, email, owner, year, owner_email } = payload;

      const transporter = mailerClient();

      transporter.use(
        'compile',
        hbs({
          viewEngine: {
            extName: '.handlebars',
            // partialsDir: viewPath,
            layoutsDir: viewPath,
            // @ts-ignore
            defaultLayout: false,
            partialsDir: partialsPath,
            express,
          },
          viewPath: viewPath,
          extName: '.handlebars',
        }),
      );

      const mailOptions: MailOptions = {
        from: process.env.MAIL_USER,
        to: owner_email,
        subject: 'Ductape New Workspace Member',
        // @ts-ignore
        template: 'workspace-new-member',
        context: { firstname, lastname, email, owner, year, },
        /**attachments: [
                  { filename: 'abc.jpg', path: path.resolve(__dirname, './image/abc.jpg')}
                ]*/
      };

      // if(process.env.NODE_ENV !== "production") console.log(mailOptions);
      const success = await transporter.sendMail(mailOptions);
      // if(process.env.NODE_ENV !== "production") console.log(success);
      return success;
    } catch (e) {
      if (process.env.NODE_ENV !== 'production') console.log(e);
      throw handleError(e);
    }
  },
  async fetch(get: any): Promise<Array<confirmationEmailRequests>> {
    throw new Error('Function not implemented.');
  },
};
