import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import "../../styles/globalStyles.scss"
import { api } from "../../services/api";
import toast from "react-hot-toast";

export const HomePage = () => {
   const cart = localStorage.getItem("@buy")
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(cart? JSON.parse(cart) : []);
   const [isOen, setOpen] = useState(false);


   useEffect(() => {
      const product = async () => {
         const { data } = await api.get();
         setProductList(data)
      }
      product()
   }, [])
   
   return (
      <>
         <Header product={productList} setProduct={setProductList} set={setOpen} length={cartList.length}/>
         <main>
            <ProductList productList={productList} a={cartList} set={setCartList} />
            {isOen?
            <CartModal cartList={cartList} setCre={setCartList} set={setOpen} open={isOen}/> : null}
         </main>
      </>
   );
};
