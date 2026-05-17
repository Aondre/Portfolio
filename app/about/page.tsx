import { certificates, certifications } from "../lib/resume_data";
import styles from "./page.module.css";

export default function About() {
  const statusClass = {
    "in progress": styles.badgeProgress,
    "planned": styles.badgePlanned,
    "completed": styles.badgeDone,
  };

  return (
    <main>
      {certificates.map((cert) => (
        <div key={cert.title}>
          <span>{cert.title}</span>
          <span className={statusClass[cert.status]}>{cert.status}</span>
        </div>
      ))}
    </main>
  );
}
