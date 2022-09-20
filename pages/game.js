import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Game.module.css";
import Image from "next/image";
import { useReducer } from "react";
import { rollPigs } from "./game-utils";
import { useEffect } from "react";

const initialState = {
  score: 0,
  turns: 5,
  title: "",
  pigOne: {
    id: 0,
    name: "",
    image: "",
    value: 0,
  },
  pigTwo: {
    id: 0,
    name: "",
    image: "",
    value: 0,
  },
  gameOver: false,
};

const reducer = (state, action) => {
  let newState;

  if (action.type === "ROLL") {
    newState = rollPigs(state);
  }

  return newState;
};

export default function Game() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
          <div className={styles.pig_one}>
            <Image
              src={`/images/${state.pigOne.image}`}
              width={120}
              height={100}
              alt=""
            />
            <span>{state.pigOne.name}</span>
          </div>
          <div className={styles.pig_two}>
            <Image
              src={`/images/${state.pigTwo.image}`}
              width={120}
              height={100}
              alt=""
            />
            <span>{state.pigTwo.name}</span>
          </div>
        </div>
        <h2>Score: {state.score}</h2>
        <h2>Title: {state.title}</h2>
        <h2>Turns: {state.turns}</h2>
        <div className={styles.action_buttons}>
          <button
            className={styles.button}
            onClick={() => dispatch({ type: "ROLL" })}
          >
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
