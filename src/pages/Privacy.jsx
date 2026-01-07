import React, { useState, useEffect } from "react";
import logo from "../assets/bg removed.png";

const Privacy = () => {
    return (
        <div className="privacy-page">
            <section className="privacy-hero hero">
                <div className="particles-container">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="particle"></div>
                    ))}
                </div>
                <div className="container">
                    <div className="hero-content">
                        <div>
                            <span className="badge-text">Policy</span>
                            <h1 className="hero-title">
                                <span className="title-highlight">Privacy Policy</span>
                            </h1>
                            <p className="hero-subtitle">Last updated: July 28, 2025</p>
                        </div>
                        <div className="hero-visual">
                            <div className="hero-image-container">
                                <div className="hero-image">
                                    <img src={logo} alt="Graphura Privacy" />
                                </div>
                                <div className="image-glow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section privacy-content">
                <div className="container">
                    <div className="privacy-section">
                        <h2>Introduction</h2>
                        <p>
                            Graphura India Private Limited ("us", "we", or "our") operates the
                            https://www.graphura.com website (the "Service"). This page
                            informs you of our policies regarding the collection, use, and
                            disclosure of personal data when you use our Service and the
                            choices you have associated with that data.
                        </p>
                        <p>
                            We use your data to provide and improve the Service. By using the
                            Service, you agree to the collection and use of information in
                            accordance with this policy.
                        </p>
                    </div>

                    <div className="privacy-section">
                        <h2>Information Collection and Use</h2>
                        <p>
                            We collect several different types of information for various
                            purposes to provide and improve our Service to you.
                        </p>

                        <h3>Types of Data Collected</h3>
                        <div className="data-types">
                            <div className="data-type">
                                <i className="fas fa-user"></i>
                                <h4>Personal Data</h4>
                                <p>
                                    While using our Service, we may ask you to provide us with
                                    certain personally identifiable information that can be used
                                    to contact or identify you ("Personal Data").
                                </p>
                                <ul>
                                    <li>Email address</li>
                                    <li>First name and last name</li>
                                    <li>Phone number</li>
                                    <li>Address, State, ZIP/Postal code, City</li>
                                    <li>Cookies and Usage Data</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Additional sections can be added here */}
                </div>
            </section>
        </div>
    );
};

export default Privacy;
