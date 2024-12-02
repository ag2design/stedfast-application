import React from 'react';
    import './index.css';

    function SignUp() {
      return (
        <div className="container">
          <h1>Organization Sign Up</h1>
          <form>
            <div>
              <label>Organization Name</label>
              <input type="text" placeholder="Organization Name" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit" className="button_1">Sign Up</button>
          </form>
        </div>
      );
    }

    export default SignUp;
