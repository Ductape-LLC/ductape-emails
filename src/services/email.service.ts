import { EmailsRepo, IEmailsRepo } from "../repo/email.repo";
import { confirmationEmailRequests, forgotEmailRequests } from "../types/email.type";

export interface IEmailsService {
    accountConfirmation(payload: confirmationEmailRequests): Promise<unknown>;
}

export default class EmailsService implements IEmailsService {
    EmailRepo: IEmailsRepo;

    constructor() {
        this.EmailRepo = EmailsRepo;
    }

    async accountConfirmation(payload: confirmationEmailRequests): Promise<unknown>{
        return await this.EmailRepo.createConfirmationEmail(payload);
    }

    async accountForgot(payload: forgotEmailRequests): Promise<unknown> {
        return await this.EmailRepo.createForgotEmail(payload);
    }
}