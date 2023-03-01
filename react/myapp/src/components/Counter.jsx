import React, {useState} from 'react'

const Counter = function() {
    const [count, setCount] = useState(10)

    function Increment() {
        setCount(count + 10);
    }

    
    function Decrement() {
        setCount(count - 10);
    }




    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>

        </div>
    )
}


export default Counter