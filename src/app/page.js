'use client'
import { useState } from "react";
import './page.module.css'


export default function Home() {
  const [count,setCount]=useState(0);

  function counterAction(work){
    if(work==="add"){
      setCount(count+1);
    }else if(work==="remove"){
      setCount(count-1);
    }else{
      setCount(0)
    }
  }

  return (
    <div className={"page"}>
      <div className={"countVal"}>{count}</div>

      <button onClick={()=>counterAction("add")}>+</button>
      <button onClick={()=>counterAction("remove")}>-</button>
      <button onClick={()=>counterAction()}>Reset</button>
    </div>
  );
}
