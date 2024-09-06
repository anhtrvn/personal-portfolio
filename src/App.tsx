import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';
import Header from './components/Nav/Header';

function App() {
  return (
    <>
      <Header />
      <main className='flex-1 h-full'>
        <Outlet />
      </main>
    </>
  );
}

export default App;
