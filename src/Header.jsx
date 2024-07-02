import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import cart from "../assets/shopping-cart.svg";
import { useState } from "react";
import { useMovies, useTheme } from "./context/hooks";
import ShoppingCart from "./Cine/ShoppingCart";

const Header = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const { state } = useMovies();
  const { darkMode, setDarkMode } = useTheme();
  return (
    <header>
      {isOpen && <ShoppingCart SetIsOpen={SetIsOpen} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a
              onClick={() => setDarkMode((darkMode) => !darkMode)}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                src={darkMode ? sun : moon}
                width="24"
                height="24"
                alt="sun"
              />
            </a>
          </li>
          <li>
            <a
              onClick={() => SetIsOpen(true)}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={cart} width="24" height="24" alt="cart" />
              {state.addToCart.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#44a876] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {state.addToCart.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
