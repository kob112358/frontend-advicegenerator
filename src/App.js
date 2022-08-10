import styles from "./App.module.css";
import React, { useState } from "react";

import AdviceCard from "./components/AdviceCard";

function App() {
  const [advice, setAdvice] = useState(
    `"Its easy to sit up and take notice, what's difficult is getting up and taking action."`
  );
  const [isLoading, setIsLoading] = useState(false);
  const [adviceNum, setAdviceNum] = useState("117");

  const getNewAdvice = () => {
    const showLoading = setTimeout(() => setIsLoading(true), 200);
    fetch("https://api.adviceslip.com/advice", {cache: 'no-cache'})
      .then((res) => res.json())
      .then((data) => {setAdviceNum(data?.slip?.id);setAdvice(data?.slip?.advice);setIsLoading(false);clearTimeout(showLoading)})
      .catch((e) => {setAdvice('There was an error in retrieiving advice - please try again.');console.log(e)});
  };

  return (
    <div className={styles.App}>
      <AdviceCard num={adviceNum} advice={advice} getAdvice={getNewAdvice} isLoading={isLoading} />

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
