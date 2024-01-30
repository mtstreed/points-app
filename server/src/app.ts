import express, { Express } from "express";
import userRoutes from './routes/userRoutes.js';
import mongoose, { ConnectOptions } from 'mongoose';

const app: Express = express();
const port = 3030;

app.use(express.json());

// TODO put this in an env variable
const mongoUri = 'mongodb+srv://mtstreed:Fireburning04%24@cluster0.lquwfo0.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {dbName: 'testDb'})
    .then(() => {
        console.log('MongoDB Connected')
    })
    .catch(err => console.log(err));


// **************************** TODO delete. This was just to test that I could link to a specific database within my cluster,
// and also create documents from the code. It worked. If I leave this here it will create a new user every time server starts.
// import User, {IUser} from './models/userModel.js';
// async function createOneUser() {
//   const user: IUser = await User.create({name: 'testUserFromCode2', age: 33}); 
// }
// createOneUser()
// ****************************

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});