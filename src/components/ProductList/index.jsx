import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, a, set }) => {
   useEffect(()=>{
      { a ? localStorage.setItem("@buy", JSON.stringify(a)) : null};
      set(a)
   },[a])

   return (
      <ul className="all-boxes">
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} setAdd={set} add={a}/>
         ))}
      </ul>
   );
};
