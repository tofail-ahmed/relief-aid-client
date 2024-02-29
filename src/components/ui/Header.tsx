import Container from "./Containert";
import { NavLink } from "react-router-dom";
import logo from "../../assets/relief-aid-logo.png";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logOut } from "../../redux/auth/authSlice";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
const Header = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <Container>
      <div className="navbar bg-red-100/50 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
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
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-red-500 rounded-box w-52"
            >
              <li>
            <NavLink
          className="bg-orange-500 text-black font-semibold  p-2 rounded-md m-2"
          to={"/"}
        >
          Home
        </NavLink>
            </li>

            <li>
            <NavLink
          className="bg-orange-500 text-black font-semibold  p-2 rounded-md m-2"
          to={"/relief-goods"}
        >
          All Relief goods
        </NavLink>
            </li>
            <li>
            <NavLink
          className="bg-orange-500 text-black font-semibold  p-2 rounded-md m-2"
          to={"/dashboard"}
        >
          Dashboard
        </NavLink>
            </li>
            </ul>
          </div>
          <NavLink to={"/"}>
            <img className="size-[80px] p-2 rounded-full" src={logo} alt="" />
          </NavLink>{" "}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <NavLink
          className="bg-orange-500 text-black font-semibold  p-2 rounded-md m-2"
          to={"/"}
        >
          Home
        </NavLink>
            </li>

            <li>
            <NavLink
          className="bg-orange-500 text-black font-semibold  p-2 rounded-md m-2"
          to={"/relief-goods"}
        >
          All Relief goods
        </NavLink>
            </li>
            <li>
            <NavLink
          className="bg-orange-500 text-black font-semibold  p-2 rounded-md m-2"
          to={"/dashboard"}
        >
          Dashboard
        </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <button
              className="bg-orange-500 text-black font-semibold  p-2 rounded-md m-2"
              onClick={handleLogout}
            >
              <span className="flex items-center gap-1">
                {" "}
                Logout <IoIosLogOut />
              </span>
            </button>
          ) : (
            <NavLink
              className="bg-orange-500 text-black font-semibold  p-2 rounded-md m-2"
              to={"/login"}
            >
              <span className="flex items-center gap-1">Login<IoIosLogIn /></span>

            </NavLink>
          )}
        </div>
      </div>
    </Container>
    </div>
  );
};

export default Header;
