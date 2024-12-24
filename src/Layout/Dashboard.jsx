import {
  FaAddressCard,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingBasket,
  FaShoppingCart,
  FaUtensilSpoon,
} from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import {
  MdContactPhone,
  MdOutlineMenuBook,
  MdOutlinePayments,
} from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  //TODO: get isAdmin value from db
  const [isAdmin] = useAdmin();
  //const isAdmin = true
  return (
    <div className="flex ">
      {/**dashboard sidebar */}
      <div className="w-64 min-h-screen bg-orange-400 ">
        <ul className="menu xs p-4 text-black">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  {" "}
                  <FaHome />
                  Admin Home{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  {" "}
                  <FaUtensilSpoon />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  {" "}
                  <FaList />
                  Manage Items
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
                <NavLink to="/dashboard/manageBookings">
                  {" "}
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  {" "}
                  <FaList />
                  My Payment History{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  {" "}
                  <FaAddressCard />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  {" "}
                  <FaHome />
                  User Home{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  {" "}
                  <FaCalendar />
                  My Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  {" "}
                  <MdOutlinePayments />
                  My Bookings{" "}
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
                <NavLink to="/dashboard/paymentHistory">
                  {" "}
                  <FaList />
                  My Payment History{" "}
                </NavLink>
              </li>
            </>
          )}
          {/**shared nav links */}
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
