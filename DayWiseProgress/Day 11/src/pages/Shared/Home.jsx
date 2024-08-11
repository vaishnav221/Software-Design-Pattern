import React, { useState } from 'react';
import Card from './Card';
import SearchBox from './Search';
import tajHotelsImage from "../images/tajhotels.jpeg";
import conferencehall from "../images/conferencehall.jpeg";
import ballroom from "../images/ballroom.jpg";
import executive from "../images/executive.jpeg";
import audi from "../images/audi.jpeg";
import outdoor from "../images/outdoor.jpeg";
import { FaBars, FaTimes, FaCalendarAlt, FaChartBar, FaCog, FaUserPlus, FaSignInAlt, FaMapMarkerAlt, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

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
    console.log("Logout clicked");
  }

  const cards = [
    { id: 1, title: "Luxury Suite", content: "Experience unparalleled comfort in our luxury suite.", imageSrc: tajHotelsImage},
    { id: 2, title: "Conference Hall", content: "Perfect for business meetings and events.", imageSrc: conferencehall },
    { id: 3, title: "Banquet Hall", content: "Ideal for weddings and grand celebrations.", imageSrc: ballroom },
    { id: 4, title: "Executive Room", content: "Designed for the discerning business traveler.", imageSrc: executive },
    { id: 5, title: "Auditorium", content: "Suits for the enormous people to enjoy the Carnival.", imageSrc: audi },
    { id: 6, title: "Outdoor", content: "The Reception and Happy faces emerges with the nature.", imageSrc: outdoor },
  ];

  const filteredCards = cards.filter(card => 
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-white relative">
      {/* Static background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${tajHotelsImage})` }}
      ></div>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-white bg-opacity-70"></div>

      {/* Dashboard Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isDashboardOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        {/* ... (Dashboard content remains the same) ... */}
      </div>

      <main className="container mx-auto px-6 py-8 relative z-10">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Welcome to BashBarn Halls and Ventures</h2>
          <p className="text-gray-600 text-lg">Find and book the perfect space for your next event</p>
        </div>
        <div className="max-w-md mx-auto mb-8">
          <SearchBox searchTerm={searchTerm} onChange={handleSearchChange} />
        </div>
        <p className="mb-6 text-lg text-center text-gray-700">Find your desired hall below:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" onClick={handleLogin}>
          {filteredCards.map((card) => (
            <div key={card.id}>
              <Card title={card.title} content={card.content} imageSrc={card.imageSrc} />
            </div>
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