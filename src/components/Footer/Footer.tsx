import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-content">
        <div className="footer-section about">
          <h3>ABOUT</h3>
          <p>
            Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa,
            convallis a pellentesque nec, egestas non nisi. Pellentesque in
            ipsum id orci porta dapibus. Sed porttitor lectus nibh.
          </p>
        </div>
        <div className="footer-section social">
          <h3>SOCIAL</h3>
          <div className="social-icons">
            <a href="#">
              <img src="/facebook.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/twitter.png" alt="Twitter" />
            </a>
            <a href="#">
              <img src="/insta.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/pinterest.png" alt="Pinterest" />
            </a>
          </div>
        </div>
        <div className="footer-section contact">
          <h3>CONTACT US</h3>
          <address>
            500 Terry Francois St.<br />
            San Francisco, CA 94158<br />
            +1-410-555-0134 | info@example.com<br />
            contact@example.com
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright © 2024 Home Decor | Powered by Home Decor
        </p>
        <nav>
          <a href="#">About Us</a>
          <a href="#">Living Room</a>
          <a href="#">Kitchen</a>
          <a href="#">Outdoors</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

