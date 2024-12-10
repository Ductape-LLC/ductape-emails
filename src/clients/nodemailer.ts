import nodemailer from "nodemailer";
import * as dotEnv from 'dotenv';
dotEnv.config();


export const mailerClient = () => {
    const gmailOptions = {
        service: process.env.MAIL_SERVICE,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
        },
    };

    const transport = nodemailer.createTransport(gmailOptions);

    return transport;
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