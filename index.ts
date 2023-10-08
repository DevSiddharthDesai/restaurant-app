import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import config from './core/config';
import * as http from 'http';
import * as dotenv from 'dotenv';
dotenv.config();
import { ApiError, SocketIO } from './core';
import connectDB from './core/db';

import { AuthRouter } from './src/auth/auth.routes';
import { CategoryRouter } from './src/category/category.routes';

const app = express();
const port = config.PORT as string;
const server = http.createServer(app);
export const io = new SocketIO(server).getIO();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth/', AuthRouter);
app.use('/api/categories', CategoryRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Serversss');
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ApiError) {
    return res.status(err.httpStatusCode).send(err.message);
  }
  return res.status(500).send('Internal Server Error');
});

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
