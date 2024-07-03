"use client";
import Image from "next/image";
import styles from "./header.module.css";
import { ArrowLeft } from "iconoir-react";
import { useRouter } from "next/navigation";

type HeaderProps = {
  name: string;
  email: string;
  photoUrl: string;
};

export default function Header({ name, email, photoUrl }: HeaderProps) {
  const { push } = useRouter();

  function handleBack() {
    push("/");
  }
  return (
    <section>
      <ArrowLeft
        onClick={handleBack}
        className={styles.arrow_back}
        width={20}
        height={20}></ArrowLeft>
      <div className={styles.banner_container}>
        <Image
          src={`/banner.png`}
          alt="Header image"
          sizes="100vw"
          width={0}
          height={0}
          quality={100}
          style={{ width: "100%", height: "150px" }}
        />
        <div className={styles.profile_img}>
          <Image
            src={photoUrl}
            alt="Profile image"
            width={120}
            height={120}
            quality={100}
            priority
          />
        </div>
      </div>
      <div className={styles.user_container}>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </section>
  );
}
