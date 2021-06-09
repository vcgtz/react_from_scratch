// Functional Components
import React from 'react'; // Se debe importar React donde se use JSX

const FirstApp = () => { // Regresar un fragment component
  const message = 'This is message in a variable';

  // <> </> es equivalente <Fragment></Fragment>
  return ( // Solamente puede regresar un elemento, por eso se usa un high order component para agrupar toda la información
    <>
      <h1>Hello World!!!</h1>
      <p>This is a message</p>
      <p>{ message }</p>
      <p>{ 3 * 5 / 2 * 87 }</p>
      <p>{ Math.random() }</p>
      <p>{ [1, 2, 3, 4, 5] }</p>
      <p>{ JSON.stringify({a: 1, b: 2}) }</p>
      <pre>{ JSON.stringify({a: 1, b: 2}, null, 2) }</pre>
      {/* Esto es un comentario */}
    </>
  );

  // Para imprimir variables usamos {}, dentro de las {} se puede usar cualquier expresión de JS, menos objetos
};

export default FirstApp; // Exportamos nuestro componente