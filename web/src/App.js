import React, { useState } from 'react';

// componente: bloco isolado de HTML, CSS e JS, o qual não interfere no restante da app
// propriedade: Informações que o componente Pai passa para o componente Filho
// estado: Informações mantidas pelo componente (lembrar: imutabilidade)

// <> </> fragment para encapsular mais de um componente sem afetar a interface

import Hello from './Hello';

function App() {

  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <Hello title="titulo 2" />
      <Hello title="titulo 1" />
      <Hello title="titulo 3" />

      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>increment</button>

    </>
  );
}

export default App;