import React from 'react';
import PropTypes from 'prop-types';

function FooTest(props) {
  return <div>Hello {props.foo}</div>;
}

FooTest.propTypes = {
  foo: PropTypes.string,
};

export default FooTest;
