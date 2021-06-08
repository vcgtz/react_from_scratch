import React from 'react';
import ReactDOM from 'react-dom';

const greeting = <h1>Hello World!</h1>; // H1 Con un saludo usando JSX
const divRoot = document.querySelector('#root'); // Referencia el div principal de la aplicación

ReactDOM.render(greeting, divRoot); // Escribimos nuestro saludo en el div principal de la aplicación