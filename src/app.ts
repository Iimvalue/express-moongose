import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import dealerRoutes from './routes/dealer.routes';
import carMakeRoutes from './routes/carMake.routes';
import carRoutes from './routes/car.routes';

import logger from './utils/logger';
import { dev, port } from './utils/helpers';
import { OK, INTERNAL_SERVER_ERROR } from './utils/http-status';
import { connectDB } from './config/database';

// Load environment variables
dotenv.config();
connectDB()
const app: Express = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('tiny', {
  stream: {
    write: (message) => logger.info(message.trim())
  }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/dealers', dealerRoutes); 
app.use('/api/cars-make', carMakeRoutes); 
app.use('/api/cars/:dealerId/:carmakeId', carRoutes); // Begin with localhost:3000/api/lists/:listId/items , and more depend on ./routes/item.routes.ts, :listId is dynamic route


// Main route http://localhost:3000/
app.get('/', (req: Request, res: Response) => {  
  res
    .status(OK)
    .json({ message: 'Welcome to CRUD API App' }); // return json as {message:"List & Items API - Welcome!"} 
});

// Basic error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error('Error:', err.message);
  res
    .status(INTERNAL_SERVER_ERROR)
    .json({
      success: false,
      message: 'Something went wrong!',
      error: dev ? err.message : undefined
    });
});

// Start server using port 3000
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
