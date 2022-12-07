import React from 'react';
import '../src/index.css'
import { NavLink } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4 text-white">Welcome to the MarketPlace</h1>
      <p className="mb-8 text-gray-200">Please log in or sign up to continue.</p>
      <div>
        <button className="m-1">
        <NavLink to="/login">Log In</NavLink>
        </button>
        <button className="m-1">
        <NavLink to="/signup">Sign Up</NavLink>
         
        </button>
      </div>
    </div>
  );
};

export default HomePage;
