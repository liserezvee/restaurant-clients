import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../../hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("log out successful");
      })
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li></li>
      <li>
        <Link to="/contact">CONTACT US</Link>
      </li>
      <li>
        <Link to="/menu">OUR MENU</Link>
      </li>
      <li>
        <Link to="/order/salad">ORDER FOOD</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 bg-opacity-60 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <a className="lg:text-xl">
            Bistro Boss <br />
            Restaurant
          </a>
        </div>
        <div className="navbar-center hidden lg:flex font-bold text-white">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/dashboard/cart">
            <button className="btn">
              <FaShoppingCart />
              <div className="badge badge-secondary">{cart.length}</div>
            </button>
          </Link>

          <div className="mr-5">
            {user ? (
              <>
                <button onClick={handleLogOut} className="btn btn-ghost  text-black font-bold">
                  <p>
                    <span className="uppercase text-black font-bold">{user?.displayName} </span>
                  </p>
                  Log Out
                </button>
              </>
            ) : (
              <>
                <button className="font-bold  text-black font-bold">
                  <Link to="/login">Login</Link>
                </button>
              </>
            )}
          </div>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-4 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
