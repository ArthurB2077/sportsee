import ReactDOM from 'react-dom';
import { DataProvider } from './utils/context/';
import Profil from './pages/Profil';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/user/:userId" element={<DataProvider><Profil/></DataProvider>} />
            <Route path='/*' element={<><Link to='/user/12'>Voir utilisateur 12</Link><br></br><Link to='/user/12'>Voir utilisateur 18</Link></>}/>
        </Routes>
    </BrowserRouter>
    ,
  document.getElementById('root')
);
