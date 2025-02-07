import express from "express";
import handlebars from "express-handlebars"
import router from "./router.js";
import mongoose from "mongoose";
import cors from "cors";

try {
    await mongoose.connect('mongodb://localhost:27017', {dbName: 'movie-magic'});
    console.log('DB connected!');
} catch (error) {
    console.log(error);
}

const app = express();
const port = 3000;

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use('/static', express.static('src/public'));
app.use(express.urlencoded({extended: false}));

app.use(cors());
app.use(router);

app.listen(port, () => console.log(`The app is running on port ${port}...`))