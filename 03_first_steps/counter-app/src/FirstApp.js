// Functional Components
import React from 'react'; // Se debe importar React donde se use JSX

const FirstApp = ({ otherMessage = 'No message' }) => { // Recibir propiedades
  const message = 'This is message in a variable';

  return ( // Solamente puede regresar un elemento, por eso se usa un high order component para agrupar toda la información
    <>
      <h1>Hello World!!!</h1>
      <p>{ message }</p>
      <p>{ otherMessage }</p>
    </>
  );
};

export default FirstApp; // Exportamos nuestro componente