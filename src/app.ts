import express, { NextFunction, Response, Request } from 'express';
import mongoose from 'mongoose';
import * as dotEnv from 'dotenv';
import router from './commons/routesConfig';
import cors from 'cors';
import { UserError, sendErrorResponse } from './errors/errors';
import { urlRewrite } from './middleware/url-rewrite';

const app = express();
const port = process.env.PORT || 8003;

dotEnv.config();

app.use(urlRewrite);

// Bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// List Cors
// const allowedOrigins = ['http://localhost:3000', 'https://ductape-hwyp.vercel.app'];

// set cors options
const options: cors.CorsOptions = {
  // origin: allowedOrigins
};

app.use(cors(options));

app.use(router);
mongoose.connect(process.env.DB_HOST as string).catch((e) => {
  console.log(e);
});

mongoose.connection.on('open', () => {
  console.log('Mongoose Connection');
});

app.listen(port, () => {
  console.log(`ductape-emails-api application is running on port ${port}.`);
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  sendErrorResponse(res, err as UserError);
});
