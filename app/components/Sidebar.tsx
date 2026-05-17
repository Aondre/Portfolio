"use client";

import { Home, User, StickyNote, Monitor, LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import styles from "./Sidebar.module.css";

const navLinks: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: Monitor },
  { href: "blog", label: "Blog", icon: StickyNote },
];

export default function SideBar() {
  const pathname = usePathname();

  return (
    <div className={styles.sidebar}>
      <header className={styles.logo}>
        <span className={styles.logoName}>Aondre Franklin</span>
        <span className={styles.logoRole}>Senior DevOps Engineer</span>
      </header>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  styles.navLink,
                  pathname === link.href && styles.active,
                )}
              >
                <link.icon className={styles.navLinkIcon} size={15} />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <footer className={styles.footer}>
        <section className={styles.availBadge}>
          <span className={styles.availDot} />
          Open to Opportunities
        </section>
        <section className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/aondre-franklin-88336a181/"
            target="_blank"
            rel="noreferrer"
            className={styles.socialLink}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/aondre"
            target="_blank"
            rel="noreferrer"
            className={styles.socialLink}
          >
            GitHub
          </a>
        </section>
      </footer>
    </div>
  );
}
