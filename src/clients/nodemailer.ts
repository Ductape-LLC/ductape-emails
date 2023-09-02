import nodemailer, { Transport } from "nodemailer";
import mailjetTransport from "nodemailer-mailjet-transport";

export const mailerClient = () => {

    const mailjetOptions = {
        service: 'Mailjet',
        auth: {
          api_key: "e8fa0018dcf81e45bb3a10548e08752c",
          api_secret: "436acda29c452d6ef4426d9d8102538d",
        },
      };

    const transport = nodemailer.createTransport(mailjetTransport(mailjetOptions));

    return transport
}

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