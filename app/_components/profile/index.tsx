import Image from "next/image";
import styles from "./index.module.css";

export default function ProfilePage() {
  return (
    <main id="profile" className={styles.container}>
      <h2 className={styles.heading}>Profile</h2>
      <section className={styles.profileSection}>
        <Image
          src="/images/photo-profile.PNG"
          alt="My Profile"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <div className={styles.profileText}>
          <p>
            <strong>名前：</strong>Vakhitov Rishat
          </p>
          <p>
            <strong>年齢：</strong>37歳
          </p>
          <p>
            <strong>専攻：</strong>Webプログラミングコース
          </p>
          <strong>現在：</strong>ソフトウェアエンジニアを目指して日々勉強中
          <p></p>
        </div>
      </section>

      <section className={styles.hobbySection}>
        <h3 className={styles.subHeading}>趣味</h3>
        <div className={styles.hobbyList}>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/shinrinyoku.png"
              alt="shinrinyoku"
              width={150}
              height={150}
              className={styles.hobbyImage}
            />
            <p className={styles.hobbyText}>森林浴</p>
          </article>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/dokusho.png"
              alt="dokusho"
              width={150}
              height={150}
              className={styles.hobbyImage}
            />
            <p className={styles.hobbyText}>読書</p>
          </article>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/haiking.png"
              alt="haiking"
              width={150}
              height={150}
              className={styles.hobbyImage}
            />
            <p className={styles.hobbyText}>ハイキング</p>
          </article>
        </div>
      </section>
    </main>
  );
}
