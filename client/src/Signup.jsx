import React, { Component } from 'react';

const Signup = () => {
    return ( 
        <form>
            <label for="name">Name</label>
            <input type="text" placeholder="Your Name" id="name" name="name"/>

            <label for="email">Email</label>
            <input type="email" placeholder="yourmail@gmail.com" id="email" name="email"/>
            
            <label for="phone">Phone</label>
            <input type="number" placeholder="Your mobile no." id="phone" name="phone"/>

            <label for="password">Password</label>
            <input type="password" placeholder="Your Password" id="password" name="password"/>
            <button>Log In</button>
        </form>
     );
}
 
export default Signup;