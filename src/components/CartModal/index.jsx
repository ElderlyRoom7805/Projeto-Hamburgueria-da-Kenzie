import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { useEffect, useState } from "react";

export const CartModal = ({ cartList, set, setCre }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);
   const [del, setDel] = useState({});
   useEffect(()=>{
      const deleteItem = cartList.filter((e) => {return e.id !== del.id})
      setCre(deleteItem)
      localStorage.removeItem("@buy")
   }, [del])
   const removeAll = () =>{
      setCre([])
      localStorage.removeItem("@buy")
   }
   return (
      <div role="dialog" className="modal">
         <div className="modal-box">
            <div className="header-modal">
               <div>
                  <h2>Carrinho de compras</h2>
                  <button aria-label="close" title="Fechar" onClick={()=>{set(false)}}>
                     <MdClose size={21} color="#ffffff"/>
                  </button>
                  
               </div>
            </div>
            <div className="main-modal">
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} set={setDel} />
                  ))}
               </ul>
            </div>
            <div className="footer-modal">
               <div>
                  <span className="total">Total</span>
                  <span className="total">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button onClick={removeAll}>Remover todos</button>
            </div>

         </div>
      </div>
   );
};
