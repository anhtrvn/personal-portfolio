import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Experience from './pages/Experience/Experience';
import Skills from './pages/Skills/Skills';

function App() {
  return (
    <main>
      <Header />
      <Home />
      <Experience />
      <Skills />
    </main>
  );
}

export default App;
