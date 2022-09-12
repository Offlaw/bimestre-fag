import './App.css';
import React, { useState } from 'react';

function App() {

  const [numeroInput, setNumeroInput] = useState(0)
  const [count, setCount] = useState(0)

  const handleDiminuir = () => setCount(prev => parseInt(prev) - parseInt(numeroInput) )
  const handleAdicionar = () => setCount(prev => parseInt(prev) + parseInt(numeroInput))

  //Se criar em Zerar, ele seta 0 para o input e para o contador
  const handleZerar = () => {
    setCount(0)
    setNumeroInput(0)
  }


  return (
  <div class="App">
    <p>Contador: {count} </p>
    <input 
    type="number" 
    defaultValue={0} 
    value={numeroInput}  
    onChange={evento => setNumeroInput(evento.target.value)}
    />

    <button onClick={() => handleAdicionar()}>Adicionar</button>
    <button onClick={() => handleDiminuir()}>Diminuir</button>
    <button onClick={() => handleZerar()}>Zerar</button>
    
  </div>
  );
}
export default App;


