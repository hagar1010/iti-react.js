import React, { useState } from 'react'

function FunctionCounter() {
    const [counter, setCounter] = useState(0)
    return (
        <section>
            <h1>FUNCTION COMPONANT</h1>
            <br/>
            <div className="counter">
                <button onClick={() => {
                    setCounter(counter+1)
                }}>+</button>

                <p>{counter}</p>
                
                <button onClick={() => {
                    counter==0?null:
                    setCounter(counter-1)
                }}>-</button>
            </div>
        </section>
    )
}

export default FunctionCounter