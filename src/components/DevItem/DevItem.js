import React from 'react';

import styles from './style.module.css';

function DevItem({ dev }) {
  return (
    <li className={styles.container}>
      <header className={styles.header}>
        <img src={dev.avatar_url} alt="Patrick Santos" />
        <div className={styles.userInfo}>
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio ? dev.bio : 'Usuário não tem descrição'}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        Acessar perfil do Github
      </a>
    </li>
  );
}

export default DevItem;
