import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, set }) => {
   return (
      <li>
         <div>
            <img src={product.img} alt={product.name} />
            <div>
               <h3>{product.name}</h3>
               <span>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
         </div>
         <button aria-label="delete" title="Remover item" onClick={()=>{set(product)}}>
            <MdDelete size={21} color="#BDBDBD"/>
         </button>
      </li>
   );
};
