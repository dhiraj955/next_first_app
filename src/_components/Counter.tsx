"use client"

import { useTextContext } from "@/context/TestContext";
import { useState } from "react"

function Counter() {
    const {state} = useTextContext();
    const [count, setCount] = useState(0);
    console.log("i'm client side rendering")
  return (
    <div>
        {state}
      <h1 className="text-2xl text-center">{count}</h1>
      <button onClick={()=> setCount(count +1)}>Increase Count</button>
    </div>
  )
}

export default Counter
