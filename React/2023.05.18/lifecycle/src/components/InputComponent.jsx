import React from 'react';
import useInput from '../hooks/UseInput';

function InputComponent() {
  const [value, onChange] = useInput('');
  return (
    <>
      <input type="text" onChange={onChange} />
      <div>{value}</div>
    </>
  );
}
export default InputComponent;
