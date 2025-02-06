import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleSumar = () => {
    if (num1 === '' || num2 === '') {
      return;
    }

    const suma = parseFloat(num1) + parseFloat(num2);
    setResultado(suma);
  };

  return (
    <div className="App">
      <h1>Suma de Números</h1>
      <div className="input-container">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Número 1"
          className="input"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Número 2"
          className="input"
        />
      </div>
      <button onClick={handleSumar} className="button">Sumar</button>
      {resultado !== null && <h2>Resultado: 
        <span>{resultado}</span>
      </h2>}
    </div>
  );
}

export default App;