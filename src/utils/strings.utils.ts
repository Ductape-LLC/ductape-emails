import dotenv from "dotenv";
dotenv.config();

export const SERVER_BASE_URL = process.env.NODE_ENV === "production" ? 'https://api.ductape.app' : 'https://staging-api.ductape.app';

export const removeRegEx = (exp: RegExp, str: string): string => {
    return str.replace(exp,'') ;
}
