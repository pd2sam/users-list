
interface IProduct {
    title: string;
    price: string;
}


export function Product({title, price}: IProduct) {
    return <div>
        {title}
        {price}
    </div>
}