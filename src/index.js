const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const engine = require('ejs-mate');
const app = express();
const server = http.Server(app);
const io = socketIO(server);
var bodyParser = require('body-parser');



// settings
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
//Middlewares
app.use(express.json());
//Publica la carpeta de imagenes para poder consultarla desde el navegador

// middlewares

// routes
app.use(require('./routes'));

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
// sockets
require('./sockets')(io);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
server.listen(3002, () => {
  console.log('Server on port', 3002);
});
