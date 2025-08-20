import "../styles/global.css";

import React from "react";
import { useState } from "react";

export default function Navbar({name}){

    const [count, setCount] = useState(0);

    return (
        <>
            <h1 class="text-3xl font-sans md:font-serif text-center">
                    Hello world!
            </h1>
            <h1>This is Navbar</h1>
            <h1>{name}</h1>
            <button onClick={() => setCount(count+1)}>Count</button>
            <h1>{count}</h1>
        </>
    )
}