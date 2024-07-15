import express from 'express';
import cookieParser from 'cookie-parser';
import path,{ dirname } from 'path';
import { fileURLToPath } from 'url';
import { configDotenv } from 'dotenv';
import DBConnection from './config/mongooseConnection.js';
import ownersRouter from './routes/ownersRouter.js'
import productsRouter from './routes/productsRouter.js'
import usersRouter from './routes/usersRouter.js'

const app = express();

//* configuration of dotenv pkg
configDotenv()
//* DataBase Connection function invoked
DBConnection()


//* Middlewere setup
app.use(express.json({limit: '1mb', strict: true}));
app.use(express.urlencoded({extended: true, limit: '20kb'}));
app.use(cookieParser());

app.set("view engine", 'ejs')


//* file location setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//* Static files serve karne ke liye
app.use(express.static(path.join(__dirname,'public')));

//* handles Router?
app.use("/owners", ownersRouter);
app.use("/products", productsRouter);   
app.use("/users", usersRouter);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});