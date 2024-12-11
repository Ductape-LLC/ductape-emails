import { NextFunction, Request, Response } from 'express';

export const urlRewrite = async (req: Request, _: Response, next: NextFunction) => {
  if (req.url.startsWith('/emails') && !req.url.startsWith('/emails/v1')) {
    req.url = req.url.replace('/emails', '');
  }
  next();
};
