import styles from "./index.module.css";

export default async function SkillPage() {
  return (
    <main id="skill" className={styles.container}>
      <h2 className={styles.heading}>Skill</h2>
      <p className={styles.text}>
        これまで勉強した言語や、現在学習中の技術を紹介します。まだ完璧に理解できていない部分もありますが、日々少しずつ成長を目指しています。
      </p>
      <ul className={styles.skillList}>
        <li>
          <b>HTML</b>
        </li>
        <p className={styles.texts}>
          基本的なコーディング、レスポンシブデザイン、レイアウトに対応可能です。
        </p>

        <li>
          <b>JavaScript (ES6+)</b>
        </li>
        <p className={styles.texts}>
          基本文法、配列やオブジェクトの操作、簡単なバリデーション処理などができます。
        </p>

        <li>
          <b>TypeScript</b>
        </li>
        <p className={styles.texts}>
          JavaScriptとの違いを意識しながら、型定義やインターフェースの使い方を練習中です。
        </p>

        <li>
          <b>React</b>
        </li>
        <p className={styles.texts}>
          コンポーネントの作成やpropsの受け渡し、基本的なフックの使い方を学んでいます。ページルーティングや簡単なAPI
          Routesの使い方も勉強しています。
        </p>

        <li>
          <b>Node.js / Express (現在学習中)</b>
        </li>
        <p className={styles.texts}>
          フロントエンドに慣れてきたら、バックエンドにも挑戦する予定です。
        </p>
      </ul>
    </main>
  );
}
