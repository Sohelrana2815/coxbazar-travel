import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";
const Navbar = () => {
  const navLinks = (
    <>
      <div className="space-x-6 flex ml-24">
        <li>
          <NavLink to="/" className="text-white font-bold">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/destination" className="text-white font-bold">
            Destination
          </NavLink>
        </li>
        <li>
          <NavLink to="/Blog" className="text-white font-bold">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="text-white font-bold">
            Contact
          </NavLink>
        </li>
      </div>
    </>
  );

  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <img width={150} src={logo} alt="" />
          <input
            type="text"
            placeholder="Type here"
            className="input  w-full max-w-xs"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className="btn btn-warning">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
