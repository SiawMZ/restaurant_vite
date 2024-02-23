import "./navbar.css";
import cartImage from '/image/cART.png';

import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  const signoutWithGoogle = async () => {
    const result = await signOut(auth);
    console.log(result);
    navigate("/");
  };
  const { openCart, cartQuantity } = useShoppingCart();
  

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-stone-100 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-lg font-mono leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-black"
            >
              def Appetite()
            </Link>

            <button
              className="text-red-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug">
                  <i className="fab fa-facebook-square text-lg leading-lg text-gray-800 opacity-75"></i>
                  <div className="flex items-center space-x-2">
                    <p className="text-lg">{user?.displayName}</p>
                    <img
                      className="rounded-full"
                      src={user?.photoURL || ""}
                      width="50"
                      height="50"
                    />
                  </div>
                </a>
              </li>

              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug">
                  <i className=" text-lg leading-lg"></i>
                  <Link to="/main" className="ml-2">
                    Home
                  </Link>
                </a>
              </li>

              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug">
                  <i className="text-lg leading-lg"></i>
                  {!user ? (
                    <Link to="/login" className="ml-2">
                      Login
                    </Link>
                  ) : (
                    <button
                      className="ml-2 uppercase italic"
                      onClick={signoutWithGoogle}
                    >
                      sign Out
                    </button>
                  )}
                </a>
              </li>

              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug">
                  <i className="fab fa-pinterest text-lg leading-lg"></i>
                  <Link to="/store" className="ml-2">
                    Store
                  </Link>
                </a>
              </li>

              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug">
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <Link to="/review" className="ml-2">
                    Review
                  </Link>
                </a>
              </li>

              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug ">
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <Link to="/dashboard" className="ml-2">
                    Dashboard
                  </Link>
                </a>
              </li>
            </ul>

            <div className="ml-4">
              {cartQuantity > 0 && (
                <button
                  className="cursor-pointer"
                  type="button"
                  onClick={openCart}
                >
                  <img
                    src={cartImage}
                    alt="Cart"
                    width="100"
                    height="100" // Adjust the width and height as needed
                  />

                  <span className="absolute top-9 right-25 text-red-700 text-lg font-bold ">
                    {cartQuantity}
                  </span>
                </button>
              )}

              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
