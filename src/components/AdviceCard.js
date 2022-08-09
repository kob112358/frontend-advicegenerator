import React from "react";
import styles from "./AdviceCard.module.css";
import { ReactComponent as Dice } from "../images/icon-dice.svg";

const AdviceCard = (props) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.advice}> ADVICE #{props.num}</div>
        <div>{props.advice}</div>
        <div className={styles.divider}></div>
        <Dice className={styles.dice} onClick={props.getAdvice}/>
      </div>
    </>
  );
};

export default AdviceCard;
