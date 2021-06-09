// Functional Components
import React, { Fragment } from 'react'; // Se debe importar React donde se use JSX
// import React from 'react'; // Se debe importar React donde se use JSX

const FirstApp = () => { // Regresar un fragment component
  return ( // Solamente puede regresar un elemento, por eso se usa un high order component para agrupar toda la información
    <Fragment>
      <h1>Hello World!!!</h1>
      <p>This is a message</p>
    </Fragment>
  );

  /*
  return ( // Solamente puede regresar un elemento, por eso se usa un high order component para agrupar toda la información
    <> // Forma corta de usar un fragment
      <h1>Hello World!!!</h1>
      <p>This is a message</p>
    </>
  );
  */
};

export default FirstApp; // Exportamos nuestro componente