import React, { useState } from 'react'

export default function MinhaDiv({ title, children }) {
    const [counter, updateCounter] = useState(0)

    function increment() {
        updateCounter(counter + 1)
    }

    return (
    <div>
        <h1>{title}</h1>
        <h3>{children}</h3>
        <p>O botão <button onClick={increment}>Incrementar</button> foi clicado {counter} vezes</p>
    </div>
    )
}