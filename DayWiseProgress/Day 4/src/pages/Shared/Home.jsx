import React, { useState } from 'react';
import Card from './Card';
import SearchBox from './Search';
import tajHotelsImage from "../images/tajhotels.jpeg";
import Logo from "../images/logo.jpeg";
import conferencehall from "../images/conferencehall.jpeg";
import ballroom from "../images/ballroom.jpg";
import executive from "../images/executive.jpeg";
import audi from "../images/audi.jpeg";
import outdoor from "../images/outdoor.jpeg";
import title1 from "../images/title1.png"
import { FaBars, FaTimes, FaCalendarAlt, FaChartBar, FaCog, FaUserPlus, FaSignInAlt, FaMapMarkerAlt, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleDashboard = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const indianCities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", 
    "Kolkata", "Pune", "Jaipur", "Ahmedabad", "Lucknow"
  ];

  const handleLogin = () => {
    navigate("/login");
  }

  const handleRegister = () => {
    navigate("/Register");
  }

  const handleBookings = () => {
    navigate("/Bookings");
  }

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logout clicked");
  }

  const cards = [
    { id: 1, title: "Luxury Suite", content: "Experience unparalleled comfort in our luxury suite.", imageSrc: tajHotelsImage},
    { id: 2, title: "Conference Hall", content: "Perfect for business meetings and events.", imageSrc: conferencehall },
    { id: 3, title: "Banquet Hall", content: "Ideal for weddings and grand celebrations.", imageSrc: ballroom },
    { id: 4, title: "Executive Room", content: "Designed for the discerning business traveler.", imageSrc: executive },
    { id: 5, title: "Auditorium", content: "Suits for the enormous people to enjoy the Carnival.", imageSrc: audi },
    { id: 5, title: "Outdoor", content: "The Reception and Happy faces emerges with the nature.", imageSrc: outdoor },
  ];

  const filteredCards = cards.filter(card => 
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white relative">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <button onClick={toggleDashboard} className="mr-4 text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-110">
              <FaBars size={24} />
            </button>
            <h1 className="text-2xl font-bold text-gray-800">BashBarn</h1>
          </div>
          <nav className="flex items-center">
            <ul className="flex space-x-6 h-[8vh]">
            <li className="relative mr-[1vh] mt-[2vh]">
                <button 
                  onClick={toggleDropdown}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  <span className="font-semibold">Browse Venue</span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <ul className="py-1">
                      {indianCities.map((city, index) => (
                        <li key={index}>
                          <a 
                            href="#" 
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
                          >
                            {city}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
              <li className="mr-[5vh] mt-[2vh]" onClick={handleLogin}>
                <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105">
                  <FaSignInAlt className="mr-2" />
                  <span className="font-semibold">Login</span>
                </a>
              </li>
              <li  className="mr-[5vh] mt-[2vh]"  onClick={handleRegister}>
                <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105">
                  <FaUserPlus className="mr-2" />
                  <span className="font-semibold">Register</span>
                </a>
              </li>
             </ul>
          </nav>
        </div>
      </header>

      {/* Dashboard Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isDashboardOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-4 flex flex-col h-full">
          <button onClick={toggleDashboard} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out">
            <FaTimes size={24} />
          </button>
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <ul className="space-y-4 flex-grow">
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer transition duration-300 ease-in-out" onClick={handleBookings}>
              <FaCalendarAlt /> <span className="font-medium">Bookings</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer transition duration-300 ease-in-out" onClick={handleLogin}>
              <FaChartBar /> <span className="font-medium">Analytics</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer transition duration-300 ease-in-out">
              <FaCog /> <span className="font-medium">Settings</span>
            </li>
          </ul>
          <div className="mt-auto">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300 ease-in-out"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-8">
      <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome to BashBarn Halls and Ventures</h2>
          <p className="text-gray-600">Find and book the perfect space for your next event</p>
        </div>
        <div className="max-w-md mx-auto mb-8 ml-[75vh] br-[20vh]">
          <SearchBox searchTerm={searchTerm} onChange={handleSearchChange} />
        </div>
        <p className="mb-6 text-lg text-center text-gray-700">Find your desired hall below:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" onClick={handleLogin}>
          {filteredCards.map(card => (
            <Card key={card.id} title={card.title} content={card.content} imageSrc={card.imageSrc}  />
          ))}
        </div>

        {filteredCards.length === 0 && (
          <p className="text-center text-gray-600 mt-8">No results found. Please try a different search term.</p>
        )}
      </main>
    </div>
  );
};

export default Home;