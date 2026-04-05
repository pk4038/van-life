import React from "react"
import bgImg from "../assets/images/about-hero.png"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <div className="about-hero">
                <img src={bgImg} className="about-hero-image" alt="Van on the road" />
                <div className="about-hero-overlay">
                    <span className="about-badge">✦ Our Story</span>
                    <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
                </div>
            </div>

            <div className="about-page-content">
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>

            <div className="about-page-cta">
                <div className="about-cta-text">
                    <span className="about-cta-label">Ready?</span>
                    <h2>Your destination is waiting.<br />Your van is ready.</h2>
                </div>
                <Link className="about-cta-btn" to="/vans">
                    Explore our vans
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}