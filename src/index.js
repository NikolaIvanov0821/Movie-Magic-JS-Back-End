import express from "express";
import handlebars from "express-handlebars"
import router from "./router.js";


const app = express();
const port = 3000;

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use('/static', express.static('src/public'));
app.use(express.urlencoded({extended: false}));

app.use(router);

app.listen(port, () => console.log(`The app is running on port ${port}...`))