// Functional Components
import React from 'react';
import PropTypes from 'prop-types';

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

FirstApp.propTypes = {
  otherMessage: PropTypes.string.isRequired
}

export default FirstApp; // Exportamos nuestro componente