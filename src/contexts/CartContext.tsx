import { createContext, useState, type ReactNode } from "react";
import type { ProductsProps } from "../pages/home";
import { message } from "antd";

//O que será enviado via context
interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItem: (newProduct: ProductsProps) => void;
  removeItem: (itemToRemove: ProductsProps) => void;
  cartTotal: string;
  contextHolder: any;
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
  available: number;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [cartTotal, setCartTotal] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  function addItem(newProduct: ProductsProps) {
    //verifica se existe um item no carrinho
    const indexItem = cart.findIndex((item) => item.id === newProduct.id);
    const availableqtd = newProduct.available;

    console.log(availableqtd);

    //se existir um produto no carrinho
    if (indexItem !== -1) {
      let cartItem = cart;

      //Aumenta a quantidade do produto selecionado
      cartItem[indexItem].amount = cartItem[indexItem].amount + 1;

      if (cartItem[indexItem].amount > availableqtd) {
        cartItem[indexItem].amount = availableqtd;

        messageApi.open({
          type: "error",
          content: `Somente ${cartItem[indexItem].available} gramas disponíveis `,
        });

        setCart((product) => [...product]);
      }

      //Calcula o preço total do produto, multiplicando a quantidade pelo preço.
      cartItem[indexItem].total =
        cartItem[indexItem].amount * cartItem[indexItem].price;

      setCart((product) => [...product]);
      createTotal(cartItem);

      //Abre alerta para informar que um produto foi adicionado ao carrinho
      return;
    }

    //caso não exista um produto no carrinho,
    let newItem = {
      ...newProduct,
      amount: 1,
      total: newProduct.price,
    };
    setCart((product) => [...product, newItem]);
    createTotal([...cart, newItem]);
    messageApi.open({
      type: "success",
      content: `Produto adicionado ao carrinho`,
    });
  }

  function removeItem(product: ProductsProps) {
    //Verifica se o produto existe no carrinho
    const indexItem = cart.findIndex((item) => item.id == product.id);

    //verifica se a quantidade de produtos é maior que 1, para que seja reduzida do total e não excluida por completo.
    if (cart[indexItem]?.amount > 1) {
      let cartlist = cart;

      //Remove uma unidade do "amount" a cada clique.
      cartlist[indexItem].amount = cartlist[indexItem].amount - 1;

      //Define o total de preço do produto, multiplicando pela quantidade (amount).
      cartlist[indexItem].total =
        cartlist[indexItem].price * cartlist[indexItem].amount;

      //Define o state com o valor atualizado, fazendo spread com os novos dados que foram alterados no bloco acima.
      setCart((products) => [...products]);
      createTotal(cartlist);
      return;
    }

    //Se a quantidade do produto no carrinho for 1, ele somente remove e retorna o cart sem o produto definido.
    const removed = cart.filter((item) => item.id !== product.id);
    setCart(removed);
    createTotal(removed);
    //Abre mensagem de dialogo apos remover um produto do carrinho
    messageApi.open({
      type: "error",
      content: "Produto removido do carrinho!!",
      duration: 3,
    });
  }

  function createTotal(item: CartProps[]) {
    //Busca o total recebido como argumento e soma todos os preços de cada produto adicionado.
    let total = item.reduce((acc, obj) => {
      return acc + obj.total;
    }, 0);

    const formatedTotal = total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    setCartTotal(formatedTotal);
    return total;
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount: cart.length,
        addItem,
        removeItem,
        cartTotal,
        contextHolder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
