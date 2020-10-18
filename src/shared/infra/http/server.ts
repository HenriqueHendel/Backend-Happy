import express from 'express';
import Routes from './routes';
import path from 'path';
import ErrorHandler from '@shared/errors/handler';
import 'express-async-errors';

import "../typeorm/connection";

const app = express();

app.use(express.json());
app.use(Routes);
app.use("/upload", express.static(path.join(__dirname, "..","..","..", "upload")));
app.use(ErrorHandler);

app.listen(3333, ()=>{
    console.log("Server started on port 3333");
});