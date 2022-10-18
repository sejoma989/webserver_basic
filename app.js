import express from "express";
import hbs from'hbs';
import * as url from 'url';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import


dotenv.config();
const app = express();
const port = process.env.PORT;

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido estatico
app.use(express.static("public"));


// ruta principal + controlador manejador de la vista principal
app.get("/", (req, res) => {
    res.render('home', {
        nombre:'Fernando Herrera',
        titulo:'Curso de Node'
    });
});

app.get("/generic", (req, res) => {
    res.render('generic', {
        nombre:'Fernando Herrera',
        titulo:'Curso de Node'
    });
});

app.get("/elements", (req, res) => {
    res.render('elements', {
        nombre:'Fernando Herrera',
        titulo:'Curso de Node'
    });
});

// ruta por defecto en caso que no encuentre la ruta
app.get("*", (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
