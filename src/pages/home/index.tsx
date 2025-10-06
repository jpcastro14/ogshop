import { BsCartPlus } from "react-icons/bs";

export function Home() {
  return (
    <>
      <div className="w-full max-w-7xl flex items-start border-b-2 border-b-green-400 m-10 mx-auto px-5">
        Mais vendidos
      </div>
      <div className="w-full max-w-7xl grid gap-5 justify-self-center mt-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-10">
        <section className=" relative shadow-sm min-w-72 max-w-lg w-full justify-items-center rounded-md mx-auto mb-2.5 hover scale-100 ">
          <img
            className="w-50 min-h-50"
            src="https://media.istockphoto.com/id/182838201/pt/foto/margarida-no-branco-com-tra%C3%A7ado-de-recorte.jpg?s=2048x2048&w=is&k=20&c=8YFMCqQ3iGyOsdC-H-TYMIlX2lXYeJM-OqztExckZFQ="
          />
          <p>Girassol 10g - Safra Julho 2025</p>
          <div className="w-full flex flex-row my-5 px-5 gap-2.5 text-center">
            <s className="  text-red-500 p-0.5 ">R$:28.00</s>
            <p className=" rounded w-full bg-green-500 text-white p-0.5 hover:bg-green-700 transition 300ms ">
              R$:25.00 - 1 Grama
            </p>
          </div>
          <div className="w-full px-5 mb-5 ">
            <button className="w-full">
              <BsCartPlus className="border  rounded w-full h-8 py-0.5" />
            </button>
          </div>
          <span className="absolute bg-amber-400 px-2.5 rounded-full w-6 h-6 justify-center align-middle flex top-4 right-4 ">
            %
          </span>
        </section>
        <section className=" relative shadow-sm min-w-72 max-w-lg w-full justify-items-center rounded-md mx-auto mb-2.5 hover scale-100 ">
          <img
            className="w-50 min-h-50"
            src="https://media.istockphoto.com/id/182838201/pt/foto/margarida-no-branco-com-tra%C3%A7ado-de-recorte.jpg?s=2048x2048&w=is&k=20&c=8YFMCqQ3iGyOsdC-H-TYMIlX2lXYeJM-OqztExckZFQ="
          />
          <p>Girassol 10g - Safra Julho 2025</p>
          <div className="w-full flex flex-row my-5 px-5 gap-2.5 text-center">
            <s className="  text-red-500 p-0.5 ">R$:28.00</s>
            <p className=" rounded w-full bg-green-500 text-white p-0.5 hover:bg-green-700 transition 300ms ">
              R$:25.00 - 1 Grama
            </p>
          </div>
          <div className="w-full px-5 mb-5 ">
            <button className="w-full">
              <BsCartPlus className="border  rounded w-full h-8 py-0.5" />
            </button>
          </div>
          <span className="absolute bg-amber-400 px-2.5 rounded-full w-6 h-6 justify-center align-middle flex top-4 right-4 ">
            %
          </span>
        </section>
        <section className=" relative shadow-sm min-w-72 max-w-lg w-full justify-items-center rounded-md mx-auto mb-2.5 hover scale-100 ">
          <img
            className="w-50 min-h-50"
            src="https://media.istockphoto.com/id/182838201/pt/foto/margarida-no-branco-com-tra%C3%A7ado-de-recorte.jpg?s=2048x2048&w=is&k=20&c=8YFMCqQ3iGyOsdC-H-TYMIlX2lXYeJM-OqztExckZFQ="
          />
          <p>Girassol 10g - Safra Julho 2025</p>
          <div className="w-full flex flex-row my-5 px-5 gap-2.5 text-center">
            <s className="  text-red-500 p-0.5 ">R$:28.00</s>
            <p className=" rounded w-full bg-green-500 text-white p-0.5 hover:bg-green-700 transition 300ms ">
              R$:25.00 - 1 Grama
            </p>
          </div>
          <div className="w-full px-5 mb-5 ">
            <button className="w-full">
              <BsCartPlus className="border  rounded w-full h-8 py-0.5" />
            </button>
          </div>
          <span className="absolute bg-amber-400 px-2.5 rounded-full w-6 h-6 justify-center align-middle flex top-4 right-4 ">
            %
          </span>
        </section>
        <section className=" relative shadow-sm min-w-72 max-w-lg w-full justify-items-center rounded-md mx-auto mb-2.5 hover scale-100 ">
          <img
            className="w-50 min-h-50"
            src="https://media.istockphoto.com/id/182838201/pt/foto/margarida-no-branco-com-tra%C3%A7ado-de-recorte.jpg?s=2048x2048&w=is&k=20&c=8YFMCqQ3iGyOsdC-H-TYMIlX2lXYeJM-OqztExckZFQ="
          />
          <p>Girassol 10g - Safra Julho 2025</p>
          <div className="w-full flex flex-row my-5 px-5 gap-2.5 text-center">
            <s className="  text-red-500 p-0.5 ">R$:28.00</s>
            <p className=" rounded w-full bg-green-500 text-white p-0.5 hover:bg-green-700 transition 300ms ">
              R$:25.00 - 1 Grama
            </p>
          </div>
          <div className="w-full px-5 mb-5 ">
            <button className="w-full">
              <BsCartPlus className="border  rounded w-full h-8 py-0.5" />
            </button>
          </div>
          <span className="absolute bg-amber-400 px-2.5 rounded-full w-6 h-6 justify-center align-middle flex top-4 right-4 ">
            %
          </span>
        </section>
      </div>
    </>
  );
}
