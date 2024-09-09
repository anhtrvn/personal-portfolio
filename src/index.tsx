import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import ErrorPage from './error-page';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import PageTransition from './components/ui/PageTransition';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <PageTransition>
            <Home />
          </PageTransition>
        ),
      },
      {
        path: '/about',
        element: (
          <PageTransition>
            <About />
          </PageTransition>
        ),
      },
      {
        path: '/skills',
        element: (
          <PageTransition>
            <Skills />
          </PageTransition>
        ),
      },
      {
        path: '/projects',
        element: (
          <PageTransition>
            <Projects />
          </PageTransition>
        ),
      },
      {
        path: '/contact',
        element: (
          <PageTransition>
            <Contact />
          </PageTransition>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: '/personal-portfolio' });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
