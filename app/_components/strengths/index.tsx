import styles from "./index.module.css";

export default function StrengthsPage() {
  return (
    <main id="strengths" className={styles.container}>
      <h2 className={styles.heading}>Strengths</h2>

      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>聞く力と共感力</h3>
        <br />
        <p className={styles.strengthText}>
          相手の立場に立って話を聞き、丁寧に対応することを大切にしています。異文化の中で生活する中で、言葉以外のニュアンスや気遣いにも敏感になり、自然と相手の気持ちをくみ取ることができるようになりました。
        </p>
      </section>
      <br />
      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>好奇心と継続力</h3>
        <br />
        <p className={styles.strengthText}>
          新しいことに対する興味が強く、疑問に思ったことはすぐに調べて自分で試してみます。プログラミングやデザインも未経験からのスタートでしたが、毎日少しずつ学びながら、自分のペースでスキルアップを続けています。
        </p>
      </section>
      <br />
      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>語学力と異文化理解</h3>
        <br />
        <p className={styles.strengthText}>
          ロシア出身で、日本での生活や学習を通じて日本語でのコミュニケーション力を伸ばしています。英語での日常会話も可能で、異なる文化的背景を持つ人々とのやりとりにも柔軟に対応できます。
        </p>
      </section>
    </main>
  );
}
