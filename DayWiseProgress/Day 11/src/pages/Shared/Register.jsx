// import React from 'react';
// import { FaUser, FaIdCard, FaEnvelope, FaLock } from 'react-icons/fa';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

// const Register = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center">
//       <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
//         <CardHeader className="bg-[#000235] text-white p-6">
//           <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
//           <CardDescription className="text-blue-100">
//             Enter your details below to create your account
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="p-6">
//           <form>
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
//                 <div className="mt-1 relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaUser className="text-gray-400" />
//                   </div>
//                   <Input id="name" name="name" type="text" placeholder="John Doe" className="pl-10 w-full" />
//                 </div>
//               </div>

//               <div>
//                 <Label htmlFor="rollnumber" className="text-gray-700 font-medium">Roll Number</Label>
//                 <div className="mt-1 relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaIdCard className="text-gray-400" />
//                   </div>
//                   <Input id="rollnumber" name="rollnumber" type="text" placeholder="123456" className="pl-10 w-full" />
//                 </div>
//               </div>

//               <div>
//                 <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
//                 <div className="mt-1 relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaEnvelope className="text-gray-400" />
//                   </div>
//                   <Input id="email" name="email" type="email" placeholder="you@example.com" className="pl-10 w-full" />
//                 </div>
//               </div>

//               <div>
//                 <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
//                 <div className="mt-1 relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaLock className="text-gray-400" />
//                   </div>
//                   <Input id="password" name="password" type="password" placeholder="••••••••" className="pl-10 w-full" />
//                 </div>
//               </div>
//             </div>
//           </form>
//         </CardContent>
//         <CardFooter className="bg-gray-50 px-6 py-4">
//           <Button className="w-full bg-[#000235] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
//             Create account
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import { FaUser, FaIdCard, FaEnvelope, FaLock, FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDashboard = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  const handleNavigate = () => {
    navigate("/");  // Navigate to home page
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Dashboard Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isDashboardOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-4">
          <button onClick={toggleDashboard} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out">
            <FaTimes size={24} />
          </button>
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer transition duration-300 ease-in-out">
              <FaUserCircle /> <span className="font-medium">Profile</span>
            </li>
            {/* Add more dashboard items as needed */}
          </ul>
        </div>
      </div>

      {/* Registration Form */}
      <div className="flex items-center justify-center pt-20">
        <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
          <CardHeader className="bg-[#000235] text-white p-6">
            <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
            <CardDescription className="text-blue-100">
              Enter your details below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <Input id="name" name="name" type="text" placeholder="John Doe" className="pl-10 w-full" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="rollnumber" className="text-gray-700 font-medium">Roll Number</Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaIdCard className="text-gray-400" />
                    </div>
                    <Input id="rollnumber" name="rollnumber" type="text" placeholder="123456" className="pl-10 w-full" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" className="pl-10 w-full" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <Input id="password" name="password" type="password" placeholder="••••••••" className="pl-10 w-full" />
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="bg-gray-50 px-6 py-4">
            <Button className="w-full bg-[#000235] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
              Create account
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;