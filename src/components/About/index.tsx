import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
  return (
    <section className={styles.main} id="about">
      <h2>About</h2>
      <p>
        Hi I&rsquo;m Matias Toledo. A passionate FullStack Developer and student
        based in Argentina.
      </p>
      <p>
        I started my path as a developer 3 years ago and I fell in love with the
        idea of being able to create websites and apps that solve people&rsquo;s
        problems and at the same time provide them with a good experience.
      </p>
      <p>
        I am a proactive, organized, responsible person, attentive to detail and
        constantly learning. if you&rsquo;re looking for a developer to add to
        your team, I&rsquo;d love to hear from you! .
      </p>
      <div className={styles.illustration}>
        <Image
          src={"/about.svg"}
          alt="About image"
          sizes="100vw"
          width={0}
          height={0}
          quality={100}
          style={{ width: "100%", height: "100%" }}></Image>
      </div>
    </section>
  );
}
