import { Options } from "nodemailer/lib/dkim";
import Mail from "nodemailer/lib/mailer";
import { mailerClient } from "../clients/nodemailer";
import { confirmationEmailRequests } from "../types/email.type";
import { sha256 } from "./email.utils.string";

export const createEmails = async(payload: Mail.Options): Promise<boolean> =>{
    try{
        

        const create = await mailerClient().sendMail(payload)
        if(create){
            return true
        }
        throw "Email sending failed";
    } catch(e) {
        throw e;
    }
}