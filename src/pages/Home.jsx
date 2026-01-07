import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/bg removed.png";
import teamImg from "../assets/team.svg";
import CalendarComponent from "../components/Calendar/Calendar";

// Components for Home page
const StatCounter = ({ target, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(target);
        if (start === end) return;

        let totalMiliseconds = 2000;
        let incrementTime = (totalMiliseconds / end) * 5;

        let timer = setInterval(() => {
            start += 5;
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

const TypingText = () => {
    const phrases = [
        "SEO Optimization",
        "Social Media Marketing",
        "Content Strategy",
        "Brand Development",
        "Digital Advertising",
    ];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (subIndex === phrases[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 2000);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % phrases.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === phrases[index].length ? 1000 : 150, parseInt(Math.random() * 150)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return <span className="typing-text">{phrases[index].substring(0, subIndex)}</span>;
};

const ServiceCard = ({ icon, title, description, features, stats, link, delay }) => {
    return (
        <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
        >
            <div className="service-card-inner">
                <div className="service-icon">
                    <i className={`fas ${icon}`}></i>
                    <div className="icon-glow"></div>
                </div>
                <div className="service-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <ul className="service-features">
                        {features.map((f, i) => (
                            <li key={i}>
                                <i className="fas fa-check"></i> {f}
                            </li>
                        ))}
                    </ul>
                    <div className="service-stats">
                        {stats.map((s, i) => (
                            <div className="stat" key={i}>
                                <span className="stat-value">{s.value}</span>
                                <span className="stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                    <Link to={link} className="btn btn-text">
                        <span>Learn More</span>
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
                <div className="card-glow"></div>
            </div>
        </motion.div>
    );
};

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="particles-container">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="particle"></div>
                    ))}
                </div>

                <div className="floating-elements">
                    <div className="floating-icon" style={{ "--speed": "2" }}>
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <div className="floating-icon" style={{ "--speed": "1.5" }}>
                        <i className="fas fa-rocket"></i>
                    </div>
                    <div className="floating-icon" style={{ "--speed": "2.5" }}>
                        <i className="fas fa-bullseye"></i>
                    </div>
                    <div className="floating-icon" style={{ "--speed": "1.8" }}>
                        <i className="fas fa-trophy"></i>
                    </div>
                </div>

                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <div className="hero-badge"></div>
                            <h1 className="hero-title">
                                <span className="title-line">Transform Your</span>
                                <span className="title-highlight">Digital Presence</span>
                                <span className="title-line">Into Success</span>
                            </h1>

                            <p className="hero-subtitle">
                                We don't just create campaigns, we create{" "}
                                <span className="highlight">digital revolutions</span> that
                                skyrocket your business to new heights. <TypingText />
                            </p>

                            <div className="hero-stats">
                                <StatCounter target="500" label="Happy Clients" />
                                <StatCounter target="1000" label="Projects Completed" />
                                <StatCounter target="300" label="% Average Growth" />
                            </div>

                            <div className="hero-buttons">
                                <Link to="/services" className="btn btn-accent btn-glow">
                                    <span>Explore Services</span>
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                                <Link to="/contact" className="btn btn-outline btn-outline-glow">
                                    <span>Get Free Consultation</span>
                                    <i className="fas fa-phone"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="hero-visual">
                            <div className="hero-image-container">
                                <motion.div
                                    className="hero-image"
                                    whileHover={{
                                        translateY: -30,
                                        rotate: 5,
                                        scale: 1.05,
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    <img src={logo} alt="Graphura Digital Marketing" />
                                </motion.div>
                                <div className="image-glow"></div>
                                <div className="floating-cards">
                                    <motion.div
                                        className="floating-card card-1"
                                        whileHover={{ translateY: -25, scale: 1.1 }}
                                    >
                                        <i className="fas fa-trending-up"></i>
                                        <span>+150% Growth</span>
                                    </motion.div>
                                    <motion.div
                                        className="floating-card card-2"
                                        whileHover={{ translateY: -25, scale: 1.1 }}
                                    >
                                        <i className="fas fa-users"></i>
                                        <span>10K+ Reach</span>
                                    </motion.div>
                                    <motion.div
                                        className="floating-card card-3"
                                        whileHover={{ translateY: -25, scale: 1.1 }}
                                    >
                                        <i className="fas fa-star"></i>
                                        <span>5.0 Rating</span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <div className="scroll-text">Scroll to explore</div>
                    <div className="scroll-arrow">
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section services-preview">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Services</h2>
                        <p className="section-subtitle">
                            Comprehensive digital marketing solutions tailored for your
                            business
                        </p>
                        <div className="section-decoration">
                            <div className="decoration-line"></div>
                            <div className="decoration-dot"></div>
                            <div className="decoration-line"></div>
                        </div>
                    </div>

                    <div className="services-grid">
                        <ServiceCard
                            icon="fa-search"
                            title="SEO Services"
                            description="Boost your online visibility and organic traffic with our comprehensive SEO strategies that drive real results."
                            features={[
                                "Keyword Research & Optimization",
                                "On-Page & Technical SEO",
                                "Content Strategy",
                                "Performance Tracking",
                            ]}
                            stats={[
                                { value: "+300%", label: "Traffic Increase" },
                                { value: "#1", label: "Google Rankings" },
                            ]}
                            link="/services/seo"
                            delay={0.1}
                        />
                        <ServiceCard
                            icon="fa-hashtag"
                            title="Social Media Management"
                            description="Engage your audience and grow your brand presence across all social platforms with our expert management."
                            features={[
                                "Content Creation & Curation",
                                "Community Management",
                                "Paid Advertising",
                                "Analytics & Reporting",
                            ]}
                            stats={[
                                { value: "+500%", label: "Engagement" },
                                { value: "10K+", label: "Followers" },
                            ]}
                            link="/services/smm"
                            delay={0.2}
                        />
                        <ServiceCard
                            icon="fa-pen-fancy"
                            title="Content Writing"
                            description="Tell your brand story with compelling content that resonates with your audience and drives conversions."
                            features={[
                                "Blog & Article Writing",
                                "Video Content Creation",
                                "Email Marketing",
                                "Content Strategy",
                            ]}
                            stats={[
                                { value: "+200%", label: "Lead Generation" },
                                { value: "95%", label: "Engagement Rate" },
                            ]}
                            link="/services/cw"
                            delay={0.3}
                        />
                    </div>

                    <div className="services-cta">
                        <div className="cta-content">
                            <h3>Ready to Transform Your Business?</h3>
                            <p>
                                Join 500+ satisfied clients who have achieved remarkable growth
                                with our digital marketing services.
                            </p>
                            <div className="cta-buttons">
                                <Link to="/services" className="btn btn-primary btn-glow">
                                    <span>View All Services</span>
                                    <i className="fas fa-rocket"></i>
                                </Link>
                                <Link to="/contact" className="btn btn-outline">
                                    <span>Get Free Consultation</span>
                                    <i className="fas fa-phone"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="section about-preview">
                <div className="container">
                    <div className="about-content">
                        <motion.div
                            className="about-image"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <img src={teamImg} alt="Graphura Team" />
                        </motion.div>
                        <motion.div
                            className="about-text"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="section-title">Who We Are</h2>
                            <p>
                                Graphura India Private Limited is a leading digital marketing
                                agency dedicated to helping small businesses and companies grow
                                their online presence.
                            </p>
                            <p>
                                Founded in 2015, we've helped over 500 clients achieve their
                                digital marketing goals through innovative strategies and
                                data-driven approaches.
                            </p>
                            <ul className="about-features">
                                <li>
                                    <i className="fas fa-check-circle"></i> 97% Client Retention Rate
                                </li>
                            </ul>
                            <Link to="/about" className="btn btn-secondary">
                                Our Story <i className="fas fa-arrow-right"></i>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section testimonials">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">What Our Clients Say</h2>
                        <p className="section-subtitle">Hear from businesses we've helped grow</p>
                    </div>

                    <TestimonialSlider />

                    <div className="testimonial-stats">
                        <div className="testimonial-stat">
                            <span className="number">300+</span>
                            <span className="label">Happy Clients</span>
                        </div>
                        <div className="testimonial-stat">
                            <span className="number">98%</span>
                            <span className="label">Satisfaction Rate</span>
                        </div>
                        <div className="testimonial-stat">
                            <span className="number">4.9/5</span>
                            <span className="label">Average Rating</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Preview */}
            <section className="section blog-preview">
                <div className="container">
                    <h2 className="section-title">From Our Blog</h2>
                    <p className="section-subtitle">Insights and trends in digital marketing</p>
                    <div className="blog-grid">
                        {[
                            {
                                category: "SEO",
                                title: "Top SEO Trends to Watch in 2025",
                                date: "July 15, 2025",
                                desc: "Discover the emerging SEO trends that will dominate the digital landscape in 2025 and how to prepare for them.",
                            },
                            {
                                category: "Social Media",
                                title: "Mastering Social Media Algorithms",
                                date: "June 28, 2025",
                                desc: "Learn how to work with social media algorithms to maximize your organic reach and engagement.",
                            },
                            {
                                category: "Content",
                                title: "The Power of Storytelling in Content Marketing",
                                date: "June 10, 2025",
                                desc: "How compelling narratives can transform your content marketing strategy and drive better results.",
                            },
                        ].map((post, i) => (
                            <article className="blog-card" key={i}>
                                <div className="blog-image">
                                    <div className="blog-placeholder" style={{ background: "#eee", height: "200px" }}></div>
                                    <span className="blog-category">{post.category}</span>
                                </div>
                                <div className="blog-content">
                                    <h3>{post.title}</h3>
                                    <p className="blog-date">{post.date}</p>
                                    <p>{post.desc}</p>
                                    <Link to="/blog" className="btn btn-text">
                                        Read More <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section Preview */}
            <section id="contact" className="section contact">
                <div className="container">
                    <h2 className="section-title">Schedule a Meeting</h2>
                    <div className="contact-content">
                        <div className="calendar-container">
                            <CalendarComponent />
                        </div>

                        <div className="contact-info">
                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="info-content">
                                    <h3>Our Office</h3>
                                    <p>Gurgaon, Haryana, India</p>
                                </div>
                            </div>
                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="info-content">
                                    <h3>Phone</h3>
                                    <p><a href="tel:+917378021327">+91 7378021327</a></p>
                                    <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                            <div className="info-card">
                                <div className="info-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="info-content">
                                    <h3>Email</h3>
                                    <p><a href="mailto:official@graphura.in">official@graphura.in</a></p>
                                </div>
                            </div>
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
        </div>
    );
};

const TestimonialSlider = () => {
    const testimonials = [
        {
            name: "Rahul Sharma",
            role: "CEO, TechSolutions",
            text: "Graphura transformed our online presence. Our website traffic increased by 300% within just 3 months of working with them. Their team is professional, responsive, and truly understands digital marketing.",
        },
        {
            name: "Priya Patel",
            role: "Marketing Director, FashionHub",
            text: "The social media strategy developed by Graphura helped us double our engagement and significantly increase our follower base. They consistently deliver creative content that aligns with our brand.",
        },
        {
            name: "Vikram Mehta",
            role: "Founder, EduGrow",
            text: "Their content marketing services are exceptional. Our blog traffic increased by 150% and we're generating quality leads consistently. Graphura understands our industry and audience perfectly.",
        },
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <div className="testimonial-slider">
            <div className="testimonial-track">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        className={`testimonial ${i === current ? "active" : ""}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: i === current ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ display: i === current ? "block" : "none" }}
                    >
                        <div className="testimonial-content">
                            <div className="quote-icon">
                                <i className="fas fa-quote-right"></i>
                            </div>
                            <div className="stars">
                                {[...Array(5)].map((_, j) => (
                                    <i key={j} className="fas fa-star"></i>
                                ))}
                            </div>
                            <p className="testimonial-text">"{t.text}"</p>
                            <div className="client-info">
                                <div className="client-details">
                                    <h4>{t.name}</h4>
                                    <p>{t.role}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="slider-controls">
                <div className="dots">
                    {testimonials.map((_, i) => (
                        <span
                            key={i}
                            className={`dot ${i === current ? "active" : ""}`}
                            onClick={() => setCurrent(i)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
