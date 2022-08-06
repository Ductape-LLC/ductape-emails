import express from 'express';
import mongoose from 'mongoose';
import * as dotEnv from 'dotenv';
import router from './commons/routesConfig';

const app = express();
const port = 8003;

dotEnv.config();
// Bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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