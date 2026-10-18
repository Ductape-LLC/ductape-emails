import nodemailer from 'nodemailer';
import * as dotEnv from 'dotenv';
import GmailTransport from 'gmail-nodemailer-transport';
import { ENV } from '../config/env';
dotEnv.config();

export const mailerClient = async () => {

  const transporter = nodemailer.createTransport(new GmailTransport({
    userId: ENV.MAIL_USER,               // your Gmail address
    auth: {
        clientId: ENV.CLIENT_ID,         
        clientSecret: ENV.CLIENT_SECRET,
        refreshToken: ENV.REFRESH_TOKEN,
      }
  }));

  return transporter;
};

/**host: 'smtp.xcelapp.com',
            port: 587,
            auth: {
                user: 'noreply@xcelapp.com',
                pass: ENV.MAIL_PASSWORD
            },
            secure: false, 
            tls: {
                
                rejectUnauthorized: false
            }  */
