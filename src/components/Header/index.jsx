import { useEffect, useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { CartModal } from "../CartModal";

export const Header = ({ product, setProduct, set, length }) => {
   const [value, setValue] = useState("");
   
   return (
      <header>
         <div>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <div>
               <button onClick={()=>{set(true)}}>
                  <MdShoppingCart size={21} color="#BDBDBD" />
                  <span>{ length }</span>
               </button>
               <form >
                  <input
                     type="text"
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                  />
                  <button type="submit">
                  <MdSearch size={21} color="#BDBDBD"  />
                  </button>
               </form>
            </div>
         </div>
      </header>
   );
};
