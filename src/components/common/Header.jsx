import './Header.css';
import { Link } from 'react-router-dom';

function Header({ title }) {
  return(
    <div className="header">
      <h1>{title}</h1>
      <nav className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;