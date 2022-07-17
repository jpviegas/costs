import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/company">Company</Link>
      <Link to="/newproject">New Project</Link>
    </nav>
  );
}

export default Navbar;
