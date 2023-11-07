const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).send('Respuesta OK');
  });

app.get('/form', (req, res, descripcionError) => {
    //record : Envia la descripcion del error
    //opcion : Falta Complentar Campos
    //opcion2 : Numero Duplicado

    const condicion = true; 

    if (condicion) {
        res.status(200).send('Opción 1: Respuesta 200 OK', descripcionError);
      } else if (res.status) {
        res.status(201).send('Opción 2: Respuesta 201 ');
      } else {
        res.status(500).send('Opción 3: Respuesta 500 Bad Request');
      }
    });

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});