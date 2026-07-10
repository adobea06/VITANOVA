"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./Contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "you@example.com",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message submitted! \nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`);
  };

  return (
    <>
      <Header />
      <main className={styles.contactPage}>
        <div className="container">
          {/* Header Title Section */}
          <section className={styles.titleSection}>
            <h1 className={styles.mainTitle}>Contact Support</h1>
            <p className={styles.subtitle}>
              We're here to help. Send us a message and we'll respond within 24 hours. Our mission is to keep the blood supply chain moving safely and efficiently.
            </p>
          </section>

          {/* Form and info grid */}
          <div className={styles.grid}>
            {/* Left Card: Send us a message Form */}
            <section className={styles.formCard}>
              <div className={styles.formHeader}>
                <svg className={styles.mailIcon} viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <h2 className={styles.formTitle}>Send us a message</h2>
              </div>

              <form onSubmit={handleSubmit}>
                <div className={styles.formGroupRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="John Doe"
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="you@example.com"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className={styles.select}
                  >
                    <option value="">Select a subject</option>
                    <option value="donor">Donor Registration Questions</option>
                    <option value="hospital">Hospital Onboarding / API Help</option>
                    <option value="emergency">Emergency Logistics Assistance</option>
                    <option value="complaint">Report an Issue</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Tell us how we can help..."
                    className={styles.textarea}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Submit Message
                </button>
              </form>
            </section>

            {/* Right Side Column Cards */}
            <div className={styles.rightCol}>
              {/* Card 1: Get in touch (Blue) */}
              <section className={styles.getInTouchCard}>
                <h3 className={styles.gitTitle}>Get in touch</h3>
                <div className={styles.gitList}>
                  {/* Phone */}
                  <div className={styles.gitItem}>
                    <div className={styles.gitIconWrapper}>
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <div className={styles.gitLabel}>Phone</div>
                      <div className={styles.gitValue}>+233 1234567</div>
                    </div>
                  </div>
                  {/* Email */}
                  <div className={styles.gitItem}>
                    <div className={styles.gitIconWrapper}>
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <div className={styles.gitLabel}>Email</div>
                      <div className={styles.gitValue}>support@lifestream.com</div>
                    </div>
                  </div>
                  {/* Office */}
                  <div className={styles.gitItem}>
                    <div className={styles.gitIconWrapper}>
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <div className={styles.gitLabel}>Office</div>
                      <div className={styles.gitValue}>123 Health Plaza, Medical District, Accra</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Card 2: Quick links */}
              <section className={styles.quickLinksCard}>
                <h3 className={styles.qlTitle}>Quick links</h3>
                <ul className={styles.qlList}>
                  <li>
                    <a href="#" className={styles.qlLink}>
                      <span>Frequently Asked Questions</span>
                      <svg className={styles.chevronIcon} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.qlLink}>
                      <span>Help Center</span>
                      <svg className={styles.chevronIcon} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.qlLink}>
                      <span>System Status</span>
                      <svg className={styles.chevronIcon} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.qlLink}>
                      <span>Community Forum</span>
                      <svg className={styles.chevronIcon} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </section>

              {/* Card 3: Visual Backdrop image with overlay */}
              <section className={styles.visualCard}>
                <Image
                  src="/images/hospital_hallway.png"
                  alt="VitaNova Clinic"
                  fill
                  className={styles.visualImage}
                  sizes="(max-width: 992px) 100vw, 30vw"
                />
                <div className={styles.imageOverlay}>
                  Join our 10k+ life savers.
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
