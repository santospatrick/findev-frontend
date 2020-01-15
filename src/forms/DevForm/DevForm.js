import React, { useState, useEffect } from 'react';

import styles from 'App.module.css';

function DevForm({ onSubmit }) {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithub] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      error => {
        console.log('error:', error);
      },
      {
        timeout: 30000,
      },
    );
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const values = {
      github_username,
      techs,
      latitude,
      longitude,
    };

    await onSubmit(values);

    setGithub('');
    setTechs('');
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={styles.block}>
        <label className="input" htmlFor="github_username">
          <span>Usuário do Github</span>
          <input
            name="github_username"
            id="github_username"
            type="text"
            onChange={event => setGithub(event.target.value)}
            value={github_username}
          />
        </label>

        <label className="input" htmlFor="techs">
          <span>Tecnologias</span>
          <input
            name="techs"
            id="techs"
            type="text"
            onChange={event => setTechs(event.target.value)}
            value={techs}
          />
        </label>

        <div className={styles.inline}>
          <label className="input" htmlFor="latitude">
            <span>Latitude</span>
            <input
              name="latitude"
              id="latitude"
              type="number"
              onChange={event => setLatitude(event.target.value)}
              value={latitude}
            />
          </label>

          <label className="input" htmlFor="longitude">
            <span>Longitude</span>
            <input
              name="longitude"
              id="longitude"
              type="number"
              onChange={event => setLongitude(event.target.value)}
              value={longitude}
            />
          </label>
        </div>
      </div>
      <button>Salvar</button>
    </form>
  );
}

export default DevForm;
