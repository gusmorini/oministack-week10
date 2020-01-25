import React, { useEffect, useState } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

function App() {

  const [devs, setDevs] = useState([]);

  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const [title, setTitle] = useState('Cadastrar');
  const [textButton, setTextButton] = useState('Salvar');
  const [update, setUpdate] = useState(false);

  const [devUpdate, setDevUpdate] = useState(null);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  });

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);
    setDevs([...devs, response.data]);
  }

  async function handleUpdateDev(data) {

    const { github_username, techs, longitude, latitude } = data;

    const { name, avatar_url, bio } = devUpdate;

    const update = {
      github_username,
      techs,
      longitude,
      latitude,
      name,
      avatar_url,
      bio
    }

    await api.put('/devs', update);
    setDevs([...devs]);

    setDevUpdate(null);
    setTitle('Cadastrar');
    setTextButton('Salvar');
    setUpdate(false);

  }

  async function handleDeleteDev(data) {
    await api.delete(`/devs/${data}`);
    setDevs([...devs]);
  }


  function editDev(data) {

    setTitle('Editar Cadastro');
    setTextButton('Atualizar');
    setUpdate(true);
    setGithubUsername(data.github_username);
    setTechs(data.techs.join(', '));
    setLatitude(data.latitude);
    setLongitude(data.longitude);

    setDevUpdate(data);

  }

  return (
    <div id="app">
      <aside>

        <DevForm
          handleAddDev={handleAddDev}
          handleUpdateDev={handleUpdateDev}
          title={title}
          textButton={textButton}
          update={update}
          github_username={github_username}
          setGithubUsername={setGithubUsername}
          techs={techs}
          setTechs={setTechs}
          latitude={latitude}
          setLatitude={setLatitude}
          longitude={longitude}
          setLongitude={setLongitude}
        />

      </aside>
      <main>
        <ul>

          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} handleDeleteDev={handleDeleteDev} editDev={editDev} />
          ))}


        </ul>
      </main>
    </div>
  );
}

export default App;