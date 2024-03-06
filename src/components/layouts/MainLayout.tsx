import { Outlet } from 'react-router-dom'


import Header from "../ui/Header";

const MainLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout