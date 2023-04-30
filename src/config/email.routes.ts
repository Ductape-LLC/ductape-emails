import { NextFunction, Request, response, Response, Router } from "express";
import EmailService from "../services/email.service";
import SUCCESS from "../commons/successResponse";
import ERROR from "../commons/errorResponse";
import EmailSchema from "../validators/email.validator.create";
import ForgotSchema from "../validators/email.validator.forgot";
import OTPSchema from "../validators/email.validator.otp"
import { extractError } from "../utils/email.utils.string";
import { genericErrors } from "../types/email.type";
import { validateModuleRequest } from "../middleware/emails.middleware.modules";

const router = Router();
const emailService = new EmailService();

router.post(
  "/confirmation",
  // @ts-ignore
  validateModuleRequest,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;

      await EmailSchema.validateAsync(body);

      const result = await emailService.accountConfirmation(body);
      return res.status(201).json(SUCCESS(result));
    } catch (e) {
      if(process.env.NODE_ENV !== "production") console.log("ERROR-CONFIRM-EMAIL", e);
      const error = extractError(e as unknown as genericErrors);
      return res.status(500).json(ERROR(error));
    }
  }
);

router.post(
  "/forgot",
  // @ts-ignore
  validateModuleRequest,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;

      await ForgotSchema.validateAsync(body);

      if(process.env.NODE_ENV !== "production") console.log("Zuper!")
      const result = await emailService.accountForgot(body);
      return res.status(201).json(SUCCESS(result));
    } catch (e) {
      if(process.env.NODE_ENV !== "production") console.log("ERROR-FORGOT-EMAIL", e);
      const error = extractError(e as unknown as genericErrors);
      return res.status(500).json(ERROR(error));
    }
  }
);

router.post(
  "/otp",
  // @ts-ignore
  validateModuleRequest,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;

      await OTPSchema.validateAsync(body);
      
      const result = await emailService.accountOTP(body);
      return res.status(201).json(SUCCESS(result));
    } catch (e) {
      if(process.env.NODE_ENV !== "production") console.log("ERROR-OTP-EMAIL", e);
      const error = extractError(e as unknown as genericErrors);
      return res.status(500).json(ERROR(error));
    }
  }
)

export default router;