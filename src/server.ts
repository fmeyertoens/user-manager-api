import express from 'express';
import mongoose from 'mongoose';
import UserController from './controllers/UserController.js';

const app = express();
const port = 3000;

// Database
mongoose
    .connect(`${process.env.MONGO_URL}${process.env.MONGO_DB}`)
    .then(() => console.log('Connected to database...'))
    .catch(err => console.error(err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.post('/api/users', UserController.create);
app.put('/api/users/:userId', UserController.update);
app.get('/api/users', UserController.retrieve);
app.get('/api/users/:userId', UserController.retrieveOne);
app.delete('/api/users/:userId', UserController.delete);

// Start server
app.listen(port, () => console.log(`Server has started on port ${port}`));
