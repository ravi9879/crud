import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          <i className="bi bi-stack me-2"></i>
          School App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link${location.pathname === '/' ? ' active' : ''}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link${location.pathname === '/student' ? ' active' : ''}`}
                to="/student"
              >
                Student
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link${location.pathname === '/teacher' ? ' active' : ''}`}
                to="/teacher"
              >
                Teacher
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link${location.pathname === '/admin' ? ' active' : ''}`}
                to="/admin"
              >
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;