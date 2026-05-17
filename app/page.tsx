import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Get started by editing <code>app/page.tsx</code></h1>
      </main>
      <footer className={styles.footer}>
        <p>Create Next App</p>
      </footer>
    </div>
  );
}
