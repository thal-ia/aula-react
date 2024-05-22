import React from 'react';
import './App.css';
import MeuComponente from './novoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo ao meu site usando React!</h1>
         <p>Este é o meu primeiro site feito com React!</p>
       <MeuComponente />
      </header>
    </div>
  );
}

export default App;
