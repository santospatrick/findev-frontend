import React from 'react';

function DevItem({ dev }) {
  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt="Patrick Santos" />
        <div className="user-info">
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
