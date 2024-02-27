
import Container from "./Containert";
import { NavLink } from "react-router-dom";
import logo from "../../assets/relief-aid-logo.png"
import { useAppSelector } from "../../redux/hook";

const Navbar = () => {
  const user=useAppSelector((state)=>state.auth.user)
  // const user={
  //  name:"sdgrdgtf"
  // }
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
        <NavLink
          className="bg-amber-300 text-black font-semibold text-xl p-2 rounded-md m-2"
          to={"/logout"}
        >
          Logout
        </NavLink>
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
