"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function RegisterPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "you@example.com",
    bloodType: "",
    location: "City, State",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Signing up...\nName: ${formData.name}\nEmail: ${formData.email}\nBlood Type: ${formData.bloodType}\nLocation: ${formData.location}`);
  };

  return (
    <div className="bg-gray-50/50 min-h-screen flex flex-col justify-between">
      {/* Top Header Back Button */}
      <header className="h-20 flex items-center justify-end px-8 md:px-12 w-full">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary transition-colors duration-200">
          <span>{t("signup.backBtn")}</span>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 5" />
          </svg>
        </Link>
      </header>

      {/* Main card */}
      <main className="flex-grow flex items-center justify-center px-6 py-10 w-full">
        <section className="w-full max-w-[560px] bg-white border border-gray-100 p-8 md:p-12 rounded-2xl shadow-sm flex flex-col">
          <div className="text-center mb-8 flex flex-col items-center">
            {/* Circle Heart Icon */}
            <div className="w-14 h-14 rounded-full bg-red-50 text-primary flex items-center justify-center mb-5">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
              </svg>
            </div>
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-2">{t("signup.cardTitle")}</h1>
            <p className="text-sm text-gray-400">{t("signup.cardSubtitle")}</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900">{t("signup.labelName")}</label>
              <div className="relative flex items-center">
                <svg className="absolute left-4 text-gray-300 pointer-events-none" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="John Doe"
                  className="w-full bg-gray-50 border border-gray-100 rounded-lg py-3 pl-12 pr-4 text-sm text-gray-900 outline-none transition-all duration-200 focus:border-primary focus:bg-white focus:ring-4 focus:ring-red-600/5"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900">{t("signup.labelEmail")}</label>
              <div className="relative flex items-center">
                <svg className="absolute left-4 text-gray-300 pointer-events-none" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-gray-50 border border-gray-100 rounded-lg py-3 pl-12 pr-4 text-sm text-gray-900 outline-none transition-all duration-200 focus:border-primary focus:bg-white focus:ring-4 focus:ring-red-600/5"
                />
              </div>
            </div>

            {/* Blood Type & Location Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-900">{t("signup.labelBloodType")}</label>
                <div className="relative flex items-center">
                  <svg className="absolute left-4 text-gray-300 pointer-events-none" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
                  </svg>
                  <select
                    value={formData.bloodType}
                    onChange={(e) => setFormData({ ...formData, bloodType: e.target.value })}
                    required
                    className="w-full bg-gray-50 border border-gray-100 rounded-lg py-3 pl-12 pr-10 text-sm text-gray-900 outline-none cursor-pointer appearance-none bg-no-repeat bg-[right_16px_center] bg-[length:14px] [background-image:url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_fill=%22none%22_viewBox=%220_0_24_24%22_stroke=%22currentColor%22_stroke-width=%222.5%22%3E%3Cpath_stroke-linecap=%22round%22_stroke-linejoin=%22round%22_d=%22M19_9l-7_7-7-7%22/%3E%3C/svg%3E')] focus:border-primary focus:bg-white"
                  >
                    <option value="">{t("signup.placeholderBloodType")}</option>
                    <option value="O-">Type O-</option>
                    <option value="O+">Type O+</option>
                    <option value="A-">Type A-</option>
                    <option value="A+">Type A+</option>
                    <option value="B-">Type B-</option>
                    <option value="B+">Type B+</option>
                    <option value="AB-">Type AB-</option>
                    <option value="AB+">Type AB+</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-900">{t("signup.labelLocation")}</label>
                <div className="relative flex items-center">
                  <svg className="absolute left-4 text-gray-300 pointer-events-none" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                    placeholder="City, State"
                    className="w-full bg-gray-50 border border-gray-100 rounded-lg py-3 pl-12 pr-4 text-sm text-gray-900 outline-none transition-all duration-200 focus:border-primary focus:bg-white focus:ring-4 focus:ring-red-600/5"
                  />
                </div>
              </div>
            </div>

            {/* Password & Confirm Password Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-900">{t("signup.labelPassword")}</label>
                <div className="relative flex items-center">
                  <svg className="absolute left-4 text-gray-300 pointer-events-none" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    placeholder="••••••••"
                    className="w-full bg-gray-50 border border-gray-100 rounded-lg py-3 pl-12 pr-4 text-sm text-gray-900 outline-none transition-all duration-200 focus:border-primary focus:bg-white focus:ring-4 focus:ring-red-600/5"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-900">{t("signup.labelConfirmPassword")}</label>
                <div className="relative flex items-center">
                  <svg className="absolute left-4 text-gray-300 pointer-events-none" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                    placeholder="••••••••"
                    className="w-full bg-gray-50 border border-gray-100 rounded-lg py-3 pl-12 pr-4 text-sm text-gray-900 outline-none transition-all duration-200 focus:border-primary focus:bg-white focus:ring-4 focus:ring-red-600/5"
                  />
                </div>
              </div>
            </div>

            {/* Terms Agreement Checkbox */}
            <div className="flex items-start gap-3 mt-2 mb-1">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                required
                className="w-4 h-4 rounded border-gray-200 text-primary focus:ring-primary cursor-pointer mt-1 flex-shrink-0"
              />
              <label htmlFor="terms" className="text-[11px] md:text-xs leading-relaxed text-gray-500 cursor-pointer select-none">
                {t("signup.labelTerms")}
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="bg-primary hover:bg-red-700 text-white py-3.5 rounded-lg font-bold text-sm transition-all duration-200 shadow-md shadow-red-100 hover:shadow-lg hover:-translate-y-0.5"
            >
              {t("signup.btnSignUp")}
            </button>
          </form>

          {/* Login Switch Link */}
          <div className="text-center text-sm font-semibold text-gray-400 mt-6 pt-4 border-t border-gray-50 mb-6">
            {t("signup.promptSignIn")} <Link href="/login" className="text-secondary hover:underline">{t("signup.linkSignIn")}</Link>
          </div>

          {/* Secure Trust indicators */}
          <div className="flex justify-center gap-6 flex-wrap mt-2">
            <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-gray-400">
              <svg className="text-green-500" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              {t("signup.badgeSecure")}
            </div>
            <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-gray-400">
              <svg className="text-green-500" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              {t("signup.badgePartner")}
            </div>
          </div>
        </section>
      </main>

      {/* Simplified Footer */}
      <footer className="bg-white border-t border-gray-100 py-10 px-8 w-full">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div className="flex flex-col gap-2.5">
            <span className="font-bold text-gray-900 text-base">VitaNova</span>
            <p className="text-xs text-gray-400 leading-normal max-w-xs">
              Empowering the blood donation ecosystem through advanced logistics and real-time coordination.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-bold text-gray-900 uppercase tracking-wider text-xs">{t("footer.columnResources")}</span>
            <ul className="flex flex-col gap-2 list-none text-xs">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">Donor Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">Service Catalog</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-bold text-gray-900 uppercase tracking-wider text-xs">{t("login.footerLegal")}</span>
            <ul className="flex flex-col gap-2 list-none text-xs">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
