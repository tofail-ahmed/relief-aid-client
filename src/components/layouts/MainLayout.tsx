import { Outlet } from 'react-router-dom'


import Header from "../ui/Header";
import { useAppSelector } from '../../redux/hook';

const MainLayout = () => {
  const darkMode=useAppSelector((store)=>store.theme.darkMode);
  return (
    <div className={`${darkMode?"bg-black text-white":""}`}>
      {/* <Navbar /> */}
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout