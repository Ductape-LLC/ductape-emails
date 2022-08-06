import nodemailer, { Transport } from "nodemailer";

export const mailerClient = () => {
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT as string),
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
            
        },
        secure: false,
        tls: {
            rejectUnauthorized: false
        }
    } as unknown as Transport<unknown>);

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