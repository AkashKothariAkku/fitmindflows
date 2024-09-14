import { NavLink } from "react-router-dom";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Menu */}
        <div className="footer-menu">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <NavLink
            to="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-facebook-f"></i>
          </NavLink>
          <NavLink
            to="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-twitter"></i>
          </NavLink>
          <NavLink
            to="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-instagram"></i>
          </NavLink>
          <NavLink
            to="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-linkedin-in"></i>
          </NavLink>
        </div>

        {/* Copyright Statement */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} FitMind Flows. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
