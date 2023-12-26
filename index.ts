import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import config from './core/config';
import * as http from 'http';
import * as dotenv from 'dotenv';
dotenv.config();
import { ApiError, SocketIO } from './core';
import connectDB from './core/db';
import { auth, requiresAuth } from 'express-openid-connect';

import { AuthRouter } from './src/auth/auth.routes';
import { CategoryRouter } from './src/category/category.routes';
import { RestaurantRouter } from './src/restaurant/restaurant.routes';
import { MenuRouter } from './src/menu/menu.routes';

const app = express();
const port = config.PORT as string;
const server = http.createServer(app);
export const io = new SocketIO(server).getIO();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/assets', express.static('assets'));

app.use('/api/auth/', AuthRouter);
app.use('/api/categories', CategoryRouter);
app.use('/api/restaurants', RestaurantRouter);
app.use('/api/menus', MenuRouter);

app.get('/', (req, res) => {
  const isAuthenticated = req.oidc.isAuthenticated();
  const response = isAuthenticated ? req.oidc.user : 'Not logged in';
  res.send(response);
});

app.get('/test', requiresAuth(), (req, res) => {
  res.send('Working');
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ApiError) {
    return res.status(err.httpStatusCode).json({
      message: err.message,
      errors: err.errors,
    });
  }
  return res.status(500).send('Internal Server Error');
});

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
