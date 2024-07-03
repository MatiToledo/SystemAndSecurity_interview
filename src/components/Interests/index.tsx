import styles from "./interests.module.css";

export default function Interests() {
  const interests = [
    "Frontend Developer",
    "React",
    "Next.js",
    "Node.js",
    "Typescript",
    "Design",
    "CSS",
  ];
  return (
    <section className={styles.main} id="interests">
      <h2>Interests</h2>
      <ol className={styles.gradient_list}>
        {interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ol>
    </section>
  );
}
