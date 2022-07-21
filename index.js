import express from "express";
import router from "./routers/routers.js";
import db from "./config/db.js";

const app = express();

//conectar la base de datos
db.authenticate()
    .then(()=> console.log('base de datos conectada'))
    .catch(error=> console.log(error));

//Definir el puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT);

//Habilitar PUG
app.set('view engine', 'pug');

//Obtener el año actual pasandolo por variables internas de express
app.use((req, res, next)=>{
    const year = new Date().getFullYear();
    res.locals.actualYear = year;
    //actualYear es una variable que yo inventé
    //next es para ir al siguiente middleware una vez que este termine
    return next();
})

//agregar body parser para leer los datos de un formulario
app.use(express.urlencoded({extended: true}));


// Definir la carpeta publica
app.use(express.static('public/'));
//Agregar los routers
app.use( '/', router);


