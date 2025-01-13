import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Letterpage from './pages/Letterpage';
import Welcomepage from './pages/Welcomepage';
import Conceptpage from './pages/Conceptpage';
import Loginpage from './pages/Login';
import Signuppage from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Letterpage />} />
        <Route path='/Welcomepage' element={<Welcomepage />} />
        <Route path='/Conceptpage' element={<Conceptpage />} />
        <Route path='/Login' element={<Loginpage />} />
        <Route path='/Signup' element={<Signuppage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
