import React from "react";
import styles from "./modal.module.css";
import Link from "next/link";

export default function Modal({ score }) {
  return (
    <div className={styles.container}>
      <div className={styles.modal_window}>
        <h1>Game Over</h1>
        <h2>Result: {score}</h2>
        <h2 className={styles.description}>
          <Link href="/">Back to home</Link>
        </h2>
      </div>
    </div>
  );
}
