import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';
import Header from './components/Nav/Header';
import CustomCursor from './components/ui/CustomCursor';

function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className='relative flex-1 z-10'>
        <Outlet />
      </main>
    </>
  );
}

export default App;
