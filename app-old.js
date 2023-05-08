
const http = require('http');

// La request es lo que se esta solicitando por la parte del cliente, toda la informacion url
// La response es lo que es servidor le va a responder 
http.createServer((req, res)=>{

    console.log(req);

    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, { 'Content-Type': 'application/csv' });

    // const persona = {
    //     id: 1,
    //     nombre: 'Carolina'
    // }

    res.write('Hola Mundo');

    // res.write('id, nombre\n');
    // res.write('1, Maria\n');
    // res.write('2, Jose\n');
    // res.write('3, Juan\n');
    

    // res.write(JSON.stringify(persona));
    res.end();
})
.listen(8080);

console.log('Escuchando el puerto 8080');

