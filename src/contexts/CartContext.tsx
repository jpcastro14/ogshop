import { createContext, useState, type ReactNode } from "react";
import type { ProductsProps } from "../pages/home";

//O que será enviado via context
interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItem: (newProduct: ProductsProps) => void;
  removeItem: (itemToRemove: ProductsProps) => void;
}
//A tipagem do que será enviado via context
interface CartProps {
  id: number;
  title: string;
  harvest: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);

  function addItem(newProduct: ProductsProps) {
    //verifica se existe um item no carrinho
    const indexItem = cart.findIndex((item) => item.id === newProduct.id);

    //se existir um produto no carrinho, executa o bloco abaixo
    if (indexItem !== -1) {
      let cartItem = cart;

      //Adiciona a quantidade de produtos especifica no carrinho
      cartItem[indexItem].amount = cartItem[indexItem].amount + 1;

      //Define o valor total do produto adicionado no carrinho, pela quantidade (amount)
      cartItem[indexItem].total =
        cartItem[indexItem].amount * cartItem[indexItem].price;

      setCart((product) => [...product]);
      return;
    }

    //caso não exista um produto no carrinho,
    let newItem = {
      ...newProduct,
      amount: 1,
      total: newProduct.price,
    };
    setCart((product) => [...product, newItem]);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function removeItem(product: ProductsProps) {
    const indexItem = cart.findIndex((item) => item.id == product.id);

    console.log(indexItem, cart);

    if (cart[indexItem]?.amount > 1) {
      let cartlist = cart;

      cartlist[indexItem].amount = cartlist[indexItem].amount - 1;
      cartlist[indexItem].total =
        cartlist[indexItem].total - cartlist[indexItem].price;

      setCart((products) => [...products]);

      console.log(cart);

      return;
    }

    const removed = cart.filter((item) => item.id !== product.id);
    setCart(removed);
  }

  return (
    <CartContext.Provider
      value={{ cart, cartAmount: cart.length, addItem, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
