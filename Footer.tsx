"use client";

import React, { useState } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        {/* Top Grid */}
        <div className={styles.topGrid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <span className={styles.logoText}>Vita<span className={styles.logoHighlight}>Nova</span></span>
            </div>
            <p className={styles.tagline}>
              Connecting real-time blood needs with verified donors to save lives when seconds count.
            </p>
            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Join our emergency alert network"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.newsletterInput}
              />
              <button type="submit" className={styles.newsletterBtn}>
                {subscribed ? "Subscribed!" : "Join"}
              </button>
            </form>
          </div>

          {/* Links Column 1 */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>About</h4>
            <ul className={styles.linksList}>
              <li><a href="#" className={styles.link}>Our Mission</a></li>
              <li><a href="#" className={styles.link}>How it Works</a></li>
              <li><a href="#" className={styles.link}>Annual Reports</a></li>
              <li><a href="#" className={styles.link}>Press & Media</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Resources</h4>
            <ul className={styles.linksList}>
              <li><a href="#" className={styles.link}>Donor Guidelines</a></li>
              <li><a href="#" className={styles.link}>Blood Compatibility</a></li>
              <li><a href="#" className={styles.link}>FAQs</a></li>
              <li><a href="#" className={styles.link}>Emergency Protocol</a></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Hospitals</h4>
            <ul className={styles.linksList}>
              <li><a href="#" className={styles.link}>Register Facility</a></li>
              <li><a href="#" className={styles.link}>Inventory Portal</a></li>
              <li><a href="#" className={styles.link}>API Access</a></li>
              <li><a href="#" className={styles.link}>Support Services</a></li>
            </ul>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} VitaNova Inc. Built to secure public health. All rights reserved.
          </p>

          {/* Socials */}
          <div className={styles.socials}>
            {/* Twitter */}
            <a href="#" aria-label="Twitter/X" className={styles.socialLink}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* GitHub */}
            <a href="#" aria-label="GitHub" className={styles.socialLink}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
