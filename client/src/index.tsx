import React from 'react';
import ReactDOM from 'react-dom';
import Profil from './pages/Profil';
import { DataProvider } from './utils/context/';

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <Profil />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
