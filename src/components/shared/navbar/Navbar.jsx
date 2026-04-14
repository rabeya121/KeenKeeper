// import { NavLink } from "react-router-dom";
// import logo from '../../../assets/logo.png';
// import { FaHome, FaClock, FaChartBar } from "react-icons/fa";

// const Navbar = () => {
//   const linkClass = ({ isActive }) =>
//     isActive ? "text-primary font-bold" : "";

//   return (
//     <div className="navbar bg-base-200 shadow-md px-4 justify-between">

//       {/* Left */}
//       <div className="navbar-start">
//         <NavLink to="/" className="text-xl font-bold">
//           <img
//             src={logo}
//             alt="KeenKeeper Logo"

//           />
//         </NavLink>
//       </div>

//       {/* Center (desktop) */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal gap-2 px-1">

//           <li>
//                   <NavLink to="/" className={linkClass}>
//                     <FaHome />
//                     Home
//                   </NavLink>

//           </li>

//           <li>
//               <NavLink to="/timeline" className={linkClass}>
//                   <FaClock />
//                   Timeline
//               </NavLink>
//           </li>

//           <li>
//             <NavLink to="/stats" className={linkClass}>
//               <FaChartBar />
//               Stats
//             </NavLink>
//           </li>

//         </ul>
//       </div>

//       {/* Mobile dropdown */}
//       <div className="navbar-end lg:hidden">
//         <div className="dropdown dropdown-end">
//           <label tabIndex={0} className="btn btn-ghost">
//             ☰
//           </label>

//           <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">
//             <li><NavLink to="/">Home</NavLink></li>
//             <li><NavLink to="/timeline">Timeline</NavLink></li>
//             <li><NavLink to="/stats">Stats</NavLink></li>
//           </ul>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default Navbar; 
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

      {/* Left - Logo */}
      <div className="navbar-start">
        <img src={logo} alt="logo" />
      </div>

      {/* Right - Menu */}
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

      {/* Mobile Menu */}
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