import nodemailer from 'nodemailer';
import * as dotEnv from 'dotenv';
import GmailTransport from 'gmail-nodemailer-transport';
dotEnv.config();

export const mailerClient = async () => {

  const transporter = nodemailer.createTransport(new GmailTransport({
    userId: process.env.MAIL_USER,               // your Gmail address
    auth: {
        clientId: process.env.CLIENT_ID,         
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      }
  }));

  return transporter;
};

/**host: 'smtp.xcelapp.com',
            port: 587,
            auth: {
                user: 'noreply@xcelapp.com',
                pass: process.env.MAIL_PASSWORD
            },
            secure: false, 
            tls: {
                
                rejectUnauthorized: false
            }  */
