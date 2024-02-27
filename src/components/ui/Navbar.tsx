
import Container from "./Containert";
import { NavLink } from "react-router-dom";
import logo from "../../assets/relief-aid-logo.png"
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logOut } from "../../redux/auth/authSlice";

const Navbar = () => {
  const user=useAppSelector((state)=>state.auth.user);
  const dispatch=useAppDispatch()
  const handleLogout=()=>{
    dispatch(logOut())
  }
  return (
    <Container className="bg-slate-400/50 flex justify-between items-center">
      <NavLink to={"/"}>
        <img className="size-[100px] rounded-full" src={logo} alt="" />
      </NavLink>
      <NavLink
        className="bg-amber-300 text-black font-semibold text-xl p-2 rounded-md m-2"
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className="bg-amber-300 text-black font-semibold text-xl p-2 rounded-md m-2"
        to={"/relief-goods"}
      >
        All Relief goods
      </NavLink>
      <NavLink
        className="bg-amber-300 text-black font-semibold text-xl p-2 rounded-md m-2"
        to={"/dashboard"}
      >
        Dashboard
      </NavLink>
    
     
      {(user?.email) ? (
        <button
          className="bg-amber-300 text-black font-semibold text-xl p-2 rounded-md m-2"
         
          onClick={handleLogout}
        >
          Logout
        </button>
      ):  (
        <NavLink
          className="bg-amber-300 text-black font-semibold text-xl p-2 rounded-md m-2"
          to={"/login"}
        >
          Login
        </NavLink>)}
    </Container>
  );
};

export default Navbar;
