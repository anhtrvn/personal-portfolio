import React from 'react';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main className='h-full'>
      <Header />
      <Outlet />
    </main>
  );
}

export default App;
