import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Dashboard = ({ children }) => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  const userNavLinks = [
    { title: 'User Dashboard', path: '/dashboard' },
    { title: 'Profile', path: '/profile' },
    { title: 'Settings', path: '/settings' },
  ];

  const adminNavLinks = [
    { title: 'Admin Dashboard', path: '/admin/dashboard' },
    { title: 'User Management', path: '/admin/users' },
    { title: 'Settings', path: '/admin/settings' },
  ];

  const navLinks = isAdmin ? adminNavLinks : userNavLinks;

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
  };

  return (
    <div className="flex h-screen">
      <aside className="w-1/4 h-full bg-gray-200 p-4 shadow-md">
        <div className="font-bold text-xl mb-4" style={{ color: '#A77205' }}>BashBarn</div>
        <nav>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index} className="mb-2">
                <NavLink
                  to={link.path}
                  className="text-lg"
                  style={{ color: '#A77205' }}
                  activeClassName="font-bold"
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={handleLogout}
          className="mt-auto bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </aside>
      <main className="w-3/4 h-full p-8">
        {children}
      </main>
    </div>
  );
};

export default Dashboard;
