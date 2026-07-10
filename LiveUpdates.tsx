"use client";

import React, { useState, useEffect } from "react";
import styles from "./LiveUpdates.module.css";

interface RequestItem {
  id: number;
  bloodType: string;
  location: string;
  urgency: "critical" | "high" | "normal";
  timeAgo: string;
  neededFor: string;
  fulfilled: boolean;
}

export default function LiveUpdates() {
  const [requests, setRequests] = useState<RequestItem[]>([
    {
      id: 1,
      bloodType: "O-",
      location: "St. Jude Hospital, Chicago",
      urgency: "critical",
      timeAgo: "Just now",
      neededFor: "Emergency Surgery",
      fulfilled: false,
    },
    {
      id: 2,
      bloodType: "A+",
      location: "Metropolitan Medical Center, Dallas",
      urgency: "high",
      timeAgo: "4 mins ago",
      neededFor: "Thalassemia Treatment",
      fulfilled: false,
    },
    {
      id: 3,
      bloodType: "B-",
      location: "Mercy Health, Miami",
      urgency: "normal",
      timeAgo: "12 mins ago",
      neededFor: "Scheduled Operation",
      fulfilled: true,
    },
    {
      id: 4,
      bloodType: "AB+",
      location: "Grace Medical, Seattle",
      urgency: "normal",
      timeAgo: "25 mins ago",
      neededFor: "Plasma Transfusion",
      fulfilled: true,
    },
  ]);

  // Simulate incoming live requests over time
  useEffect(() => {
    const locations = [
      "St. John Hospital, Boston",
      "City General, Austin",
      "Westside Memorial, Los Angeles",
      "Valley Medical, Phoenix",
      "Riverside Hospital, Atlanta",
    ];
    const bloodTypes = ["O-", "O+", "A-", "A+", "B+", "AB-"];
    const urgencies: ("critical" | "high" | "normal")[] = ["critical", "high", "normal"];
    const needs = ["Trauma Center", "Surgical Support", "Dialysis Unit", "Cancer Clinic"];

    const interval = setInterval(() => {
      // Add a new random request
      const randomLoc = locations[Math.floor(Math.random() * locations.length)];
      const randomBlood = bloodTypes[Math.floor(Math.random() * bloodTypes.length)];
      const randomUrgency = urgencies[Math.floor(Math.random() * urgencies.length)];
      const randomNeed = needs[Math.floor(Math.random() * needs.length)];

      const newRequest: RequestItem = {
        id: Date.now(),
        bloodType: randomBlood,
        location: randomLoc,
        urgency: randomUrgency,
        timeAgo: "Just now",
        neededFor: randomNeed,
        fulfilled: false,
      };

      setRequests((prev) => {
        // Shift time of older ones
        const updated = prev.map((item, idx) => {
          if (idx === 0) return { ...item, timeAgo: "2 mins ago" };
          if (idx === 1) return { ...item, timeAgo: "8 mins ago" };
          if (idx === 2) return { ...item, timeAgo: "18 mins ago" };
          return { ...item, timeAgo: "35 mins ago" };
        });
        return [newRequest, ...updated.slice(0, 3)];
      });
    }, 8000); // add new update every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.updatesSection}>
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          {/* Text Info */}
          <div className={styles.infoContent}>
            <div className={styles.statsBadge}>
              <span className={styles.liveIndicatorDot} />
              LIVE NETWORK ACTIVITY
            </div>
            <h2 className={styles.title}>Real-Time Coordination</h2>
            <p className={styles.description}>
              Our network links donor registries directly to clinical points of care. Watch active matching and urgent requests resolve as hospitals and donors connect.
            </p>
            <div className={styles.statsContainer}>
              <div className={styles.statCard}>
                <span className={styles.statNum}>1.2 min</span>
                <span className={styles.statLabel}>Average Match Time</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNum}>98.4%</span>
                <span className={styles.statLabel}>Fulfillment Rate</span>
              </div>
            </div>
          </div>

          {/* Live Request list container */}
          <div className={`${styles.feedContainer} glassmorphism`}>
            <div className={styles.feedHeader}>
              <h3 className={styles.feedTitle}>Active Requests</h3>
              <span className={styles.feedCount}>4 Active Now</span>
            </div>
            <div className={styles.feedList}>
              {requests.map((item) => (
                <div key={item.id} className={`${styles.feedItem} ${item.fulfilled ? styles.fulfilledItem : ""}`}>
                  <div className={`${styles.bloodBadge} ${styles[item.urgency]}`}>
                    {item.bloodType}
                  </div>
                  <div className={styles.feedDetails}>
                    <div className={styles.feedItemRow}>
                      <span className={styles.feedItemLoc}>{item.location}</span>
                      <span className={styles.feedItemTime}>{item.timeAgo}</span>
                    </div>
                    <div className={styles.feedItemRow}>
                      <span className={styles.feedItemNeed}>{item.neededFor}</span>
                      {item.fulfilled ? (
                        <span className={styles.statusFulfilled}>
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Matched
                        </span>
                      ) : (
                        <span className={`${styles.statusPending} ${styles[item.urgency]}`}>
                          Pending Match
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
