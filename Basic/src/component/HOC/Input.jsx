import React from 'react';
import withLoading from './withLoding';

function Input() {
  return <input defaultValue="Input"/>;
}

export default withLoading(Input);
