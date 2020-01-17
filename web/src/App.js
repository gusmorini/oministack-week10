import React, { useState } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>

          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" />
            </div>
          </div>

          <button type="submit"> Salvar</button>

        </form>

      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/32224862?s=460&v=4" alt="Gustavo Morini" />
              <div className="user-info">
                <strong>Gustavo Morini</strong>
                <span>React....</span>
              </div>
            </header>
            <p>do que me falta não tenho nada do que me falta não tenho nada do que me falta não tenho nada do que me falta não tenho nada</p>
            <a href="https://github.com/gusmorini">Perfil do Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/32224862?s=460&v=4" alt="Gustavo Morini" />
              <div className="user-info">
                <strong>Gustavo Morini</strong>
                <span>React....</span>
              </div>
            </header>
            <p>bio ...</p>
            <a href="https://github.com/gusmorini">Perfil do Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/32224862?s=460&v=4" alt="Gustavo Morini" />
              <div className="user-info">
                <strong>Gustavo Morini</strong>
                <span>React....</span>
              </div>
            </header>
            <p>bio ...</p>
            <a href="https://github.com/gusmorini">Perfil do Github</a>
          </li>


        </ul>
      </main>
    </div>
  );
}

export default App;