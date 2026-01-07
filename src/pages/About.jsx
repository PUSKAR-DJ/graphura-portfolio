import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/bg removed.png";
import officeImg from "../assets/office.png";
import kamalImg from "../assets/kamal .png";
import hetImg from "../assets/het.png";
import aasthaImg from "../assets/aastha.png";
import harshitaImg from "../assets/harshita.png";
import bansriImg from "../assets/bansri .png";

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

const About = () => {
    const team = [
        {
            img: kamalImg,
            name: "Kamal Yadav",
            role: "Founder",
            bio: "With over 10 years in digital marketing, Kamal leads Graphura's strategic vision and growth initiatives.",
            linkedin: "https://www.linkedin.com/in/kamalyadavksg",
            instagram: "https://www.instagram.com/kamalyadav.ksg",
        },
        {
            img: hetImg,
            name: "Het Patel",
            role: "Founder",
            bio: "Het is passionate about building long-term client relationships and mentoring a high-performing team.",
            linkedin: "https://www.linkedin.com/in/het-patel-39195728b",
            instagram: "https://www.instagram.com/patel_.1172",
        },
        {
            img: aasthaImg,
            name: "Astha Tyagi",
            role: "Head of Digital Marketing Department",
            bio: "Astha specializes in creating data-driven strategies that align with client goals and deliver consistent ROI",
            linkedin: "#",
            instagram: "#",
        },
        {
            img: harshitaImg,
            name: "Harshita Chauhan",
            role: "Head of Content Writing Department",
            bio: "Harshita leads our creative team in developing compelling content and visual strategies.",
            linkedin: "https://www.linkedin.com/in/harshita-chauhan-84b703346",
            instagram: "https://www.instagram.com/sunsetsandsunrises25",
        },
        {
            img: bansriImg,
            name: "Bansari Parikh",
            role: "Social Media Lead",
            bio: "Bansari creates engaging social media campaigns that build brand communities.",
            linkedin: "https://www.linkedin.com/in/bansari-parikh-746a84376",
            instagram: "https://www.instagram.com/art_library.28",
        },
    ];

    return (
        <div className="about-page">
            {/* About Hero */}
            <section className="page-hero about-hero">
                <div className="particles-container">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="particle"></div>
                    ))}
                </div>

                <div className="floating-elements">
                    <div className="floating-icon" style={{ "--speed": "2" }}>
                        <i className="fas fa-users"></i>
                    </div>
                    <div className="floating-icon" style={{ "--speed": "1.5" }}>
                        <i className="fas fa-lightbulb"></i>
                    </div>
                    <div className="floating-icon" style={{ "--speed": "2.5" }}>
                        <i className="fas fa-handshake"></i>
                    </div>
                    <div className="floating-icon" style={{ "--speed": "1.8" }}>
                        <i className="fas fa-trophy"></i>
                    </div>
                </div>

                <div className="container">
                    <div className="hero-content">
                        <div className="hero-visual">
                            <div className="hero-image-container">
                                <motion.div
                                    className="hero-image"
                                    whileHover={{ translateY: -20, rotate: 3, scale: 1.05 }}
                                >
                                    <img src={logo} alt="Graphura Team" />
                                </motion.div>
                                <div className="image-glow"></div>
                                <div className="floating-cards">
                                    <div className="floating-card card-1">
                                        <i className="fas fa-award"></i>
                                        <span>Industry Awards</span>
                                    </div>
                                    <div className="floating-card card-2">
                                        <i className="fas fa-star"></i>
                                        <span>5-Star Rating</span>
                                    </div>
                                    <div className="floating-card card-3">
                                        <i className="fas fa-chart-line"></i>
                                        <span>Proven Results</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-text">
                            <div className="hero-badge">
                                <span className="badge-text">🌟 10+ Years of Excellence</span>
                            </div>

                            <h1 className="hero-title">
                                <span className="title-line">About</span>
                                <span className="title-highlight">Graphura</span>
                                <span className="title-line">Digital Pioneers</span>
                            </h1>

                            <p className="hero-subtitle">
                                Empowering businesses through{" "}
                                <span className="highlight">innovative digital marketing</span>{" "}
                                solutions that drive real results.
                            </p>

                            <div className="hero-stats">
                                <StatCounter target="500" label="Happy Clients" />
                                <StatCounter target="10" label="Years Experience" />
                                <StatCounter target="50" label="Team Members" />
                            </div>

                            <div className="hero-buttons">
                                <a href="#team" className="btn btn-accent btn-glow">
                                    <span>Meet Our Team</span>
                                    <i className="fas fa-users"></i>
                                </a>
                                <a
                                    href="#contact"
                                    className="btn btn-outline btn-outline-glow"
                                >
                                    <span>Get in Touch</span>
                                    <i className="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* History */}
            <section className="section history-section">
                <div className="container">
                    <div className="history-content">
                        <motion.div
                            className="history-text"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="section-title">Our History</h2>
                            <p>
                                At Graphura India Private Limited, we believe every brand has a
                                story waiting to be told — it just needs the right stage and
                                spotlight. Based in Gurgaon, Haryana, we act as the bridge
                                between ambition and attention, transforming small sparks of
                                ideas into powerful digital flames.
                            </p>
                            <p>
                                We see branding as more than logos, colors, or campaigns. It is
                                the heartbeat of a business, the voice that travels beyond
                                borders, and the identity that lingers in the minds of people.
                                Graphura crafts digital journeys where businesses don’t just
                                exist online — they thrive, inspire, and lead.
                            </p>
                            <p>
                                Graphura is where small businesses dream big and big ideas find
                                their loudest echo. For us, growth isn’t just a metric — it’s a
                                story of transformation, trust, and timeless impact.
                            </p>
                        </motion.div>
                        <motion.div
                            className="history-image"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <img src={officeImg} alt="Graphura Office" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="section mission-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Mission</h2>
                    </div>
                    <div className="mission-content">
                        <p>
                            At Graphura India Private Limited, our mission is to transform
                            brand narratives into enduring digital legacies. By fusing
                            imagination with strategy and innovation with intent, we
                            orchestrate experiences that cultivate trust, accelerate growth,
                            and create profound impact.
                        </p>
                        <p>
                            We strive to be the catalyst of transformation for emerging
                            businesses, enabling them to rise with confidence and command
                            their rightful space in the digital arena. For us, every endeavor
                            is not merely marketing — it is the art of translating vision into
                            influence and ambition into timeless achievement.
                        </p>
                    </div>
                    <div className="values-grid">
                        {[
                            {
                                icon: "fa-bullseye",
                                title: "Focus on Results",
                                desc: "We measure our success by the tangible results we deliver for our clients.",
                            },
                            {
                                icon: "fa-lightbulb",
                                title: "Continuous Innovation",
                                desc: "We stay ahead of trends to provide cutting-edge marketing solutions.",
                            },
                            {
                                icon: "fa-handshake",
                                title: "Client Partnership",
                                desc: "We view every client relationship as a long-term partnership.",
                            },
                            {
                                icon: "fa-chart-line",
                                title: "Data-Driven",
                                desc: "All our strategies are backed by solid data and analytics.",
                            },
                        ].map((v, i) => (
                            <motion.div
                                className="value-card"
                                key={i}
                                whileHover={{ translateY: -10 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <i className={`fas ${v.icon}`}></i>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section id="team" className="section team-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Meet Our Team</h2>
                        <p className="section-subtitle">
                            The passionate professionals behind Graphura's success
                        </p>
                    </div>
                    <div className="team-grid">
                        {team.map((member, i) => (
                            <motion.div
                                className="team-member"
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="member-image">
                                    <img src={member.img} alt={member.name} />
                                </div>
                                <h3>{member.name}</h3>
                                <p className="position">{member.role}</p>
                                <p className="bio">{member.bio}</p>
                                <div className="social-links">
                                    <a href={member.linkedin} target="_blank" rel="noreferrer">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href={member.instagram} target="_blank" rel="noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
