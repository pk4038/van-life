import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <div className="home-bg" />
            <div className="home-content">
                <span className="home-badge">✦ The Vanlife Movement</span>
                <h1>You got the plans,<br />we got the <em>vans.</em></h1>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to="vans" className="home-cta">
                    Find your van
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}