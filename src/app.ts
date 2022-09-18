import express from 'express';
import mongoose from 'mongoose';
import * as dotEnv from 'dotenv';
import router from './commons/routesConfig';
import cors from 'cors';

const app = express();
const port = 8003;

dotEnv.config();
// Bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// List Cors
const allowedOrigins = ['http://localhost:3000','*'];

// set cors options
const options: cors.CorsOptions = {
  origin: allowedOrigins
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