import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <ul className="social-list">
        <li className="item">
          <a
            href="https://www.facebook.com/jaaoviegas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
        <li className="item">
          <a
            href="https://www.instagram.com/jaaoviegas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li className="item">
          <a
            href="https://www.linkedin.com/in/joao-paulo-viegas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p className="copy-right">
        <span>Costs</span> &copy; 2022
      </p>
    </footer>
  );
}

export default Footer;
