"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Interests from "@/components/Interests";
import { NavArrowDown } from "iconoir-react";
import styles from "./profile.module.css";
import { Fragment, useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    async function fetcher() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const fetchedUser = {
          name: "Matias Toledo",
          email: "toledo.nicolas.matias@gmail/com",
          photoUrl: "/profile.webp",
        };
        setUser(fetchedUser);
      } catch (error) {
        console.error("Error getting user", error);
      }
    }

    fetcher();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Fragment>
      {user ? (
        <main className={styles.main}>
          <Header
            name={user.name}
            email={user.email}
            photoUrl={user.photoUrl}
          />
          <div className={styles.content}>
            <About />
            <Interests />
            <Contact />
          </div>
          <NavArrowDown
            onClick={scrollToContact}
            className={styles.arrow}></NavArrowDown>
        </main>
      ) : (
        <div className={styles.center}>
          <div className={styles.spinner}></div>
        </div>
      )}
    </Fragment>
  );
}
