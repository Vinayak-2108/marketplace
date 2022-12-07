import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login_seller } from "./controllers/seller";
import { login_user } from "./controllers/user";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [userType, setUserType] = useState("User");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userType === "User") {
      const obj = {
        user_email: email,
        user_password: pass,
      };
      login_user(obj).then((data) => {
        
        if(data.tag === true){
          localStorage.setItem("user_token", data.token);
        }
        console.log(data.token);
        console.log(localStorage.getItem("user_token"));
        alert(data.message);
        // window.location.reload();
        navigate("/products");
      });
      
    } else if (userType === "Seller") {
      const obj = {
        seller_email: email,
        seller_password: pass,
      };
      login_seller(obj).then((data) =>{
        if(data.tag){
          localStorage.setItem("seller_token", data.token);
        }
        alert(data.message);
        // window.location.reload();
        navigate("/sellerform");
      });
     
    }
    
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="">
          <label>User Type</label>
          <br />
          <select onChange={(e) => setUserType(e.target.value)} className="">
            <option value="User">User</option>
            <option value="Seller">Seller</option>
          </select>
        </div>

        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="yourmail@gmail.com"
          id="email"
          name="email"
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
        <button className="btn-primary" type="submit" >Log In</button>
      </form>
      <button className="link-btn">
        <NavLink to="/signup">New Account? Signup Here</NavLink>
      </button>
    </div>
  );
};

export default Login;
