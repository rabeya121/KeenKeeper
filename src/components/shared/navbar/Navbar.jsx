import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FaHome, FaClock, FaChartBar } from "react-icons/fa";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-2 bg-[#244d3f] text-white px-4 py-2 rounded-lg text-sm"
      : "flex items-center gap-2 text-gray-600 hover:text-black px-4 py-2 text-sm";

  return (
    <div className="navbar bg-white border-b border-[#E5E7EB] px-6">

      
      <div className="navbar-start">
        <img src={logo} alt="logo" />
      </div>

      
      <div className="navbar-end hidden lg:flex">
        <ul className="flex items-center gap-3">

          <li>
            <NavLink to="/" className={linkClass}>
              <FaHome />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/timeline" className={linkClass}>
              <FaClock />
              Timeline
            </NavLink>
          </li>

          <li>
            <NavLink to="/stats" className={linkClass}>
              <FaChartBar />
              Stats
            </NavLink>
          </li>

        </ul>
      </div>

      
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost text-xl">
            ☰
          </label>

          <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-44">

            <li>
              <NavLink to="/" className="flex items-center gap-2">
                <FaHome /> Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/timeline" className="flex items-center gap-2">
                <FaClock /> Timeline
              </NavLink>
            </li>

            <li>
              <NavLink to="/stats" className="flex items-center gap-2">
                <FaChartBar /> Stats
              </NavLink>
            </li>

          </ul>
        </div>
      </div>

    </div>
  );
};

export default Navbar;