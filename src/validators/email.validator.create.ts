import joi from 'joi';
import { confirmationEmailRequests } from '../types/email.type';

const schema = joi.object<confirmationEmailRequests>({
    // Display-only in the email body: allow hyphens, spaces, unicode (e.g. GitHub logins like "fikayo-sanni").
    firstname: joi.string().trim().min(1).max(50).required(),
    // OAuth signups (GitHub) often have no last name, so an empty string is valid.
    lastname: joi.string().trim().allow('').max(50).optional(),
    email: joi.string().email({minDomainSegments: 2}).required(),
    confirm_id: joi.string().min(24).max(24).required(),
    token: joi.string().min(6).max(6).required()
});

export default schema