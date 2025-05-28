"use client";

import { useTextContext } from "@/context/TestContext";

function ButtonProduct({children} : {children: React.ReactNode}) {
    const {state , setState} = useTextContext();
    console.log(state, "state from context");
  return (
    <>
      <button onClick={() => {
        if (setState) setState("hello to you too");
      }}
      className="border rounded-2xl px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
      >
        {state}
        {children}
      </button>
    </>
  )
}

export default ButtonProduct
