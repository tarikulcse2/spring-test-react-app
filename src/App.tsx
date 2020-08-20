import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/factorial-calculation">Factorial</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
