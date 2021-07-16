/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

 import React, { Component, useState } from 'react';
 import { Helmet } from 'react-helmet';
 import styled from 'styled-components';
 import '!file-loader?name=[name].[ext]!../../images/favicon.ico';
 import '!file-loader?name=[name].[ext]!../../images/flag.png';
 import '!file-loader?name=[name].[ext]!../../images/hero-bg.jpg';
 import '!file-loader?name=[name].[ext]!../../images/logo.svg';
 import '!file-loader?name=[name].[ext]!../../images/section-1.svg';
 import '!file-loader?name=[name].[ext]!../../images/section-2.svg';
 import '!file-loader?name=[name].[ext]!../../images/section-3.svg';
 import '!file-loader?name=[name].[ext]!../../images/section-4.svg';
 import '!file-loader?name=[name].[ext]!../../images/sparkles.svg';

 import { Link } from 'react-router-dom';

 import './style.css';

 export function LandingPage() {
   return (
     <div>
        <Helmet
        defaultTitle={`NekoApp | Seu Lugar para Papear e Ficar De Boa`}
        >
        </Helmet>
        <div>
        <section 
        style={{
          background: `url("hero-bg.jpg") center/cover`
        }}
        className="hero">
        <header className="main-header container">
            <nav className="main-nav">
                <a href="index.html" className="logo">
                    <img src="logo.svg" alt="logo"/>
                </a>

                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Why NekoApp</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Nitro</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Safety</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Support</a>
                    </li>
                </ul>

                <div className="nav-items-right">
                <Link to={{
                  pathname: "/app",
                  hash: "#login",
                  state: { fromLandingPage: true }
                }} className="btn btn-small btn-light btn-login">Login</Link>
                    <span className="mobile-toggle">
                        <i className="bx bx-menu btn-open"></i>
                        <i className="bx bx-x btn-close"></i>
                    </span>
                </div>
            </nav>
        </header>

        <div className="row container">
            <div className="hero-content-wrap">
                <h1 className="title primary-title">Your place to talk</h1>
                <p className="hero-description">Whether you’re part of a school club, gaming group, worldwide art community, or just a handful of friends that want to spend time together, NekoApp makes it easy to talk every day and hang out more often.</p>

                <div className="hero-btn-group">
                <Link to={{
                  pathname: "/app",
                  hash: "#login",
                  state: { fromLandingPage: true }
                }} className="btn btn-large btn-dark">
                        Open NekoApp in your browser
                    </Link>
                </div>
            </div>
        </div>
    </section>

    <section className="collaboration">
        <div className="row container">
            <img src="section-1.svg" alt="sec1" className="grid-image"/>
            <div className="text-group">
                <h2 className="title secondary-title">An invite-only place with plenty of room to talk</h2>
                <p>NekoApp servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
            </div>
        </div>
    </section>

    <svg className="wave" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
    <path className="wave-path" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="currentColor"></path>
    </svg>

    <section className="voice-channel">
        <div className="row container">
            <img src="section-2.svg" alt="sec2" className="grid-image order-2"/>
            <div className="text-group order-1">
                <h2 className="title secondary-title">Where hanging out is easy</h2>
                <p>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
            </div>
        </div>
    </section>

    <svg className="wave wave-inverted" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path className="wave-path" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="currentColor"></path>
    </svg>

    <section className="moderation-tools">
        <div className="row container">
            <img src="section-3.svg" alt="sec3" className="grid-image order-2"/>
            <div className="text-group order-1">
                <h2 className="title secondary-title">From a few to a fandom</h2>
                <p>Get a community of any size running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
            </div>
        </div>
    </section>

    <svg className="wave" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path className="wave-path" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="currentColor"></path>
    </svg>

    <section className="video-call">
        <div className="row container">
            <div className="text-group">
                <h2 className="title secondary-title">Reliable tech for staying close</h2>
                <p>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
            </div>
            <img src="section-4.svg" alt="sec4" className="grid-image"/>
        </div>
    </section>
    <footer className="main-footer">
        <div className="row container">
            <div className="info-box">
                <h4 className="footer-title">Your place to talk</h4>
                <div className="languages">
                    <img src="flag.png" alt="lang"/>
                    <span>English, USA</span> <i className="bx bx-chevron-down"></i>
                </div>
                <div className="social-media">
                    <a href="#" className="sm-link">
                        <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="#" className="sm-link">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="#" className="sm-link">
                        <i className="bx bxl-facebook-square"></i>
                    </a>
                    <a href="#" className="sm-link">
                        <i className="bx bxl-youtube"></i>
                    </a>
                </div>
            </div>

            <div className="spacer"></div>
            <div className="footer-links-group">
                <h2 className="footer-title">Company</h2>
                <a href="#" className="footer-link">About</a>
            </div>
            <div className="footer-links-group">
                <h2 className="footer-title">Resources</h2>
                <a href="#" className="footer-link">Support</a>
                <a href="#" className="footer-link">Developers</a>
                <a href="https://github.com/Moonlight404/NekoApp" 
                target="_blank"
                className="footer-link">Open Source</a>
            </div>
            <div className="footer-links-group">
                <h2 className="footer-title">Policies</h2>
                <a href="#" className="footer-link">Terms</a>
                <a href="#" className="footer-link">Privacy</a>
                <a href="#" className="footer-link">Licenses</a>
            </div>

            <div className="divider"></div>
        </div>
        <div className="row container remove-grid">
            <a href="index.html" className="logo">
                <img src="logo.svg" alt="logo"/>
            </a>
        </div>
      </footer>
        </div>
     </div>
   );
 }
 