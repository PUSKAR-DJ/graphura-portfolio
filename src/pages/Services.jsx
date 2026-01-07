import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";

const Services = () => {
    return (
        <div className="services-page">
            <section className="section services-hero">
                <div className="container">
                    <div className="section-header">
                        <h1 className="section-title">Our Expert Services</h1>
                        <p className="section-subtitle">
                            Comprehensive digital marketing solutions to grow your brand and reach your audience.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section services-listing">
                <div className="container">
                    <div className="services-grid">
                        {Object.entries(servicesData).map(([id, service], i) => (
                            <motion.div
                                key={id}
                                className="service-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: (i % 3) * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ translateY: -10 }}
                            >
                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.subtitle}</p>
                                    <Link to={`/services/${id}`} className="btn btn-text">
                                        Learn More <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h3>Not sure which service you need?</h3>
                        <p>Our experts can help you choose the right strategy for your business.</p>
                        <Link to="/contact" className="btn btn-primary btn-glow">Get Free Consultation</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
