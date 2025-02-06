import {engine} from "express-handlebars";
import path from "path";

function hbsConfig(app) {
    app.engine('hbs', engine({
        extname: 'hbs',
    }));
    app.set('view engine', 'hbs');
    app.set('views', './src/views');
}

export default hbsConfig;