import React from "react";
import styles from "./AdviceCard.module.css";
import { ReactComponent as Dice } from "../images/icon-dice.svg";

const AdviceCard = (props) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.advice}> ADVICE #{props.num}</div>
        <div>{props.isLoading ? 'loading...' : props.advice}</div>
        <div className={styles.divider}></div>
        <div className={styles.dice} onClick={props.getAdvice}>
          <Dice />
        </div>
      </div>
    </>
  );
};

export default AdviceCard;
