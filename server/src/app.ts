// *** IMPORTANT NOTE ***
// It was quite difficult to find the correct terminal command to actually run this:
// typescript express server in node: "npx ts-node --ems src/app.ts"
// "npx": Run locally-installed binaries
// "ts-node": Run .ts files in node
// "--esm": *Important* Enable ts-node support for ES Modules (import/export syntax) in node
// <filepath>

import express, {Express} from "express";
import userRoutes from './routes/userRoutes.js';

const app: Express = express();
const port = 3030;

app.use(express.json());

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});