import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 0 }) => {
  const [counter, setCounter] = useState(0); // retorna un arreglo value, function

  // handleAdd
  const handleAdd = (e) => {
    setCounter(counter + 1);
    // setCounter((c) => c + 1); La funcion recibe el valor previo del counter
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>
      <button onClick={ handleAdd }>+1</button>
    </>
  )
};

CounterApp.propTypes = {
  value: PropTypes.number
}

export default CounterApp;