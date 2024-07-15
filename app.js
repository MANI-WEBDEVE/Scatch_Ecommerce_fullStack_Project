import express from 'express';
import cookieParser from 'cookie-parser';
import path,{ dirname } from 'path';
import { fileURLToPath } from 'url';
 

const app = express();

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


app.get('/', (req, res) => {
    res.render('index');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});