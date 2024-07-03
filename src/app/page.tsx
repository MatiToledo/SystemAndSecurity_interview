"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function HomePage() {
  const { push } = useRouter();
  function handleClick() {
    push("/profile");
  }
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Security and System</h1>
        <button onClick={handleClick} className={styles.button}>
          Go to profile
        </button>
      </div>
    </main>
  );
}
