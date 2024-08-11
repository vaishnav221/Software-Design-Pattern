import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  User, Menu, X, Home, Calendar, Settings, LogOut, 
  CreditCard, IndianRupee, HelpCircle, Bookmark
} from 'lucide-react';


const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlehome =()=>
  {
    navigate('/');
  }
  const handleBookings =()=>
  {
    navigate('/BookingForm');
  }

  const handleLogout = () => {
    // Implement logout logic here
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Navbar */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">BashBarn</h1>
          <nav className="flex items-center">
            <ul className="flex space-x-6 h-[8vh] items-center">
              <li>
                <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105">
                  <User className="mr-2" size={24} />
                  <span className="font-semibold">Admin</span>
                </a>
              </li>
            </ul>
            <button onClick={toggleSidebar} className="ml-6 text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-110">
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-6">
          <button onClick={toggleSidebar} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out">
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer transition duration-300 ease-in-out " onClick={handlehome}>
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

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome, Admin</h2>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
              <Bookmark className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Next event in 5 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
              <IndianRupee className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹92,500</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Bookings */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Sample booking items */}
              {[
                { hall: "Conference Hall 1", date: "15 Aug, 2024", price: "₹25,900" },
                { hall: "Banquet Hall", date: "22 Aug, 2024", price: "₹37,500" },
                { hall: "Meeting Room", date: "30 Aug, 2024", price: "₹12,800" }
              ].map((booking, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <h4 className="font-semibold">{booking.hall}</h4>
                    <p className="text-sm text-gray-600">Booked for {booking.date}</p>
                  </div>
                  <span className="text-blue-600 font-medium">{booking.price}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button className="w-full" onClick={handleBookings}>New Booking</Button>
              <Button className="w-full" variant="outline">View All Bookings</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default UserDashboard;