import { createContext, useState, type ReactNode } from "react";
import type { ProductsProps } from "../pages/home";

//O que será enviado via context
interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItem: (newProduct: ProductsProps) => void;
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
    const indexItem = cart.findIndex((item) => item.id === newProduct.id);

    if (indexItem !== -1) {
      let cartItem = cart;

      cartItem[indexItem].amount = cartItem[indexItem].amount + 1;
      cartItem[indexItem].total =
        cartItem[indexItem].amount * cartItem[indexItem].price;

      setCart(cartItem);
      console.log(cart);
      return;
    }

    let newItem = {
      ...newProduct,
      amount: 1,
      total: newProduct.price,
    };

    setCart((product) => [...product, newItem]);
  }

  return (
    <CartContext.Provider value={{ cart, cartAmount: cart.length, addItem }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
