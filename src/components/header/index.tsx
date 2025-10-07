import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import marijuana from "./assets/marijuana.png";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

export function Header() {
  const [state, setState] = useState<boolean>(true);
  const { cart, cartAmount } = useContext(CartContext);

  return (
    <header
      className="w-full px-1 bg-slate-950 "
      onClick={() => setState(!state)}
    >
      <nav className="w-full max-w-7xl h-16 flex items-center justify-between px-5 mx-auto">
        <Link
          to="/"
          className="font-semibold border p-1.5 rounded  uppercase text-green-400 "
        >
          og shop
        </Link>
        <img className="h-10" src={marijuana} />
        <Link
          className="relative bg-slate-100 p-3.5 rounded-3xl justify-self-center hover:border-2 border-green-400 duration-75  "
          to="/cart"
        >
          <FiShoppingCart />
          {cartAmount > 0 && (
            <span className="absolute bg-green-400 px-2.5 rounded-full w-6 h-6 justify-center align-middle flex -right-2.5 -top-0.5 ">
              {cartAmount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
