import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export default function WorkPage() {
  return (
    <main id="work" className={styles.container}>
      <h2 className={styles.heading}>Work</h2>
      <p className={styles.text}>
        ここでは、これまでに取り組んできたウェブサイトやアプリケーションの制作例をご紹介しています。
      </p>
      <p className={styles.text}>
        ユーザーにとって見やすく、使いやすいインターフェースを意識しながら、実践的な開発力を身につけることを目指して制作しました。
      </p>
      <p className={styles.text}>
        ご興味がありましたら、ぜひご覧いただき、ご質問などがあればお気軽にお問い合わせください。
      </p>
      <ul className={styles.workList}>
        <li className={styles.workItem}>
          <h3>TravelQuest Okinawa | 旅行ルート作成Webアプリ</h3>
          <br />
          <p>
            沖縄旅行のルートを直感的に楽しく作成できるWebアプリ。TypeScriptを使用し、地図上でのルート表示や移動距離・時間の計算などを実装。チームではフロントエンドと画面設計を担当しました。
          </p>
          <Link
            href="https://travelquest-beryl.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            サイトを見る(Vercel)
          </Link>
          <br />
          <Link
            href="https://github.com/VakhitovR/travelquest"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHubリポジトリ
          </Link>
          <br />
          <Image
            src="/images/screenshot.png"
            alt="My Profile"
            width={630}
            height={500}
            className={styles.profileImage}
          />
        </li>
        <br />
        <li className={styles.workItem}>
          <h3>沖縄ガイドブック(HTML版)</h3>
          <br />
          <p>
            純粋なHTMLとCSSで作成された沖縄観光情報サイト。シンプルで見やすいデザインと多言語ナビゲーションが特徴です。
          </p>
          <Link
            href="https://okinawa-guidebook-html.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            サイトを見る(Vercel)
          </Link>
          <br />
          <Link
            href="https://github.com/VakhitovR/Okinawa_Guidebook_HTML"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHubリポジトリ
          </Link>
        </li>
        <br />
        <li className={styles.workItem}>
          <h3> パソコン・周辺機器のショーケースサイト</h3>
          <br />
          <p>
            HTMLとBootstrapで構築した電子機器の紹介用ウェブサイト。製品の見やすいレイアウトと簡潔な情報整理を意識して設計しました。
          </p>
          <Link
            href="https://i-tshop-by-bootstrap.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            サイトを見る(Vercel)
          </Link>
          <br />
          <Link
            href="https://github.com/VakhitovR/ITshop_by_Bootstrap"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHubリポジトリ
          </Link>
        </li>
        <br />
        <li className={styles.workItem}>
          <h3>企業向けウェブサイト</h3>
          <br />
          <p>TypeScriptを用いて制作したシンプルで信頼感のある企業サイト。</p>
          <Link
            href="https://my-app-jhgq.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            サイトを見る(Vercel)
          </Link>
          <br />
          <Link
            href="https://github.com/VakhitovR/my-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHubリポジトリ
          </Link>
        </li>
        {/* 必要に応じてリストを追加 */}
      </ul>
    </main>
  );
}
