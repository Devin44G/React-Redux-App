import React from 'react';
import logo from './logo.svg';
import './App.css';

import GetAnimeList from './components/GetAnimeList';
import AnimeList from './components/AnimeList';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Anime API</h1>
      </header>
      <GetAnimeList />
      <AnimeList />
    </div>
  );
}

export default App;
