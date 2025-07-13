// List 2 - app/about/page.tsx

import styles from "./index.module.css";

export default function AboutPage() {
  return (
    <main id="about" className={styles.container}>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.text}>
        このサイトは、ワヒトフの自己紹介と学習の成果をまとめたポートフォリオです。
      </p>
      <p className={styles.text}>
        現在、HTML(Bootstrap)、Java、そしてJavaScript(Node.js)を中心にウェブ開発のスキルを身につけるため、日々勉強を続けています。
      </p>
      <p className={styles.text}>
        バックエンドとフロントエンドの両方に興味があり、実践的なプロジェクトを通じて知識を深めています。
      </p>
      <p className={styles.text}>
        使いやすく、見た目にもこだわったウェブサイトの制作を目指しています。
      </p>
    </main>
  );
}
