import React from 'react';
import ReactDOM from 'react-dom';
import { DataProvider } from './utils/context/';
import Profil from './pages/Profil';

ReactDOM.render(
    <DataProvider>
      <Profil/>
    </DataProvider>,
  document.getElementById('root')
);
