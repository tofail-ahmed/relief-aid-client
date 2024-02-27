import { ReactNode } from "react"

import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";

const ProtectedRoute=({children}:{children:ReactNode})=>{
      const user=useAppSelector((state)=>state.auth.user)
      if(!user){
         return   <Navigate to={"/login"} replace={true} />
      }
      return children;
}
export default ProtectedRoute;