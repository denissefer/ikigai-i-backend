import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstScreen from './pages/FirstScreen';
import Welcome from './pages/Welcome';
import IkigaiDescription from './pages/IkigaiDescription';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Congratulations from './pages/Congratulations'
import Concepts from './pages/Concepts'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstScreen />} />
        <Route path='/Welcome' element={<Welcome />} />
        <Route path='/IkigaiDescription' element={<IkigaiDescription />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Congratulations' element={<Congratulations />} />
        <Route path='/Concepts' element={<Concepts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
