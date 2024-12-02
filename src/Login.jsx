import React from 'react';
    import './index.css';

    function Login() {
      return (
        <div className="container">
          <h1>User Login</h1>
          <form>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit" className="button_1">Login</button>
          </form>
        </div>
      );
    }

    export default Login;
