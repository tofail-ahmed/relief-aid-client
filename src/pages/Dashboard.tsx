import DashboardHome from '../components/ui/DashboardHome'
import SideBar from '../components/ui/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-12'>
     
      
    <SideBar></SideBar>
   
    
    <div className=' adminBg col-span-10 h-full px-6 '>
      {/* <DashboardHome/> */}
      <Outlet />
    </div>
  </div>
  )
}

export default Dashboard