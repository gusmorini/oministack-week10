import React from 'react';

import './styles.css';

function DevItem({ dev, handleDeleteDev, editDev }) {

    function deleteDev() {
        handleDeleteDev(dev.github_username);
    }


    return (
        <li className="dev-item">
            <header>

                <img
                    src="https://cdn.icon-icons.com/icons2/931/PNG/128/delete_remove_bin_icon-icons.com_72400.png"
                    alt="deletar"
                    id="deletar"
                    onClick={deleteDev}
                />

                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>

            </header>

            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Perfil do Github</a>

            <br></br>
            <a href="#" onClick={() => { editDev(dev) }}>editar</a>

        </li>
    );
}

export default DevItem;