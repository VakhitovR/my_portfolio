import Image from "next/image";
import styles from "./index.module.css";

export default function HobbyPage() {
  return (
    <main id="hobby" className={styles.container}>
      <h2 className={styles.heading}>My Hobbies</h2>
      <section className={styles.profileSection}>
        <Image
          src="/images/shinrinyoku.png"
          alt="My Profile"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <div className={styles.profileText}>
          <h2>森林浴</h2>
          <p>
            高校時代から兄や友人たちと一緒に、よくマリヨル地方の森や湖へ出かけていました。自然の中で過ごす時間は、心を落ち着かせ、リフレッシュする大切なひとときです。
          </p>
        </div>
      </section>
      <section className={styles.profileSection}>
        <Image
          src="/images/dokusho.png"
          alt="My Profile"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <div className={styles.profileText}>
          <h2>読書</h2>
          <p>
            ジャンルを問わずさまざまな本を読むのが好きです。学生のときに吉川英治の『宮本武蔵』と『太閤記』を読んだことがあり、原文でこの作品を読みたいという思いが日本語学習のきっかけになりました。
          </p>
        </div>
      </section>
      <section className={styles.profileSection}>
        <Image
          src="/images/haiking.png"
          alt="My Profile"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <div className={styles.profileText}>
          <h2>ハイキング</h2>
          <p>
            学生時代、父と一緒にバシコルトスタンの山々を登っていました。中でも、海南島の山の上に広がる熱帯雨林を歩いた体験は、今でも強く印象に残っています。
          </p>
        </div>
      </section>
    </main>
  );
}
