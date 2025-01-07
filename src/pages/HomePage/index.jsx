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
   console.log(cartList)


   useEffect(() => {
      const product = async () => {
         const { data } = await api.get();
         setProductList(data)
      }
      product()
   }, [])

   

   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

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
