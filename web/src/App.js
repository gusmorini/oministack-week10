import React, { useState } from 'react';

import './global.css';
import './App.css';

function App() {

  return (
    <div id="app">
      <aside>
        <strong>cadastrar</strong>
        <form>
          <label htmlFor="">Usuário do Github</label>
          <input name="github_username" id="username" />
        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;