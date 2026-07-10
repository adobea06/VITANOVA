"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const [city, setCity] = useState("");
  const [bloodType, setBloodType] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for ${bloodType || "All"} blood types in ${city || "current location"}...`);
  };

  return (
    <section className={styles.heroSection}>
      <div className={`${styles.container} container`}>
        {/* Left Content */}
        <div className={styles.content}>
          {/* Active Badge */}
          <div className={styles.emergencyBadge}>
            <span className="pulse-dot" />
            <span className={styles.badgeText}>Emergency Response Active</span>
          </div>

          {/* Heading */}
          <h1 className={styles.heading}>
            Your Donation,<br />
            <span className={styles.highlight}>Their Survival</span>
          </h1>

          {/* Subtext */}
          <p className={styles.subtext}>
            Connecting real-time blood needs with a community of verified heroes.
            Locate nearby donors or hospitals in seconds.
          </p>

          {/* Search Bar Panel */}
          <form onSubmit={handleSearch} className={`${styles.searchPanel} glassmorphism`}>
            {/* City Input */}
            <div className={styles.inputWrapper}>
              <svg className={styles.locationIcon} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <input
                type="text"
                placeholder="Enter city or..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={styles.input}
              />
            </div>

            {/* Divider line */}
            <div className={styles.verticalDivider} />

            {/* Blood Type Selection */}
            <div className={styles.inputWrapper}>
              <svg className={styles.bloodIcon} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
              </svg>
              <select
                value={bloodType}
                onChange={(e) => setBloodType(e.target.value)}
                className={styles.select}
              >
                <option value="">All Blood</option>
                <option value="O-">Type O- (Universal)</option>
                <option value="O+">Type O+</option>
                <option value="A-">Type A-</option>
                <option value="A+">Type A+</option>
                <option value="B-">Type B-</option>
                <option value="B+">Type B+</option>
                <option value="AB-">Type AB-</option>
                <option value="AB+">Type AB+</option>
              </select>
            </div>

            {/* Search Button */}
            <button type="submit" className={styles.searchBtn}>
              <span>Search</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </form>

          {/* Social Proof */}
          <div className={styles.socialProof}>
            <div className={styles.avatarStack}>
              {/* SVG Doctor/Donor Avatars for visual crispness */}
              <div className={`${styles.avatar} ${styles.avatar1}`}>
                <svg viewBox="0 0 32 32" width="40" height="40">
                  <circle cx="16" cy="16" r="16" fill="#E2E8F0" />
                  {/* Face outline / placeholder representing doctor */}
                  <circle cx="16" cy="13" r="6" fill="#475569" />
                  <path d="M6 28c0-5 4-8 10-8s10 3 10 8" fill="#475569" />
                  <rect x="13" y="18" width="6" height="4" fill="#38BDF8" /> {/* Stethoscope collar */}
                </svg>
              </div>
              <div className={`${styles.avatar} ${styles.avatar2}`}>
                <svg viewBox="0 0 32 32" width="40" height="40">
                  <circle cx="16" cy="16" r="16" fill="#F87171" />
                  <circle cx="16" cy="13" r="6" fill="#FFFFFF" />
                  <path d="M6 28c0-5 4-8 10-8s10 3 10 8" fill="#FFFFFF" />
                </svg>
              </div>
              <div className={`${styles.avatar} ${styles.avatar3}`}>
                <svg viewBox="0 0 32 32" width="40" height="40">
                  <circle cx="16" cy="16" r="16" fill="#34D399" />
                  <circle cx="16" cy="13" r="6" fill="#065F46" />
                  <path d="M6 28c0-5 4-8 10-8s10 3 10 8" fill="#065F46" />
                </svg>
              </div>
              <div className={styles.avatarCount}>
                +12k
              </div>
            </div>
            <p className={styles.socialText}>
              Trusted by <strong>12,000+</strong> donors and <strong>450</strong> hospitals nationwide.
            </p>
          </div>
        </div>

        {/* Right Card / Visual */}
        <div className={styles.visualContainer}>
          <div className={styles.visualCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/blood_donation_clinic.png"
                alt="VitaNova Blood Donation Clinic"
                fill
                priority
                className={styles.heroImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Glassmorphic Critical Need Badge */}
            <div className={`${styles.criticalBadge} glassmorphism`}>
              <div className={styles.criticalContent}>
                <div className={styles.criticalTextContainer}>
                  <span className={styles.criticalLabel}>CRITICAL NEED</span>
                  <span className={styles.criticalTitle}>Type O- Shortage</span>
                </div>
                <div className={styles.criticalIconWrapper}>
                  <svg className={styles.warningIcon} viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" fill="var(--primary)" stroke="var(--primary)" />
                    <line x1="12" y1="9" x2="12" y2="13" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                    <line x1="12" y1="17" x2="12.01" y2="17" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
