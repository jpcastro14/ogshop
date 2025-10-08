import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Cart() {
  const { cart, addItem, removeItem } = useContext(CartContext);
  return (
    <>
      <div className="max-w-7xl border-b-2 border-b-green-400 flex items-start mx-auto mt-10 m-10 px-5 ">
        <h2 className="font-semi-bold text-2xl ">Seu carrinho</h2>
      </div>

      {cart.length == 0 && <p>Nenhum produto</p>}

      {cart.map((product) => (
        <div
          key={product.id}
          id="Container"
          className="max-w-7xl items-center mx-auto mb-0"
        >
          <div
            id="Cart_item"
            className="max-w-7xl border-slate-200 border rounded shadow flex items-start mx-2 mt-10 p-3"
          >
            <section className="lg:flex lg:flex-row  w-full flex flex-col items-center">
              <img className="max-w-40 h-40 rounded-full" src={product.cover} />

              <div id="initial_info" className="w-36 lg:w-full lg:ml-10 ">
                <h1 className="text-4xl ">{product.title}</h1>
                <p className="bg-green-400 px-2 rounded">{product.harvest}</p>
              </div>

              <div
                id="secondary_info"
                className="m-6 w-full lg:max-w-80 rounded  lg:p-2 lg:shadow"
              >
                <h1 className="text-4xl text-start ">{product.title}</h1>
                <span className="w-full text-start border-b border-green-400">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}{" "}
                  / Grama
                </span>
                <p className=" text-start font-bold mt-2">
                  Total:{" "}
                  {product.total.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}{" "}
                  - {product.amount} {product.amount > 1 ? "Gramas" : "Grama"}
                </p>
              </div>
              <div className=" border-slate-200 p-2 border rounded-full flex flex-row justify-between items-center w-full lg:flex-col lg:w-auto lg:h-32  ">
                <BsCaretDown
                  size={30}
                  color="red"
                  className="lg:order-last"
                  onClick={() => removeItem(product)}
                />
                {product.amount}
                <BsCaretUp
                  size={30}
                  color="blue"
                  className="lg:order-first  "
                  onClick={() => addItem(product)}
                />
              </div>
            </section>
          </div>
        </div>
      ))}
      <div className="mb-20"></div>
    </>
  );
}
