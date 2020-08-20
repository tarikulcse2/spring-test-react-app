import React, { useState, ChangeEvent } from 'react';

function factorialcal(n: any): any {
  if (n === 1) {
    return 1;
  }
  return n * factorialcal(n - 1);
}

const Factorial: React.FC = ({ children }) => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const changeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  };
  const numberSubmit = (e: any) => {
    e.preventDefault()
    if (!value) {
      setResult('Please Enter Number')
    } else {
      setResult(factorialcal(value))
    }
  };

  return (
    <div className="container">
      <h1>Factorial Calculator</h1>
      <form onSubmit={numberSubmit}>
        <input type="number" className="form-control" onChange={changeNumber} placeholder="Enter a number..." />
        <br />
        <button className="btn btn-primary" type="submit">Calculate Factorial</button>
      </form>
      <h2>Factorial: {result}</h2>
    </div>
  );
}

export default Factorial;
