import { useState } from "react";
import { IProduct } from "./types/types";



export function Product({title, price}: IProduct) {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        setCount(count + 1);
    }
    const handleRemove = () => {
        setCount(Math.max(0, count - 1))
    }
    
    return <div>
        {title}
        {price} <br />
        <h2>Products: {count}</h2>
        <button onClick={handleAdd}>Add product</button> <br />
        <button onClick={handleRemove}>Delete</button>
    </div>
}