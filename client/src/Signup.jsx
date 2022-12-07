import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { signup_user } from "./controllers/user";
import { signup_seller } from './controllers/seller';
import '../src/index.css';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState("User");

  const handleSubmit = (e) => {
    console.log("hey");
    e.preventDefault();
    if (userType === "User") {
      const obj = {
        user_email: email,
        user_password: pass,
        user_name: name,
        user_phone: phone,
      };
      signup_user(obj).then((data) => alert(data.message));
    } else if (userType === "Seller") {
      const obj = {
        seller_email: email,
        seller_password: pass,
        seller_name: name,
        seller_phone: phone,
      };
      signup_seller(obj).then((data) => alert(data.message));
    }
    
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="">
          <label>User Type</label>
          <br />
          <select onChange={(e) => setUserType(e.target.value)} className="">
            <option value="User">User</option>
            <option value="Seller">Seller</option>
          </select>
        </div>

        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your Name"
          id="name"
          name="name"
        />

        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="yourmail@gmail.com"
          id="email"
          name="email"
        />

        <label htmlFor="phone">Phone</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          placeholder="Your mobile no."
          id="phone"
          name="phone"
        />

        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit" className="btn-primary">Sign Up</button>
      </form>
      <button className="link-btn">
        <NavLink to="/login">Already have an account? Log In Here</NavLink>
      </button>
    </div>
  );
};

export default Signup;
