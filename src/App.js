import React from 'react';

import './App.css';
import profile from './assets/react.png';

import TechList from './components/TechList';

function App() {
  return (
    <>
      <h1>Hello Rocketseat</h1>
      <img width="200" src={profile} />
      <TechList/>
    </>
  );
}

export default App;