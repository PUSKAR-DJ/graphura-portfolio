import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/bg removed.png";
import CalendarComponent from "../components/Calendar/Calendar";

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item">
            <button
                className={`faq-question ${isOpen ? "active" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                {question}
                <i className={`fas fa-chevron-${isOpen ? "up" : "down"}`}></i>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const StatCounter = ({ target, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(target);
        if (start === end) return;

        let totalMiliseconds = 2000;
        let incrementTime = (totalMiliseconds / end) * 5;

        let timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, [target]);

    return (
        <div className="stat-item">
            <span className="stat-number">{count}</span>
            <span className="stat-label">{label}</span>
        </div>
    );
};

const Contact = () => {
    const faqs = [
        {
            question: "How quickly can you start working on my project?",
            answer: "We can typically start your project within 1-2 business days after our initial consultation and agreement. For urgent projects, we offer expedited onboarding within 24 hours.",
        },
        {
            question: "What information do you need to get started?",
            answer: "We'll need details about your business goals, target audience, current digital presence, and any specific requirements. We'll guide you through this during our consultation call.",
        },
        {
            question: "Do you offer custom packages?",
            answer: "Absolutely! We understand every business is unique. We can create custom packages tailored to your specific needs and budget requirements.",
        },
        {
            question: "What is your response time for support?",
            answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, our priority support clients receive responses within 2-4 hours.",
        },
    ];

    return (
        <div className="contact-page">
            {/* Contact Hero */}
            <section className="hero contact-hero">
                <div className="particles-container">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="particle"></div>
                    ))}
                </div>

                <div className="floating-elements">
                    <div className="floating-icon" style={{ "--speed": "2" }}>
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="floating-icon" style={{ "--speed": "1.5" }}>
                        <i className="fas fa-phone"></i>
                    </div>
                    <div className="floating-icon" style={{ "--speed": "2.5" }}>
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="floating-icon" style={{ "--speed": "1.8" }}>
                        <i className="fas fa-comments"></i>
                    </div>
                </div>

                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">
                                <span className="title-line">Get in Touch</span>
                                <span className="title-highlight">With Graphura</span>
                                <span className="title-line">Start Your Journey</span>
                            </h1>

                            <div className="hero-stats">
                                <StatCounter target="24" label="Hours Response Time" />
                                <StatCounter target="500" label="Happy Clients" />
                                <StatCounter target="100" label="% Free Consultation" />
                            </div>
                        </div>

                        <div className="hero-visual">
                            <div className="hero-image-container">
                                <motion.div
                                    className="hero-image"
                                    whileHover={{ translateY: -20, rotate: 5, scale: 1.05 }}
                                >
                                    <img src={logo} alt="Graphura Logo" />
                                </motion.div>
                                <div className="image-glow"></div>
                                <div className="floating-cards">
                                    <div className="floating-card card-1">
                                        <i className="fas fa-headset"></i>
                                        <span>24/7 Support</span>
                                    </div>
                                    <div className="floating-card card-2">
                                        <i className="fas fa-clock"></i>
                                        <span>Quick Response</span>
                                    </div>
                                    <div className="floating-card card-3">
                                        <i className="fas fa-handshake"></i>
                                        <span>Free Consultation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section id="contact" className="section contact">
                <div className="container">
                    <h2 className="section-title">Schedule a Meeting</h2>
                    <div className="contact-content">
                        <div className="calendar-container">
                            <CalendarComponent />
                        </div>

                        <div className="contact-info">
                            <motion.div
                                className="info-card"
                                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                            >
                                <div className="info-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="info-content">
                                    <h3>Our Office</h3>
                                    <p>Gurgaon, Haryana, India</p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="info-card"
                                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                            >
                                <div className="info-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="info-content">
                                    <h3>Phone</h3>
                                    <p><a href="tel:+917378021327">+91 7378021327</a></p>
                                    <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="info-card"
                                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                            >
                                <div className="info-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="info-content">
                                    <h3>Email</h3>
                                    <p><a href="mailto:official@graphura.in">official@graphura.in</a></p>
                                </div>
                            </motion.div>

                            <div className="contact-social">
                                <h3>Follow Us</h3>
                                <div className="social-links">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section faq-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <p className="section-subtitle">
                            Get answers to common questions about our services
                        </p>
                    </div>
                    <div className="faq-accordion">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
