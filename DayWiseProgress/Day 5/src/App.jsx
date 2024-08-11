import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Shared/Home';
import Login from './pages/Shared/Login';
import Register from './pages/Shared/Register';
import UserDashboard from './pages/User/UserDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
// import BookingCalendar from './pages/Shared/BookingCalender';
import NotFound from './pages/Shared/NotFound';
import HomeLayout from './layout/HomeLayout';
import UserLayout from './layout/UserLayout';
import AdminLayout from './layout/AdminLayout';
import BookingCalendar from './pages/Shared/Bookings';
import BookingForm from './pages/Shared/BookingForm';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Bookings' element={<BookingCalendar />} />
          <Route path='/BookingForm' element={<BookingForm/>} />
          
        </Route>

        <Route element={<UserLayout />}>
          <Route path='/dashboard' element={<UserDashboard />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

