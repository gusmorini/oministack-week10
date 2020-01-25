import React, { useState, useEffect } from 'react';

function DevForm({
    handleAddDev,
    handleUpdateDev,
    title,
    textButton,
    update,
    github_username,
    setGithubUsername,
    techs,
    setTechs,
    latitude,
    setLatitude,
    longitude,
    setLongitude

}) {

    // const [latitude, setLatitude] = useState('');
    // const [longitude, setLongitude] = useState('');
    // const [github_username, setGithubUsername] = useState('');
    //const [techs, setTechs] = useState('');



    // dinamic buttons of form

    // const [title, setTitle] = useState('Cadastrar');
    // const [textButton, setTextButton] = useState('Salvar');
    // const [update, setUpdate] = useState(false);

    async function mySubmit(e) {

        e.preventDefault();

        if (!update) {

            // cadastrar o dev

            await handleAddDev({
                github_username,
                techs,
                latitude,
                longitude,
            });

            setGithubUsername('');
            setTechs('');

        } else {

            // editar o DEV

            await handleUpdateDev({
                github_username,
                techs,
                latitude,
                longitude,
            });

            setGithubUsername('');
            setTechs('');
        }

    }

    function handleUpdate(e) {
        e.preventDefault();
        console.log('update...');
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        )
    }, []);

    // function handleSubmit(e) {

    //     e.preventDefault();

    //     onSubmit({
    //         github_username,
    //         techs,
    //         latitude,
    //         longitude,
    //     });

    //     console.log(github_username, techs, latitude, longitude);

    //     setGithubUsername('');
    //     setTechs('');
    // }

    return (
        <>

            <strong>{title}</strong>

            <form onSubmit={mySubmit}>

                <div className="input-block">
                    <label htmlFor="github_username">Usuário do Github</label>
                    <input
                        name="github_username"
                        id="github_username"
                        required
                        value={github_username}
                        onChange={e => setGithubUsername(e.target.value)}
                        disabled={update}
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="techs">Tecnologias</label>
                    <input
                        name="techs"
                        id="techs"
                        required
                        value={techs}
                        onChange={e => setTechs(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <div className="input-block">
                        <label htmlFor="latitude">Latitude</label>
                        <input
                            name="latitude"
                            id="latitude"
                            required
                            value={latitude}
                            onChange={e => setLatitude(e.target.value)}
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="longitude">Longitude</label>
                        <input
                            name="longitude"
                            id="longitude"
                            required
                            value={longitude}
                            onChange={e => setLongitude(e.target.value)}
                        />
                    </div>
                </div>

                <button type="submit">{textButton}</button>

            </form>
        </>
    );
};

export default DevForm;