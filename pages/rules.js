import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function rules() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pass the Pigs - Rules</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Rules</h1>
        <h2 className={styles.description}>
          <Link href="/">Back to home</Link>
        </h2>
      </main>
    </div>
  );
}
