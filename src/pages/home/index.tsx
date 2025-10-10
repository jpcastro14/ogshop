import { BsCartPlus, BsQuestionCircle, BsArrowDown } from "react-icons/bs";
import { api } from "../../services/api";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export interface ProductsProps {
  id: number;
  title: string;
  harvest: string;
  price: number;
  cover: string;
}

export function Home() {
  const { addItem, contextHolder } = useContext(CartContext);

  const [products, setProducts] = useState<ProductsProps[]>([]);
  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }
    getProducts();
  }, []);

  return (
    <>
      {contextHolder}
      {/* Elemento visual de divisão "mais vendidos" */}
      <div className="w-full max-w-7xl flex items-start border-b-2 border-b-green-400 m-10 mx-auto px-5">
        Mais vendidos
      </div>

      {/* Produtos */}
      <div className="w-full max-w-7xl grid gap-5 justify-self-center mt-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-10">
        {products.map((product) => (
          <section
            key={product.id}
            className=" relative shadow-sm min-w-72 max-w-lg w-full justify-items-center rounded-md mx-auto mb-2.5 hover scale-100 "
          >
            <img className="max-h-64 w-full rounded mb-5" src={product.cover} />
            <p>
              {product.title} - {product.harvest}
            </p>
            <div className="w-full flex flex-row my-5 px-5 gap-2.5 text-center">
              <p className=" rounded w-full bg-green-500 text-white p-0.5 hover:bg-green-700 transition 300ms ">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}{" "}
                / Grama
              </p>
            </div>
            <div className="w-full  m-5 flex justify-around">
              <button className="w-full items-center flex justify-center">
                <BsQuestionCircle
                  size={30}
                  color="orange"
                  className="hover:scale-125 transition-all ease-out "
                />
              </button>
              <button className=" w-full items-center flex justify-center">
                <BsCartPlus
                  onClick={() => addItem(product)}
                  size={30}
                  className="hover:scale-125 transition-all ease-out active:scale-80 "
                  color="green"
                />
              </button>
            </div>
            {product.price <= 30 && (
              <span className="absolute bg-green-400 rounded-full w-12 h-12 items-center justify-center font- flex top-4 right-4 ">
                <BsArrowDown size={20} />
              </span>
            )}
          </section>
        ))}
      </div>
    </>
  );
}
