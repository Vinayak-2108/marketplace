import React, { Component } from 'react';

const Login = () => {
    return ( 
        <form>
            <label for="email">Email</label>
            <input type="email" placeholder="yourmail@gmail.com" id="email" name="email"/>
            
            <label for="password">Password</label>
            <input type="password" placeholder="Your Password" id="password" name="password"/>
            <button>Log In</button>
        </form>
     );
}
 
export default Login;