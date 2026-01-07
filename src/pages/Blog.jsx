import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/bg removed.png";

const BlogCard = ({ post, delay }) => {
    return (
        <motion.article
            className="blog-post"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
        >
            <div className="post-image">
                <div className="blog-placeholder" style={{ background: "#eee", height: "200px" }}></div>
                {post.category && <span className="blog-category">{post.category}</span>}
            </div>
            <div className="post-content">
                <h3>{post.title}</h3>
                <p className="post-date">{post.date}</p>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="btn-text">
                    Read More <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </motion.article>
    );
};

const Blog = () => {
    const featuredPosts = [
        {
            id: "seo-strategies",
            title: "5 Essential SEO Strategies for Small Businesses",
            excerpt: "Discover the most effective SEO techniques to boost your online presence and drive organic traffic to your website.",
            date: "August 10, 2025",
        },
        {
            id: "social-media-trends",
            title: "Social Media Trends to Watch in 2025",
            excerpt: "Stay ahead of the curve with these emerging social media trends that will shape digital marketing in the coming year.",
            date: "August 5, 2025",
        },
    ];

    const recentPosts = [
        {
            id: "engaging-content",
            title: "How to Create Engaging Content for Your Audience",
            excerpt: "Learn the secrets to creating content that resonates with your target market and drives engagement.",
            date: "July 28, 2025",
        },
        {
            id: "email-marketing",
            title: "The Power of Email Marketing in 2025",
            excerpt: "Why email marketing remains one of the most effective digital channels for customer acquisition and retention.",
            date: "July 20, 2025",
        },
        {
            id: "branding-tips",
            title: "Branding Tips for Startups",
            excerpt: "Establish a strong brand identity from day one with these expert tips for startups and small businesses.",
            date: "July 15, 2025",
        },
        {
            id: "digital-advertising",
            title: "Maximizing ROI with Digital Advertising",
            excerpt: "Strategies to optimize your digital advertising campaigns and get the best return on your investment.",
            date: "July 10, 2025",
        },
        {
            id: "mobile-optimization",
            title: "Importance of Mobile Optimization",
            excerpt: "Why mobile-friendly design is crucial for your website's success in today's mobile-first world.",
            date: "July 5, 2025",
        },
        {
            id: "content-strategy",
            title: "Building a Content Strategy That Converts",
            excerpt: "Learn how to develop a content strategy that not only engages but also converts visitors into customers.",
            date: "June 30, 2025",
        },
    ];

    return (
        <div className="blog-page">
            {/* Blog Hero */}
            <section className="blog-hero">
                <div className="particles-container">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="particle"></div>
                    ))}
                </div>

                <div className="floating-elements">
                    <div className="floating-icon" style={{ "--speed": "2" }}>
                        <i className="fas fa-pen-nib"></i>
                    </div>
                    <div className="floating-icon" style={{ "--speed": "1.5" }}>
                        <i className="fas fa-feather"></i>
                    </div>
                    <div className="floating-icon" style={{ "--speed": "2.5" }}>
                        <i className="fas fa-book-open"></i>
                    </div>
                    <div className="floating-icon" style={{ "--speed": "1.8" }}>
                        <i className="fas fa-blog"></i>
                    </div>
                </div>

                <div className="container">
                    <div className="blog-hero-content">
                        <div className="blog-hero-text">
                            <h1 className="blog-hero-title">
                                <span className="title-line">Explore Expert Articles &</span>
                                <span className="title-highlight">Industry Trends</span>
                                <span className="title-line">Master Digital Marketing</span>
                            </h1>
                            <p className="blog-hero-subtitle">
                                Discover actionable tips and strategies to grow your business
                                effectively with our expert insights.{" "}
                                <span className="highlight">Stay ahead of the curve</span>
                            </p>

                            <div className="blog-hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">100+</span>
                                    <span className="stat-label">Articles Published</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">50K+</span>
                                    <span className="stat-label">Monthly Readers</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">95%</span>
                                    <span className="stat-label">Success Rate</span>
                                </div>
                            </div>

                            <div className="blog-hero-buttons">
                                <a href="#featured-posts" className="btn btn-glow">
                                    <span>Read Latest Posts</span>
                                    <i className="fas fa-arrow-down"></i>
                                </a>
                                <Link to="/contact" className="btn btn-outline-glow">
                                    <span>Subscribe</span>
                                    <i className="fas fa-envelope"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="blog-hero-visual">
                            <div className="blog-hero-image-container">
                                <motion.div
                                    className="blog-hero-image"
                                    whileHover={{ translateY: -20, rotate: -2, scale: 1.05 }}
                                >
                                    <img src={logo} alt="Graphura Blog" />
                                </motion.div>
                                <div className="image-glow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            <section id="featured-posts" className="section featured-posts">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Featured Posts</h2>
                        <p className="section-subtitle">Discover our most popular articles</p>
                    </div>
                    <div className="featured-posts-grid">
                        {featuredPosts.map((post, i) => (
                            <BlogCard key={post.id} post={post} delay={i * 0.2} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Articles */}
            <section className="section recent-posts">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Latest Articles</h2>
                        <p className="section-subtitle">Stay updated with our newest content</p>
                    </div>
                    <div className="posts-grid">
                        {recentPosts.map((post, i) => (
                            <BlogCard key={post.id} post={post} delay={(i % 3) * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Subscribe Section */}
            <section className="subscribe-section section">
                <div className="container">
                    <div className="subscribe-content">
                        <h2>Stay Updated with Graphura</h2>
                        <p>
                            Subscribe to our newsletter for the latest digital marketing
                            insights, tips, and industry trends.
                        </p>
                        <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your email address" required />
                            <button type="submit" className="btn btn-accent">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
