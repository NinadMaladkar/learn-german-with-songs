import mongoose from 'mongoose';
import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { config } from 'dotenv';

const app = express();
config();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('hello');
});

const port = process.env.PORT || 5000;

console.log(process.env.MONGO_URI);

if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log(`Successfully connected to mongoDB! `);

      app.listen(port, () => {
        console.log('Listening on port - ', port);
      });
    })
    .catch((err) => {
      console.error(`Error occurred - ${err}`);
    });
} else {
  console.error(`No Database provided!`);
}
