import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
export default function LandingPage() {


    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav className="landingNav">
                <div className='navHeader'>
                    <span className="brandMark" aria-hidden="true">M</span>
                    <h2>Meetly</h2>
                </div>
                <div className='navlist'>
                    <button className="navLink" onClick={() => {
                        router("/aljk23")
                    }}>Join as guest</button>
                    <button className="navLink" onClick={() => {
                        router("/auth")

                    }}>Register</button>
                    <button className="navLogin" onClick={() => {
                        router("/auth")
                    }}>Log in</button>
                </div>
            </nav>


            <div className="landingMainContainer">
                <div className="heroCopy">
                    <p className="eyebrow">VIDEO CALLS, MADE SIMPLE</p>
                    <h1>Feel <span>closer</span>, wherever you are.</h1>

                    <p className="heroDescription">Meet, talk, and share the moments that matter with crystal-clear video calls.</p>
                    <div className="heroActions">
                        <Link className="primaryCta" to={"/auth"}>Start a meeting <span aria-hidden="true">→</span></Link>
                        <button className="secondaryCta" onClick={() => router("/aljk23")}>Join as guest</button>
                    </div>
                    <div className="heroTrust">
                        <span className="onlineDot" aria-hidden="true"></span>
                        Free to use · No download required
                    </div>
                </div>
                <div className="heroVisual">
                    <div className="orb orbOne" aria-hidden="true"></div>
                    <div className="orb orbTwo" aria-hidden="true"></div>
                    <div className="visualLabel">Stay connected</div>

                    <img src="/mobile.png" alt="Meetly video calling on mobile devices" />

                </div>
            </div>



        </div>
    )
}
