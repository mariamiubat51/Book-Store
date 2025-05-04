import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/images/logo.jpg';
import '../style.css';

const Header = () => {
  return (
    <header className="bg-body-tertiary">
      <section>
        <nav className="navbar bg-body-tertiary">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Book Store Logo" />
            </Link>
            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-search"></i>
              </span>
            </form>
          </div>
        </nav>
      </section>

      <section className="bg-dark">
        <div className="container">
          <div className="row">

            {/* Left Navigation */}
            <div className="col-md-7">
              <nav className="navbar navbar-expand-lg">
                <div className="p-2">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarLeftAlignExample"
                    aria-controls="navbarLeftAlignExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="fas fa-bars"></i>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarLeftAlignExample">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
                      <li className="nav-item">
                        <Link className="nav-link active text-white" to="/">HOME</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-white" to="/shop">SHOP</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-white" to="/product">PRODUCT</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-white" to="/blog">BLOG</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-white" to="/about">ABOUT</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-white" to="/contact">CONTACT</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>

            {/* Right Navigation */}
            <div className="col-md-5">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid justify-content-end">
                  <ul className="navbar-nav d-flex flex-row p-2">
                    <li className="nav-item me-3">
                      <a className="nav-link text-white" href="#">
                        <i className="fas fa-shopping-cart"></i>
                      </a>
                    </li>
                    <li className="nav-item me-3">
                      <a className="nav-link text-white" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="nav-item dropdown me-3">
                      <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fas fa-user"></i>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                    <li className="nav-item me-3">
                      <Link className="nav-link text-white" to="/signup">
                        <i className="fa-solid fa-right-to-bracket"></i> Sign Up
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
