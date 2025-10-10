import { BsCaretDown, BsCaretUp, BsExclamationCircle } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export function Cart() {
  const { cart, cartTotal, addItem, removeItem, contextHolder } =
    useContext(CartContext);
  return (
    <>
      {contextHolder}
      <div className="max-w-7xl border-b-2 border-b-green-400 flex items-start mx-auto mt-10 m-10 px-5 ">
        <h2 className="font-semi-bold text-2xl ">Seu carrinho</h2>
      </div>

      {cart.length == 0 && (
        <>
          <div className="w-full max-w-7xl mx-auto  p-5 flex items-center justify-center ">
            <BsExclamationCircle size={30} color="red" />
            <p className="text-2xl  p-5 rounded-full ">
              Ops, Não há nenhum produto em seu carrinho!
            </p>
          </div>
          <div className="w-full flex max-w-7xl mx-auto items-center justify-center ">
            <Link to={"/"}>
              <button className="bg-green-400 w-2xs h-10 mt-5 rounded shadow-slate-600 shadow ">
                Acessar Produtos
              </button>
            </Link>
          </div>
        </>
      )}

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
              <img className="max-w-40 h-40 rounded" src={product.cover} />

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
                <BsCaretUp
                  size={30}
                  color="blue"
                  className="lg:order-first"
                  onClick={() => addItem(product)}
                />
                {product.amount}
                <BsCaretDown
                  size={30}
                  color="red"
                  className="lg:order-second"
                  onClick={() => removeItem(product)}
                />
              </div>
            </section>
          </div>
        </div>
      ))}
      {cartTotal !== "" && (
        <div className="w-full max-w-7xl border items-end flex flex-col border-slate-200 rounded mx-auto mt-10 p-5 ">
          <p className="font-semi-bold text-3xl">Total da compra:</p>
          <p className="font-bold mt-2 text-xl bg-green-100 p-2 px-15 rounded-full ">
            {cartTotal}
          </p>
        </div>
      )}
    </>
  );
}
