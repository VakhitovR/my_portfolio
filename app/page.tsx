import Header from "@/app/_components/header";
import Image from "next/image";
import styles from "./page.module.css";
import AboutPage from "./_components/about";
import ProfilePage from "@/app/_components/profile";
import WorkPage from "@/app/_components/work";
import SkillPage from "@/app/_components/skill";
import StrengthsPage from "@/app/_components/strengths";
import HobbyPage from "@/app/_components/hobby";
import Contact from "@/app/_components/contact";
import ScrollToTopButton from "@/app/_components/ScrollButton";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <Header />

      <section className={styles.heroImageSection}>
        <Image
          src="/images/my-main-visual.jpg"
          alt="Main Visual"
          width={1200}
          height={600}
          className={styles.heroImage}
        />
      </section>

      <AboutPage />
      <ProfilePage />
      <WorkPage />
      <SkillPage />
      <StrengthsPage />
      <HobbyPage />
      <Contact />
      <ScrollToTopButton />
    </main>
  );
}
