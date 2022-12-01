import React, {useState} from 'react';
import { Route, Routes } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import './App.css'
function App() {
  const [currForm, setCurrForm] = useState('login');
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
