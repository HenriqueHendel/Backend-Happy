import express from 'express';
import Routes from './routes';
import path from 'path';

import "../typeorm/connection";

const app = express();

app.use(express.json());
app.use(Routes);
app.use("/upload", express.static(path.join(__dirname, "..","..","..", "upload")));

app.listen(3333, ()=>{
    console.log("Server started on port 3333");
});