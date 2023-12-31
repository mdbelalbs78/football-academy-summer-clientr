import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";
import logo from '../../../assets/logo.png'
import useConditionalChangeTheme from "../../../hooks/useConditionalChangeTheme";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const [cart] = useCart();

  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  useConditionalChangeTheme(darkTheme ? 'dark' : 'light');

  const handleLogOut = () => {
       logOut()
       .then(() =>{})
       .catch(error => console.log(error))
  }

    const navOptions = <>
       <li><Link to='/'>Home</Link></li>
        <li><Link to='instructors'>Instructors</Link></li>
        <li><Link to='class'>Classes</Link></li>
        <li><Link to='/dashboard/studentcart'> Dashboard {cart?.length || 0} </Link></li>     
        {
          user ? <>
          <img className="w-12 rounded-full" src={user.photoURL} alt="" />
           <button onClick={handleLogOut} className="btn btn-active btn-ghost">Log Out</button>
          </> : <>
            <li><Link to='login'>Login</Link></li>
          </>
        }
    </>
    return (
  <div>
    <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white  bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Football Academy</a>
    <img  width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clip-rule="evenodd"
            className="fill-current" src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a onClick={toggleTheme} className="btn">Button</a> */}
    <button onClick={toggleTheme}>toggle</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;