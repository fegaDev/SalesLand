import { createConnection } from 'mysql';

const db = createConnection({
    //Se omitio el uso de variables
    //de entorno para la prueba.
  host: 'http://127.0.0.0',
  user: 'fega',
  password: 'myrootpass',
  database: 'dbForm.sql'
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});
