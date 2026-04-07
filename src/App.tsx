import React, { useState } from "react";
import './App.css';


export const App: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <h1>Vite + React + TypeScript</h1>
            <p className="counter">Count: {count}</p>
            <button onClick={() => setCount(c => c + 1)}>
                Increment
            </button>
        </div>
    )
}