const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Add headers
app.use((req, res, next) => {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
//Configuracion
app.set('port', process.env.PORT || 3002);
//Middlewares
app.use(express.json());
//Publica la carpeta de imagenes para poder consultarla desde el navegador

app.get('/', function (req, res) {
  //editable para el ejs
  res.send('Hello world!');
});

//Rutas
app.use('/actividades',require('./rutas/actividades'));
app.use('/areas',require('./rutas/areas'));
app.use('/cuadrillas',require('./rutas/cuadrillas'));
app.use('/empleados',require('./rutas/empleados'));
app.use('/eventos',require('./rutas/eventos'));
app.use('/historiales',require('./rutas/reportes'));
app.use('/notificaciones',require('./rutas/notificaciones'));
app.use('/reportes',require('./rutas/reportes'));
app.use('/solicitudes',require('./rutas/solicitudes'));
app.use('/ubicaciones',require('./rutas/ubicaciones'));

//Iniciando el Servidor
app.listen(app.get('port'), () => {
  console.log("server ready");
});