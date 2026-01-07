import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-about">
                            <h3>Graphura</h3>
                            <p>
                                Your trusted digital marketing partner helping businesses grow
                                their online presence and reach their target audience
                                effectively.
                            </p>
                            <div className="footer-social">
                                <a href="https://www.facebook.com/share/19nKAMTopZ/">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://share.google/w9KeZZ72v8KQxGpFn">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/graphura-india-private-limited/">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://www.instagram.com/graphura.in?igsh=MXNqNmtidzljNDJlag==">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div className="footer-links">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/branding">Branding</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer-services">
                            <h4>Our Services</h4>
                            <ul>
                                <li><Link to="/services/seo">SEO Services</Link></li>
                                <li><Link to="/services/smm">Social Media Marketing</Link></li>
                                <li><Link to="/services/smo">Social Media Optimization</Link></li>
                                <li><Link to="/services/flyers">Flyers</Link></li>
                                <li><Link to="/services/content-writing">Content Writing</Link></li>
                            </ul>
                        </div>
                        <div className="footer-contact">
                            <h4>Contact Us</h4>
                            <ul>
                                <li>
                                    <i className="fas fa-map-marker-alt"></i> Gurgaon, Haryana,
                                    India
                                </li>
                                <li>
                                    <i className="fas fa-phone"></i> +91 7378021327
                                </li>
                                <li>
                                    <i className="fas fa-envelope"></i> official@graphura.in
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2025 Graphura India Private Limited. All Rights Reserved.</p>
                        <ul>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms of Service</Link></li>
                            <li><Link to="/cookies">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>

            {/* WhatsApp Chat Button */}
            <div className="whatsapp-chat">
                <a
                    href="https://wa.me/+917378021327"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chat-btn"
                >
                    <i className="fab fa-whatsapp"></i>
                </a>
            </div>
        </>
    );
};

export default Footer;
