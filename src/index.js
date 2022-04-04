const express = require('express');
const cors = require('cors');
//const favicon = require('serve-favicon');
//const path = require('path');

const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(cors());
/*app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))*/

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use(require('./routes/index'));
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/articulos', require('./routes/articulos'));
app.use('/api/materias', require('./routes/materia'));
app.use('/api/items', require('./routes/items'));
app.use('/api/login', require('./routes/login'));

// Start API
app.listen(app.get('port'), () => {
  console.log(`Api listening on port`, app.get('port'));
})
