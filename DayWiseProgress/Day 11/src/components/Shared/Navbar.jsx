// import React from 'react';
// import { User, Menu } from 'react-feather'; // Assuming you're using react-feather for icons

// const Navbar = ({ handleNavigate, toggleDashboard }) => {
//   return (
//     <header className="bg-white shadow-md py-4">
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-gray-800">Hall Management System</h1>
//         <nav className="flex items-center">
//           <ul className="flex space-x-6 h-[8vh] items-center">
//             <li onClick={handleNavigate}>
//               <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105">
//                 <span className="font-semibold">Home</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105">
//                 <User className="mr-2" size={24} />
//                 <span className="font-semibold">Profile</span>
//               </a>
//             </li>
//           </ul>
//           <button onClick={toggleDashboard} className="ml-6 text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-110">
//             <Menu size={24} />
//           </button>
//         </nav>
//       </div>
//     </header>
    
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Menu, X, LogIn, UserPlus, Home } from 'react-feather';

const Navbar = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDashboard = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  const handleLogin = () => {
    navigate("/login");
    setIsDashboardOpen(false);
  };

  const handleRegister = () => {
    navigate("/register");
    setIsDashboardOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <button
              onClick={toggleDashboard}
              className="mr-4 text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-2xl font-bold text-gray-800">BashBarn</h1>
          </div>
          <nav className="flex items-center">
            <ul className="flex space-x-6 h-[8vh] items-center">
              <li>
                <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105">
                  <Home className="mr-2" size={24} />
                  <span className="font-semibold">Home</span>
                </Link>
              </li>
              <li onClick={handleLogin} className="cursor-pointer">
                <div className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105">
                  <LogIn className="mr-2" size={24} />
                  <span className="font-semibold">Login</span>
                </div>
              </li>
              <li onClick={handleRegister} className="cursor-pointer">
                <div className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105">
                  <UserPlus className="mr-2" size={24} />
                  <span className="font-semibold">Register</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Dashboard Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isDashboardOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          <button
            onClick={toggleDashboard}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out"
          >
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer transition duration-300 ease-in-out">
              <User /> <span className="font-medium">Profile</span>
            </li>
            <li
              onClick={handleLogin}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer transition duration-300 ease-in-out"
            >
              <LogIn /> <span className="font-medium">Login</span>
            </li>
            <li
              onClick={handleRegister}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer transition duration-300 ease-in-out"
            >
              <UserPlus /> <span className="font-medium">Register</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;