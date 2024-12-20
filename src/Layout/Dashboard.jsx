import {
  FaAddressCard,
  FaCalendar,
  FaHome,
  FaShoppingBasket,
  FaShoppingCart,
} from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import {
  MdContactPhone,
  MdOutlineMenuBook,
  MdOutlinePayments,
} from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex ">
        
      {/**dashboard sidebar */}
      <div className="w-64 min-h-screen bg-orange-400 ">
        <ul className="menu xs p-4 text-black">
          <li>
            <NavLink to="/dashboard/userHome">
              {" "}
              <FaHome />
              User Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              {" "}
              <FaCalendar />
              My Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment">
              {" "}
              <MdOutlinePayments />
              My Payment{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              {" "}
              <FaShoppingCart />
              My Cart ({cart.length}){" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              {" "}
              <FaAddressCard />
              Add Review{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              {" "}
              <FaBook />
              My Booking{" "}
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              {" "}
              <FaHome />
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              {" "}
              <MdOutlineMenuBook />
              Menu{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/:category">
              {" "}
              <FaShoppingBasket />
              Order{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              {" "}
              <MdContactPhone />
              Contact{" "}
            </NavLink>
          </li>
        </ul>
      </div>
      {/**dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;