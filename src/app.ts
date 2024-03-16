import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import emailServiceRoutes from './routes/emailService.routes';

const app = express();

app.use(cors({
  origin: '*',
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', emailServiceRoutes);

export default app;
