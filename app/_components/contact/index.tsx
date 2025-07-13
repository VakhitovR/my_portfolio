import React from "react";
import styles from "./index.module.css";

const Contact: React.FC = () => {
  return (
    <main id="contact" className={styles.container}>
      <h2 className={styles.heading}>Contact me</h2>
      <p className={styles.text}>
        お問い合わせいただきありがとうございます。
        <br />
        お仕事のご相談やご不明な点がございましたら、下記のメールアドレスまでご連絡ください。
      </p>

      <p className={styles.email}>
        <a href="mailto:w24017@osfl.ac.jp">📩w24017@osfl.ac.jp</a>
      </p>

      <p className={styles.note}>
        確認し次第、できる限り早くご返信いたします。
      </p>
    </main>
  );
};

export default Contact;
