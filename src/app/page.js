'use client'
import { useState } from "react";
import styles from './page.module.css';


export default function Home() {
  const [count, setCount] = useState(0);

  function counterAction(work) {
    if (work === "add") {
      setCount(count + 1);
    } else if (work === "remove") {
      if(count!==0){
        setCount(count - 1);
      }
    } else {
      setCount(0)
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.heading}>Counter App</div>

      <div className={styles.countVal}>{count}</div>

      <div className={styles.button}>
        <button className={`${styles.remove} ${count===0?styles.disable:""}`} onClick={() => counterAction("remove")}>-</button>
        <button className={styles.add} onClick={() => counterAction("add")}>+</button>
      </div>

      <button className={styles.reset} onClick={() => counterAction()}>Reset</button>
    </div>
  );
}
