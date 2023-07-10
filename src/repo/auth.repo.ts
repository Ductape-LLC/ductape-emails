import JWT from "jsonwebtoken";
import { handleError } from "../errors/errors";

export interface IAuthRepo {
    generateModuleAuthJWT(time: string): Promise<string>;
    validateModuleAuthJWT(jwt: string): Promise<unknown>;
}

export const AuthRepo: IAuthRepo = {
    async generateModuleAuthJWT(time: string): Promise<string> {
        return JWT.sign({ module: process.env.MODULE }, process.env.ENC_KEY as string, {expiresIn: time})
    },
    async validateModuleAuthJWT(jwt: string): Promise<unknown> {
        try {
            return JWT.verify(jwt, process.env.ENC_KEY as string);
        } catch (e) {
            throw handleError(e);
        }
    },
};