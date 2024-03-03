
import { NavLink } from 'react-router-dom'
import { cn } from '../../libs/utils'
import logo from "../../assets/relief-aid-logo.png";

const SideBar = () => {
  return (
    <div className="bg-rose-200 col-span-2 h-screen sticky top-0 left-0 overflow-auto ">
      <nav className="flex flex-col gap-4 mt-4 mx-2">
        <NavLink
          
          to={"/"}
        >
          <img className="size-[80px] rounded-full mx-auto" src={logo} alt="" />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "p-3 bg-gray-400 rounded-md truncate text-black font-bold transition-all flex items-center gap-2",
              { "bg-gray-800 text-white": isActive }
            )
          }
          to={"/dashboard"}
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "p-3 bg-gray-400 rounded-md truncate text-black font-bold transition-all flex items-center gap-2",
              { "bg-gray-800 text-white": isActive }
            )
          }
          to={"/dashboard/supplies"}
        >
          Supplies
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "p-3 bg-gray-400 rounded-md truncate text-black font-bold transition-all flex items-center gap-2",
              { "bg-gray-800 text-white": isActive }
            )
          }
          to={"/dashboard/create-supply"}
        >
          Add Supply
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar