require('dotenv').config();
const express = require('express');
const sequelize = require('./db/conexionBaseDeDatos');
const app = express();
const path = require('path');
const odaRutas = require("./routes/odaRutas");
const logRutas = require("./routes/logRutas");
const logMiddleware = require("./middlewares/LogMiddleware");

// Configuración de CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    next();
});

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

sequelize.authenticate()
    .then(() => console.log('Conexión a la base de datos exitosa.'))
    .catch(error => console.error('Error al conectar a la base de datos:', error));

sequelize.sync()
    .then(() => console.log('Modelos sincronizados correctamente.'))
    .catch(error => console.error('Error al sincronizar los modelos:', error));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/", (req, res) => {
    res.render("index");
});

app.use(logMiddleware);
app.use("/obras", odaRutas);
app.use("/logs", logRutas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});