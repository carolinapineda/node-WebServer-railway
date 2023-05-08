require('dotenv').config()
const express = require('express')
const app = express()
const hbs = require('hbs');
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/parciales');

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home',{
      nombre: 'Fernando herrera',
      titulo: 'Curso de node'
  });
})

// app.get('/', function (req, res) {
//   res.send('Home page')
// })

// Se agregaria otro script pero con hola mundo para que nos pueda agarrar bien el url http://localhost:8080/hola-mundo

app.get('/generic', function (req, res) {
  res.render('generic',{
    nombre: 'Fernando herrera',
    titulo: 'Curso de node'
  });
})

app.get('/elements', function (req, res) {
  res.render('elements',{
    nombre: 'Fernando herrera',
    titulo: 'Curso de node'
});
})

// El comodin(*) indica que cualquier otra ruta que no este especificada con el app.get llegara al punto de (res.send) y le podremos poner un mensajito de error.
app.get('*', function (req, res) {
res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

// app.listen(8080);