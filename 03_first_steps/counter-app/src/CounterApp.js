import react from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 0 }) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ value }</h2>
    </>
  )
};

CounterApp.propTypes = {
  value: PropTypes.number
}

export default CounterApp;