import { BsTrash, BsPlus } from "react-icons/bs";

export function Cart() {
  return (
    <>
      <div className="max-w-7xl border-b-2 border-b-green-400 flex items-start mx-auto mt-10 m-10 px-5 ">
        <h2 className="font-semi-bold text-2xl ">Seu carrinho</h2>
      </div>

      <div id="Container" className="max-w-7xl items-center mx-auto">
        <div
          id="Cart_item"
          className="max-w-7xl border-slate-200 border rounded shadow flex items-start mx-2 mt-10 p-3"
        >
          <section className="lg:flex lg:flex-row  w-full flex flex-col items-center">
            <img
              className="max-w-40 shadow rounded-full"
              src="https://media.istockphoto.com/id/182838201/pt/foto/margarida-no-branco-com-tra%C3%A7ado-de-recorte.jpg?s=2048x2048&w=is&k=20&c=8YFMCqQ3iGyOsdC-H-TYMIlX2lXYeJM-OqztExckZFQ="
            />

            <div id="initial_info" className="w-36 lg:w-full lg:ml-10 ">
              <h1 className="text-4xl ">Girassol</h1>
              <p className="bg-green-400 px-2 rounded">Safra Maio - 2025</p>
            </div>

            <div
              id="secondary_info"
              className="m-6 w-full lg:max-w-80 rounded  lg:p-2 lg:shadow"
            >
              <h1 className="text-4xl text-start ">Girassol</h1>
              <span className="w-full text-start border-b border-green-400">
                R$: 25 / Grama
              </span>
              <p className=" text-start font-bold mt-2">
                Total: R$:100 - 4 Gramas
              </p>
            </div>
            <div className=" border-slate-200 p-2 border rounded-full flex flex-row justify-between w-full lg:flex-col lg:w-auto lg:h-32  ">
              <BsTrash size={30} color="red" className="lg:order-last" />
              <BsPlus size={30} color="blue" className="lg:order-first" />
            </div>
          </section>
        </div>
        <div
          id="Cart_item"
          className="max-w-7xl border-slate-200 border rounded shadow flex items-start mx-2 mt-10 p-3"
        >
          <section className="lg:flex lg:flex-row  w-full flex flex-col items-center">
            <img
              className="max-w-40 shadow rounded-full"
              src="https://media.istockphoto.com/id/182838201/pt/foto/margarida-no-branco-com-tra%C3%A7ado-de-recorte.jpg?s=2048x2048&w=is&k=20&c=8YFMCqQ3iGyOsdC-H-TYMIlX2lXYeJM-OqztExckZFQ="
            />
            <div id="initial_info" className="w-36 lg:w-full lg:ml-5 ">
              <h1 className="text-4xl ">Girassol</h1>
              <p className="bg-green-400 px-2 rounded">Safra Maio - 2025</p>
            </div>

            <div
              id="secondary_info"
              className="m-6 w-full lg:max-w-80 rounded  lg:p-2 lg:shadow"
            >
              <h1 className="text-4xl text-start ">Girassol</h1>
              <span className="w-full text-start border-b border-green-400">
                R$: 25 / Grama
              </span>
              <p className=" text-start font-bold mt-2">
                Total: R$:100 - 4 Gramas
              </p>
            </div>
            <div className=" border-slate-200 p-2 border rounded-full flex flex-row justify-between w-full lg:flex-col lg:w-auto lg:h-32  ">
              <BsTrash size={30} color="red" className="lg:order-last" />
              <BsPlus size={30} color="blue" className="lg:order-first" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
