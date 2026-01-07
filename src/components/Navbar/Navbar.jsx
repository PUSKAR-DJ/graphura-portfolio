import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/bg removed.png";
import "../../styles/navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(false);
    }, [location]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
            document.body.classList.remove("menu-open");
        } else {
            document.body.classList.add("menu-open");
        }
    };

    const toggleDropdown = (e) => {
        if (window.innerWidth <= 900) {
            e.preventDefault();
            setActiveDropdown(!activeDropdown);
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/" aria-label="Graphura Home">
                        <img src={logo} alt="Graphura Logo" />
                    </Link>
                    <div
                        className={`navbar-toggle ${isOpen ? "active" : ""}`}
                        aria-label="Toggle Menu"
                        aria-expanded={isOpen}
                        role="button"
                        tabIndex="0"
                        onClick={toggleMenu}
                    >
                        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
                    </div>
                </div>
                <div className="navbar-menu">
                    <ul className={`navbar-nav ${isOpen ? "active" : ""}`} role="menubar" aria-label="Primary Navigation">
                        <li role="none">
                            <Link
                                role="menuitem"
                                to="/"
                                className={location.pathname === "/" ? "active" : ""}
                            >
                                Home
                            </Link>
                        </li>

                        {/* Services Dropdown menu */}
                        <li className={`nav-dropdown ${activeDropdown ? "active" : ""}`} role="none">
                            <a
                                href="#"
                                className="dropdown-toggle"
                                role="menuitem"
                                aria-haspopup="true"
                                aria-expanded={activeDropdown}
                                tabIndex="0"
                                onClick={toggleDropdown}
                            >
                                Services <i className="fas fa-chevron-down" aria-hidden="true"></i>
                            </a>
                            <ul
                                className={`dropdown-menu ${activeDropdown ? "active" : ""}`}
                                role="menu"
                                aria-label="Services submenu"
                            >
                                <li role="none"><Link role="menuitem" to="/services/seo">SEO Services</Link></li>
                                <li role="none"><Link role="menuitem" to="/services/smm">Social Media Marketing</Link></li>
                                <li role="none"><Link role="menuitem" to="/services/smo">Social Media Optimization</Link></li>
                                <li role="none"><Link role="menuitem" to="/services/flyers">Flyers</Link></li>
                                <li role="none"><Link role="menuitem" to="/services/cw">Content Writing</Link></li>
                                <li role="none"><Link role="menuitem" to="/services/thumbnail">Thumbnail Design</Link></li>
                                <li role="none"><Link role="menuitem" to="/services/banner">Banner Design</Link></li>
                                <li role="none"><Link role="menuitem" to="/services/logo">Logo Design</Link></li>
                                <li role="none"><Link role="menuitem" to="/services/card">Business Card Design</Link></li>
                                <li role="none"><Link role="menuitem" to="/services/poster">Poster Design</Link></li>
                            </ul>
                        </li>

                        <li role="none"><Link role="menuitem" to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</Link></li>
                        <li role="none"><Link role="menuitem" to="/blog" className={location.pathname === "/blog" ? "active" : ""}>Blog</Link></li>
                        <li role="none">
                            <Link
                                role="menuitem"
                                to="/contact"
                                className="btn btn-primary"
                                style={{ color: "#fff" }}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
