"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Patients", path: "/" },
    { name: "Hospitals", path: "/hospitals" },
    { name: "Donors", path: "/#donors" },
    { name: "Contact", path: "/contact" },
  ];

  const getIsActive = (itemPath: string) => {
    if (itemPath === "/") {
      return pathname === "/";
    }
    // Remove hash/query for matching
    const basePath = itemPath.split(/[?#]/)[0];
    if (basePath === "") return false;
    return pathname.startsWith(basePath);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""} glassmorphism`}>
      <div className={`${styles.container} container`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/vitanova512.png"
            alt="VitaNova Logo"
            width={32}
            height={32}
            className={styles.logoImage}
            priority
          />
          <span className={styles.logoText}>Vita<span className={styles.logoHighlight}>Nova</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {navItems.map((item) => {
            const active = getIsActive(item.path);
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`${styles.navLink} ${active ? styles.active : ""}`}
              >
                {item.name}
                {active && <span className={styles.activeIndicator} />}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className={styles.actions}>
          <Link href="/login" className={styles.loginBtn}>Login</Link>
          <Link href="/register" className={styles.registerBtn}>Register</Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`${styles.mobileToggle} ${mobileMenuOpen ? styles.mobileToggleOpen : ""}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ""}`}>
        <nav className={styles.mobileNav}>
          {navItems.map((item) => {
            const active = getIsActive(item.path);
            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`${styles.mobileNavLink} ${active ? styles.mobileActive : ""}`}
              >
                {item.name}
              </Link>
            );
          })}
          <hr className={styles.divider} />
          <Link href="/login" className={styles.mobileLoginBtn} onClick={() => setMobileMenuOpen(false)}>Login</Link>
          <Link href="/register" className={styles.mobileRegisterBtn} onClick={() => setMobileMenuOpen(false)}>Register</Link>
        </nav>
      </div>
    </header>
  );
}
