import React from 'react';
    import './index.css';

    function Home() {
      return (
        <div>
          <section id="showcase">
            <div className="container">
              <h1>Modern Quality Assurance for Vocational Training</h1>
              <p>Manage your organizations and billing with ease.</p>
            </div>
          </section>

          <section id="newsletter">
            <div className="container">
              <h1>Subscribe To Our Newsletter</h1>
              <form>
                <input type="email" placeholder="Enter Email..." />
                <button type="submit" className="button_1">Subscribe</button>
              </form>
            </div>
          </section>

          <section id="boxes">
            <div className="container">
              <div className="box">
                <img src="https://via.placeholder.com/100" alt="Organization Management" />
                <h3>Organization Management</h3>
                <p>Effortlessly manage multiple organizations.</p>
              </div>
              <div className="box">
                <img src="https://via.placeholder.com/100" alt="Billing Management" />
                <h3>Billing Management</h3>
                <p>Streamline your billing processes.</p>
              </div>
              <div className="box">
                <img src="https://via.placeholder.com/100" alt="Quality Assurance" />
                <h3>Quality Assurance</h3>
                <p>Ensure high standards in vocational training.</p>
              </div>
            </div>
          </section>
        </div>
      );
    }

    export default Home;
