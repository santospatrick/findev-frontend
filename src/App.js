import React, { useEffect, useState } from 'react';

import styles from 'App.module.css';
import './Sidebar.css';
import './Main.css';
import api from 'services/api';
import DevItem from 'components/DevItem';
import DevForm from 'forms/DevForm';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleSubmit(values) {
    const response = await api.post('devs', values);

    setDevs([...devs, response.data]);
  }

  return (
    <div className={styles.container}>
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleSubmit} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
