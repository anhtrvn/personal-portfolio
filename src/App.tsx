import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';
import Header from './components/Nav/Header';
import CustomCursor from './components/ui/effects/CustomCursor';

function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className='relative flex-1'>
        <Outlet />
      </main>
    </>
  );
}

export default App;
