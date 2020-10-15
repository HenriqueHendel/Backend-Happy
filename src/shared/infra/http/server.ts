import express from 'express';
import Routes from './routes';

import "../typeorm/connection";

const app = express();

app.use(express.json());
app.use(Routes);

app.listen(3333, ()=>{
    console.log("Server started on port 3333");
});