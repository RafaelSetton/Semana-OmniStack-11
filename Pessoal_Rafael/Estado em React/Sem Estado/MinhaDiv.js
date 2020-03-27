import React from 'react'

export default function MinhaDiv({ title, children }) {
    let counter = 0

    function increment() {
        counter++

        console.log(counter)
    }

    return (
    <div>
        <h1>{title}</h1>
        <p>{children} {counter}</p>
        <button onClick={increment}>Incrementar</button>
    </div>
    )
}