import React from 'react';
import { Link } from 'react-scroll';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Footer from './Footer';


const Navbar = () => {
    const state = useSelector((state) => state.handleCart);

    return (
        <div className="bg-dark" id="layout">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
                <div className="container">
                    <Link className="navbar-brand fw-bold" to="/">Global Mart</Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item" key="1">
                            <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                        </li>
                        <li className="nav-item" key="2">
                            <Link className="nav-link"  to="about">About</Link>
                        </li>
                        <li className="nav-item" key="3">
                            <Link className="nav-link"  to="products">Products</Link>
                        </li>
                        <li className="nav-item" key="4">
                            <Link className="nav-link"  to="contact">Contact</Link>
                        </li>
                    </ul>
                    <form className="button">
                        <NavLink to="/login" className="btn">
                            <i className="fa fa-sign-in me-1 text-white"> LogIn</i>
                        </NavLink>
                        <NavLink to="/signup" className="btn ms-2">
                            <i className="fa fa-user-plus me-1 text-white"> SignUp</i>
                        </NavLink>
                        <NavLink to="/cart" className="btn ms-2">
                            <i className="fa fa-shopping-cart me-1 text-white"> cart ({state.length})</i>
                        </NavLink>
                    </form>
                    </div>
                </div>
            </nav>
            <Home />
            <Products />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default Navbar;
