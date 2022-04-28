import React from 'react';
import profile from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';
import style from '../styles/FoodsPage.module.css';

export default function Header() {
  return (
    <header className={ style.Header }>
      <img
        data-testid="profile-top-btn"
        src={ profile }
        alt="profile"
      />
      <h1 data-testid="page-title">Foods</h1>
      <img
        data-testid="search-top-btn"
        src={ search }
        alt="search"
      />
    </header>
  );
}
