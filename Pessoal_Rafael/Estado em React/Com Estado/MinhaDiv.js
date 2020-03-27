import React, { useState } from 'react'

export default function MinhaDiv({ title, children }) {
    const [counter, updateCounter] = useState(0)

    function increment() {
        updateCounter(counter + 1)
    }

    return (
    <div>
        <h1>{title}</h1>
        <p>{children} {counter}</p>
        <button onClick={increment}>Incrementar</button>
    </div>
    )
}