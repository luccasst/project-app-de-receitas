import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import '../styles/header.css';
import searchIcon from '../images/searchIcon.svg';

function Header({ title, search }) {
  const history = useHistory();
  const [show, setShow] = useState(false);

  return (
    <header>
      <section>
        <div>
          <button type="button" onClick={ () => history.push('/profile') }>
            <img
              src={ profileIcon }
              alt="Imagem Perfil do Usuário"
              data-testid="profile-top-btn"
            />
          </button>
        </div>
        <div>
          <h1 data-testid="page-title">
            { title }
          </h1>
        </div>
        <div>
          {
            search && (
              <button
                type="button"
                onClick={ () => setShow(!show) }
              >
                <img
                  src={ searchIcon }
                  alt="Botão de Pesquisa"
                  data-testid="search-top-btn"
                />
              </button>
            )
          }
        </div>
      </section>
      {
        show && (
          <div>
            <input type="text" data-testid="search-input" />
          </div>
        )
      }
    </header>
  );
}

Header.defaultProps = {
  search: '',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  search: PropTypes.string,
};

export default Header;
