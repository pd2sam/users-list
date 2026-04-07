import { useState } from "react";
import { IProduct } from "./types/types";



export function Product({title, price}: IProduct) {
    return <div>
        {title}
        {price}
    </div>
}