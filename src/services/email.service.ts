import { OTP_TYPES } from '../types/otp.type';
import { EmailsRepo, IEmailsRepo } from '../repo/email.repo';
import {
  confirmationEmailRequests,
  forgotEmailRequests,
  otpEmailRequests,
  workspaceEmailRequests,
} from '../types/email.type';

export interface IEmailsService {
  accountConfirmation(payload: confirmationEmailRequests): Promise<unknown>;
}

export default class EmailsService implements IEmailsService {
  EmailRepo: IEmailsRepo;

  constructor() {
    this.EmailRepo = EmailsRepo;
  }

  async accountConfirmation(payload: confirmationEmailRequests): Promise<unknown> {
    return await this.EmailRepo.createConfirmationEmail(payload);
  }

  async welcomeEmail(payload: confirmationEmailRequests): Promise<unknown> {
    return await this.EmailRepo.createWelcomeEmail(payload);
  }

  async accountForgot(payload: forgotEmailRequests): Promise<unknown> {
    return await this.EmailRepo.createForgotEmail(payload);
  }

  async accountOTP(payload: otpEmailRequests): Promise<unknown> {
    const { type } = payload;
    if (type === OTP_TYPES.LOGIN) {
      return await this.EmailRepo.createOTPEmail(payload);
    } else if (type === OTP_TYPES.TWO_FACTOR_AUTHENTICATION) {
      return await this.EmailRepo.create2FAEmail(payload);
    }
  }

  async workspaceInvite(payload: workspaceEmailRequests): Promise<unknown> {
    return await this.EmailRepo.createWorkspaceInviteEmail(payload);
  }

  async workspaceNewMember(payload: workspaceEmailRequests): Promise<unknown> {
    return await this.EmailRepo.createWorkspaceNewMemberEmail(payload);
  }
}
