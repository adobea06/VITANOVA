"use client";

import React from "react";
import styles from "./Services.module.css";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  actionText: string;
  colorClass: string;
}

const ServiceCard = ({ title, description, icon, actionText, colorClass }: ServiceCardProps) => (
  <div className={`${styles.card} ${styles[colorClass]}`}>
    <div className={styles.iconContainer}>
      {icon}
    </div>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardDescription}>{description}</p>
    <a href="#" className={styles.cardAction}>
      <span>{actionText}</span>
      <svg className={styles.arrowIcon} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </a>
  </div>
);

export default function Services() {
  const services = [
    {
      title: "Find Donors",
      description: "Instantly locate and connect with compatible, verified blood donors in your immediate local area.",
      actionText: "Search Donors",
      colorClass: "blueCard",
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 12a4 4 0 1 0-8 0" />
          <circle cx="12" cy="10" r="2" />
        </svg>
      )
    },
    {
      title: "Request Blood",
      description: "Post an urgent public appeal for blood requests to notify nearby matching donors in real time.",
      actionText: "Create Request",
      colorClass: "redCard",
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="var(--primary)" stroke="var(--primary)" />
        </svg>
      )
    },
    {
      title: "Register Hospital",
      description: "Onboard your healthcare clinic to sync inventories, post requests, and coordinate with local donors.",
      actionText: "Register Center",
      colorClass: "greenCard",
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      )
    },
    {
      title: "Donate Blood",
      description: "Schedule your next donation appointment, track your health metrics, and view your verified badge status.",
      actionText: "Book Appointment",
      colorClass: "orangeCard",
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      )
    }
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={`${styles.container} container`}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Streamlined Access</h2>
          <p className={styles.sectionSubtitle}>
            Quickly navigate to our core services to manage your contribution or request urgent assistance.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              actionText={service.actionText}
              colorClass={service.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
