import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from './FirstApp'; // Importar el primer compomente

import './index.css'; // Importar un archivo CSS

const divRoot = document.querySelector('#root'); // Referencia el div principal de la aplicación

ReactDOM.render(<FirstApp otherMessage="This is a second message" />, divRoot); // Escribir el contenido del componente en el div principal de la aplicación