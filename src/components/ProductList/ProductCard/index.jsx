import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast";

export const ProductCard = ({ product, setAdd, add }) => {
    const alreadyHere = () =>{
        const p = add.find(e => e.id === product.id);
        if(p){
            toast("Numero máximo desse item.")

        } else{
            setAdd([...add, product])
        }
    }
    
    return(
        <li>
            <div className="img-div">
                <img src={product.img} alt={product.name} />
            </div>
            <div className="div-main">
                <h3>{product.name}</h3>
                <span className="category">{product.category}</span>
                <span className="price">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button onClick={alreadyHere}>Adicionar</button>
                <Toaster />
            </div>
        </li>
    )
}