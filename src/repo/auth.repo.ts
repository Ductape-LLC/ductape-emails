import JWT from "jsonwebtoken";
import { handleError } from "../errors/errors";
import { ENV } from '../config/env';

export interface IAuthRepo {
    generateModuleAuthJWT(time: string): Promise<string>;
    validateModuleAuthJWT(jwt: string): Promise<unknown>;
}

export const AuthRepo: IAuthRepo = {
    async generateModuleAuthJWT(time: string): Promise<string> {
        return JWT.sign({ module: ENV.MODULE }, ENV.ENC_KEY as string, {expiresIn: time})
    },
    async validateModuleAuthJWT(jwt: string): Promise<unknown> {
        try {
            return JWT.verify(jwt, ENV.ENC_KEY as string);
        } catch (e) {
            throw handleError(e);
        }
    },
};