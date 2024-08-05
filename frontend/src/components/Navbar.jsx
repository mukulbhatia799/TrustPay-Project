import logo from "../images/main-logo.png";
import personImg from "../images/person-image.jpg";
import {useNavigate} from 'react-router-dom'
// import Dropdown from './Dropdown.jsx'

// export function Navbar() {
//   return (
//     <div>
//       <div className="flex justify-between px-6 py-2 sm:py-10 text-lg  font-extrabold items-center sm:text-3xl sm:px-10 bg-[#2793FE]">
//         <div>
//           <img src={logo} alt="trustpay logo" className="w-20 sm:w-48" />
//         </div>
//         <div className="flex gap-2 items-center font-normal">
//           <div className="text-xs sm:text-3xl">Hello, User</div>
//           <div className="rounded-full bg-slate-400 w-10 h-10 flex justify-center items-center text-xs sm:text-3xl">
//             U
//           </div>
//           {/* <Dropdown /> */}
//         </div>
//       </div>
//       <hr />
//     </div>
//   );
// }

// components/Navbar.js

import React, { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={logo} alt="trustpay logo" className="w-20 sm:w-48" />
        </div>
        <div className="relative flex gap-5 justify-center items-center">
          <div className="text-xs sm:text-3xl">Hello, User</div>
          <button onClick={toggleDropdown} className="focus:outline-none">
            <img
              src={personImg}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover hover:opacity-70"
            />
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Settings
              </a>
              <button
                onClick={() => {
                  navigate("/");
                }}
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
