import React from 'react';

import styles from 'App.module.css';

function App() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className={styles.container}>
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleSubmit} noValidate>
          <div className={styles.block}>
            <label htmlFor="github_username">
              <span>Usuário do Github</span>
              <input name="github_username" id="github_username" type="text" />
            </label>

            <label htmlFor="techs">
              <span>Tecnologias</span>
              <input name="techs" id="techs" type="text" />
            </label>

            <div className={styles.inline}>
              <label htmlFor="latitude">
                <span>Latitude</span>
                <input name="latitude" id="latitude" type="text" />
              </label>

              <label htmlFor="longitude">
                <span>Longitude</span>
                <input name="longitude" id="longitude" type="text" />
              </label>
            </div>
          </div>
          <button>top</button>
        </form>
      </aside>
      <main>da balada</main>
    </div>
  );
}

export default App;
