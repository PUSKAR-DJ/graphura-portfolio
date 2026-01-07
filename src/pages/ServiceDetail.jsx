import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";
import logo from "../assets/bg removed.png";

const ServiceDetail = () => {
    const { id } = useParams();
    const service = servicesData[id];

    if (!service) {
        return <Navigate to="/services" />;
    }

    return (
        <div className="service-detail-page">
            <section className="hero service-hero">
                <div className="particles-container">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="particle"></div>
                    ))}
                </div>

                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">
                                <span className="title-line">{service.heroTitle[0]}</span>
                                <span className="title-highlight">{service.heroTitle[1]}</span>
                                <span className="title-line">{service.heroTitle[2]}</span>
                            </h1>
                            <p className="hero-subtitle">
                                {service.subtitle}
                            </p>
                            <div className="hero-buttons">
                                <Link to="/contact" className="btn btn-accent btn-glow">
                                    <span>Get Started</span>
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="hero-visual">
                            <div className="hero-image-container">
                                <motion.div
                                    className="hero-image"
                                    whileHover={{ translateY: -20, scale: 1.05 }}
                                >
                                    <img src={logo} alt={service.title} />
                                </motion.div>
                                <div className="image-glow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {service.benefits && service.benefits.length > 0 && (
                <section className="section why-choose-us">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Why Choose Our {service.title}?</h2>
                        </div>
                        <div className="benefits-grid">
                            {service.benefits.map((b, i) => (
                                <motion.div
                                    className="benefit-item"
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <i className={`fas ${b.icon}`}></i>
                                    <h3>{b.title}</h3>
                                    <p>{b.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {service.packages && service.packages.length > 0 && (
                <section className="section packages-section">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Our {service.title} Packages</h2>
                            <p className="section-subtitle">Custom plans designed for your growth</p>
                        </div>
                        <div className="packages-grid">
                            {service.packages.map((pkg, i) => (
                                <motion.div
                                    className={`package-card ${pkg.popular ? "popular" : ""}`}
                                    key={i}
                                    whileHover={{ translateY: -10 }}
                                >
                                    {pkg.popular && <div className="popular-badge">Most Popular</div>}
                                    <h3>{pkg.name}</h3>
                                    <div className="price">{pkg.price}<span>/month</span></div>
                                    <ul className="features">
                                        {pkg.features.map((f, j) => (
                                            <li key={j}><i className="fas fa-check"></i> {f}</li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className="btn btn-accent">Get Started</Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h3>Ready to scale your business with {service.title}?</h3>
                        <p>Our experts are ready to help you achieve your digital goals.</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-glow">Get Free Consultation</Link>
                            <Link to="/services" className="btn btn-outline">All Services</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
