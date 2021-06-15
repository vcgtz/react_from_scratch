import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value); // retorna un arreglo value, function

  // handleAdd
  const handleAdd = (e) => {
    setCounter(counter + 1);
    // setCounter((c) => c + 1); La funcion recibe el valor previo del counter
  }

  const handleSubtract = (e) => {
    setCounter(counter - 1);
  };

  const handleReset = (e) => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>
      <button onClick={ handleAdd }>+1</button>
      <button onClick={ handleSubtract }>-1</button>
      <button onClick={ handleReset }>Reset</button>
    </>
  )
};

CounterApp.propTypes = {
  value: PropTypes.number
}

export default CounterApp;