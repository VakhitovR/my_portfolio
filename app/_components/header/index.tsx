"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./index.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Vakhitov Rishat | WEB Developer</h1>

      <button
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </button>

      <nav className={`${styles.navbar} ${menuOpen ? styles.navbarOpen : ""}`}>
        <ul className={styles.navLinks}>
          {[
            "about",
            "profile",
            "work",
            "skill",
            "strengths",
            "hobby",
            "contact",
          ].map((id) => (
            <li key={id}>
              <Link href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
