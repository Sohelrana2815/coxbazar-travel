import { Link, NavLink } from "react-router-dom";
import fram from "../../../public/Frame.png";
import { GoSearch } from "react-icons/go";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
          <img width={150} src={fram} alt="" />
          <span className="text-lg relative">
            <GoSearch className="absolute -top-2 left-1" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="input  w-full max-w-xs px-6 ml-10 "
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <p className="text-warning">{user.email}</p>
              <button onClick={handleLogOut} className="btn btn-error">
                sign out
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn btn-warning">Login</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
