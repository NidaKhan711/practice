import { createContext ,useState } from "react";
export const counterContext= createContext(null)

export const CounterProvider =(probs)=>{

    const [count, setCount]=useState(0)

    return (
        <counterContext.Provider value={{count,setCount}}>
            {probs.childern}
        </counterContext.Provider>
    )
}