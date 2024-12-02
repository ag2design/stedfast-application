import React from 'react';
    import { Routes, Route, Link } from 'react-router-dom';
    import Home from './Home';
    import SignUp from './SignUp';
    import Login from './Login';
    import './index.css';

    function App() {
      return (
        <div>
          <header>
            <div className="container">
              <div id="branding">
                <h1><span className="highlight">Stedfast</span> Quality Assurance</h1>
              </div>
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/signup">Sign Up</Link></li>
                  <li><Link to="/login">Login</Link></li>
                </ul>
              </nav>
            </div>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>

          <footer>
            <p>Stedfast, Copyright &copy; 2023</p>
          </footer>
        </div>
      );
    }

    export default App;
