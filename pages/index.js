import Link from "next/link"
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>hello - this is the first practice</h1>
      <p>dynamic routes</p>
      <Link href="/posts">posts</Link>
    </div>
  );
}
