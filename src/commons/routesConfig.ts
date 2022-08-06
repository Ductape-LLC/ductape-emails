import { Router } from "express";
import emailsApi from "../config/email.routes";

const router = Router();
router.use("/emails/v1", emailsApi);
export default router;