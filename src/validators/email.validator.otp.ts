import joi from 'joi';
import { otpEmailRequests } from '../types/email.type';

const schema = joi.object<otpEmailRequests>({
    firstname: joi.string().alphanum().min(2).max(50).required(),
    lastname: joi.string().alphanum().min(2).max(50).required(),
    email: joi.string().email({minDomainSegments: 2}).required(),
    otp_id: joi.string().min(24).max(24).required(),
    token: joi.string().min(6).max(6).required(),
    type: joi.string().required(),
});

export default schema