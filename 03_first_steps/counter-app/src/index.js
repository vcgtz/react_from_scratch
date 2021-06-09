import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from './FirstApp'; // Importar el primer compomente

import './index.css'; // Importar un archivo CSS

const divRoot = document.querySelector('#root'); // Referencia el div principal de la aplicación

ReactDOM.render(<FirstApp otherMessage="Other message from a prop" />, divRoot); // Escribir el contenido del componente en el div principal de la aplicación
// ReactDOM.render(<FirstApp otherMessage={123} />, divRoot); // Forma de enviar un número