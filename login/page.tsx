"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function LoginPage() {
  const [email, setEmail] = useState("you@example.com");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Signing in...\nEmail: ${email}\nPassword: ${password}\nRemember me: ${rememberMe}`);
  };

  return (
    <div className="bg-gray-50/50 min-h-screen flex flex-col justify-between">
      {/* Top Header Back Button */}
      <header className="h-20 flex items-center px-8 md:px-12 w-full">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary transition-colors duration-200">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>{t("login.backBtn")}</span>
        </Link>
      </header>

      {/* Main card */}
      <main className="flex-grow flex items-center justify-center px-6 py-10 w-full">
        <section className="w-full max-w-[460px] bg-white border border-gray-100 p-8 md:p-12 rounded-2xl shadow-sm flex flex-col">
          <div className="text-center mb-8 flex flex-col items-center">
            <div className="flex items-center justify-center gap-2.5 mb-5">
              <Image
                src="/vitanova512.png"
                alt="VitaNova Logo"
                width={36}
                height={36}
                priority
              />
              <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
                Vita<span className="text-primary">Nova</span>
              </span>
            </div>
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-2">{t("login.cardTitle")}</h1>
            <p className="text-sm text-gray-400">{t("login.cardSubtitle")}</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900">{t("login.labelEmail")}</label>
              <div className="relative flex items-center">
                <svg className="absolute left-4 text-gray-300 pointer-events-none" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-gray-50 border border-gray-100 rounded-lg py-3 pl-12 pr-4 text-sm text-gray-900 outline-none transition-all duration-200 focus:border-primary focus:bg-white focus:ring-4 focus:ring-red-600/5"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center w-full">
                <label className="text-sm font-semibold text-gray-900">{t("login.labelPassword")}</label>
                <a href="#" className="text-xs font-semibold text-secondary hover:underline">{t("login.linkForgot")}</a>
              </div>
              <div className="relative flex items-center">
                <svg className="absolute left-4 text-gray-300 pointer-events-none" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-100 rounded-lg py-3 pl-12 pr-12 text-sm text-gray-900 outline-none transition-all duration-200 focus:border-primary focus:bg-white focus:ring-4 focus:ring-red-600/5"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-gray-300 hover:text-gray-500 cursor-pointer flex items-center justify-center"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center gap-2.5 my-1">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-gray-200 text-primary focus:ring-primary cursor-pointer"
              />
              <label htmlFor="remember" className="text-xs font-semibold text-gray-500 cursor-pointer select-none">
                {t("login.labelRemember")}
              </label>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-red-700 text-white py-3.5 rounded-lg font-bold text-sm transition-all duration-200 shadow-md shadow-red-100 hover:shadow-lg hover:-translate-y-0.5 group"
            >
              <span>{t("login.btnSignIn")}</span>
              <svg className="transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </form>

          {/* SignUp Link */}
          <div className="text-center text-sm font-semibold text-gray-400 mt-6 pt-4 border-t border-gray-50">
            {t("login.promptSignUp")} <Link href="/signup" className="text-secondary hover:underline">{t("login.linkSignUp")}</Link>
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
            <span className="font-bold text-gray-900 uppercase tracking-wider text-xs">{t("login.footerSupport")}</span>
            <ul className="flex flex-col gap-2 list-none text-xs">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">Emergency Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">Donor Support</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-bold text-gray-900 uppercase tracking-wider text-xs">{t("login.footerLegal")}</span>
            <ul className="flex flex-col gap-2 list-none text-xs">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}


