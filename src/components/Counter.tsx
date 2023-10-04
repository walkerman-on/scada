import {useState} from "react"
import cl from "./Counter.module.scss"

const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    return (
        <div className={cl.btn}>
            <div>{count}</div>
            <button onClick = {increment}>Increment</button>
        </div>
    );
};

export default Counter;