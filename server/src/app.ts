import express, { Express } from "express";
import userRoutes from './routes/userRoutes.js';
import mongoose, { ConnectOptions } from 'mongoose';
// import cors from 'cors';

const app: Express = express();
const port = 3030;

// app.use(cors());
app.use(express.json());

// TODO put this in an env variable
const mongoUri = 'mongodb+srv://mtstreed:Fireburning04%24@cluster0.lquwfo0.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {dbName: 'testDb'})
    .then(() => {
        console.log('MongoDB Connected')
    })
    .catch(err => console.log(err));

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});