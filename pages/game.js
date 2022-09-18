import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Game.module.css";
import Image from "next/image";
import { useState } from "react";
import data from "./data";

const pigInitialState = {
  id: 0,
  name: "",
  image: "",
  value: 0,
};

const gameState = {
  score: 0,
  rolling: false,
};

export default function Game() {
  const [pigOne, setPigOne] = useState(pigInitialState);
  const [pigTwo, setPigTwo] = useState(pigInitialState);

  const rollPigs = () => {
    const randomIndexOne = Math.floor(Math.random() * 6);
    const randomIndexTwo = Math.floor(Math.random() * 6);

    setPigOne(data[randomIndexOne]);
    setPigTwo(data[randomIndexTwo]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Pass the Pigs</title>
      </Head>
      <main className={styles.main}>
        <Image
          priority
          src="/images/pass_the_pigs_heading.png"
          width={500}
          height={100}
          alt="title"
        />
        <div className={styles.game_window}>
          <div className="pig_one">
            <Image
              src={`/images/${pigOne.image}`}
              width={120}
              height={100}
              alt=""
            />
          </div>
          <div className="pig_two">
            <Image
              src={`/images/${pigTwo.image}`}
              width={120}
              height={100}
              alt=""
            />
          </div>
        </div>
        <h2>Score: 0</h2>
        <div className={styles.action_buttons}>
          <button className={styles.button} onClick={rollPigs}>
            Roll
          </button>
          <button className={styles.button}>Stop Rolling</button>
        </div>
        <h2 className={styles.description}>
          <Link href="/">Back to home</Link>
        </h2>
      </main>
    </div>
  );
}
