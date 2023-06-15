import { NavLink , Outlet } from "react-router-dom";
import { FaHome} from 'react-icons/fa';
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/userInstructor";
// import useAdmin from "../../hooks/useAdmin";



const Dashboard = () => {

   
   
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()

    return (
    <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            <Outlet></Outlet>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side bg-slate-400">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 h-full  text-base-content">

                {
                    isAdmin ? <>
                      <li><NavLink  to='/dashboard/classes'>Manage Classes</NavLink ></li>
                      <li><NavLink  to='/dashboard/users'>Manage Users</NavLink ></li>
                                        
                     </> : isInstructor ? 
                        <>                    
                        
                          <li><NavLink  to='/dashboard/addclass'>Classes Add</NavLink ></li>
                          <li><NavLink  to='/dashboard/myclass'>My Classes</NavLink ></li>
                       
                      </>    
                      :               
                      <>
                      <li><NavLink  to='/dashboard/studentcart'>Selected Classes</NavLink ></li>
                          <li><NavLink to='/dashboard/enroll'>Enrolled Classes</NavLink ></li>
                      </>}
                
               

            <div className="divider"></div>
            <li><NavLink  to='/'><FaHome></FaHome>Home</NavLink ></li>
       </ul>
  </div>
</div>
    );
};

export default Dashboard;