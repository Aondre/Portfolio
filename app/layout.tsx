import type { Metadata } from "next";
import styles from "./layout.module.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SideBar from "./components/Sidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aondre Franklin - Senior DevOps Engineer",
  description:
    "Senior DevOps Engineer at Bank of America with 5 years driving enterprise CI/CD automation at scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body>
        <aside className={styles.sidebar}>
          <SideBar />
        </aside>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
