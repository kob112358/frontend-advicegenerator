import styles from "./App.module.css";
import React, { useState } from "react";

import AdviceCard from "./components/AdviceCard";

function App() {
  const [advice, setAdvice] = useState(
    `"Its easy to st up and take notice, what's difficult is getting up and taking action."`
  );
  const [adviceNum, setAdviceNum] = useState("117");

  const getNewAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {setAdviceNum(data?.slip?.id);setAdvice(data?.slip?.advice)})
      .catch((e) => console.log(e));
  };

  return (
    <div className={styles.App}>
      <AdviceCard num={adviceNum} advice={advice} getAdvice={getNewAdvice} />

      <div className={styles.attribution}>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/kob112358">
          Eric Kobliska
        </a>
        .
      </div>
    </div>
  );
}

export default App;
