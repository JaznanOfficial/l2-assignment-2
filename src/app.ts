import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { UserRoute } from './app/modules/users/users.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api/users', UserRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('welcome to assignment 2 server');
});

export default app;
