import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import "./App.css";
import "./index.css";
import HomePage from "./Home";
import Products from "./Products";
import SellerForm from "./SellerForm";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sellerform" element={<SellerForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
