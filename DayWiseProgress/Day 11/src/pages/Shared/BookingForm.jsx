import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUsers, FaComments } from 'react-icons/fa';
import { User, Menu, X, Home, Calendar, CreditCard, Settings, HelpCircle, LogOut } from 'react-feather';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    hallType: '',
    date: '',
    startTime: '',
    endTime: '',
    guests: '',
    specialRequests: ''
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleHome = () => {
    navigate('/');
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logout clicked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white relative"> 

      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-6">
          <button onClick={toggleSidebar} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out">
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer transition duration-300 ease-in-out " onClick={handleHome}>
              <Home size={20} /> <span className="font-medium">Home</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer transition duration-300 ease-in-out">
              <Calendar size={20} /> <span className="font-medium">Bookings</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer transition duration-300 ease-in-out">
              <CreditCard size={20} /> <span className="font-medium">Payments</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer transition duration-300 ease-in-out">
              <Settings size={20} /> <span className="font-medium">Settings</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer transition duration-300 ease-in-out">
              <HelpCircle size={20} /> <span className="font-medium">Help</span>
            </li>
            <li onClick={handleLogout} className="flex items-center space-x-2 text-red-600 hover:text-red-800 cursor-pointer transition duration-300 ease-in-out">
              <LogOut size={20} /> <span className="font-medium">Logout</span>
            </li>
          </ul>
        </div>
      </div>

      <main className="container mx-auto px-6 py-8">
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-8">
          <div className="bg-blue-600 text-white py-4 px-6">
            <h2 className="text-2xl font-bold">Book a Hall</h2>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Form fields remain the same as in the previous version */}
            {/* ... */}
            <div>
              <label htmlFor="hallType" className="block text-gray-700 font-semibold mb-2">Hall Type</label>
              <select
                id="hallType"
                name="hallType"
                value={formData.hallType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a hall type</option>
                <option value="conference">Conference Hall</option>
                <option value="banquet">Banquet Hall</option>
                <option value="auditorium">Auditorium</option>
              </select>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date</label>
                <div className="relative">
                  <FaCalendarAlt className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="flex-1">
                <label htmlFor="guests" className="block text-gray-700 font-semibold mb-2">Number of Guests</label>
                <div className="relative">
                  <FaUsers className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="startTime" className="block text-gray-700 font-semibold mb-2">Start Time</label>
                <div className="relative">
                  <FaClock className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="time"
                    id="startTime"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="flex-1">
                <label htmlFor="endTime" className="block text-gray-700 font-semibold mb-2">End Time</label>
                <div className="relative">
                  <FaClock className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="time"
                    id="endTime"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="specialRequests" className="block text-gray-700 font-semibold mb-2">Special Requests</label>
              <div className="relative">
                <FaComments className="absolute top-3 left-3 text-gray-400" />
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows="4"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Any special requirements or requests?"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default BookingForm;