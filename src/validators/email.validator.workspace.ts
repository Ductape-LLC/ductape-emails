import joi from 'joi';
import { workspaceEmailRequests } from '../types/email.type';

const schema = joi.object<workspaceEmailRequests>({
    firstname: joi.string().min(2).max(50).optional(),
    lastname: joi.string().min(2).max(50).optional(),
    owner_email: joi.string().email({minDomainSegments: 2}).optional(),
    email: joi.string().email({minDomainSegments: 2}).required(),
    year: joi.string().min(4).max(4).required(),
    workspace_name: joi.string().optional(),
    owner: joi.string().min(2).max(50).required(),
    invitation_link: joi.string().optional(),
});

export default schema