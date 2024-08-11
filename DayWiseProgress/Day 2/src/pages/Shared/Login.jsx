import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Mail, Lock, User, Menu, X } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const [loginType, setLoginType] = useState('user');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulating an API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        if (email === 'user@gmail.com' && password === '12345') {
            navigate(loginType === 'admin' ? '/dashboard' : '/BookingForm');
        } else {
            setError('Invalid email or password');
        }

        setIsLoading(false);
    };

    const toggleDashboard = () => {
        setIsDashboardOpen(!isDashboardOpen);
    };

    const handleNavigate = () => {
        navigate("/");  // Navigate to home page
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
            {/* Navbar */}
            <header className="bg-white shadow-md py-4">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Hall Management System</h1>
                    <nav className="flex items-center">
                        <ul className="flex space-x-6 h-[8vh] items-center">
                            <li onClick={handleNavigate}>
                                <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105">
                                    <span className="font-semibold">Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105">
                                    <User className="mr-2" size={24} />
                                    <span className="font-semibold">Profile</span>
                                </a>
                            </li>
                        </ul>
                        <button onClick={toggleDashboard} className="ml-6 text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-110">
                            <Menu size={24} />
                        </button>
                    </nav>
                </div>
            </header>

            {/* Dashboard Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isDashboardOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
                <div className="p-4">
                    <button onClick={toggleDashboard} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out">
                        <X size={24} />
                    </button>
                    <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer transition duration-300 ease-in-out">
                            <User /> <span className="font-medium">Profile</span>
                        </li>
                        {/* Add more dashboard items as needed */}
                    </ul>
                </div>
            </div>

            {/* Login Form */}
            <div className="flex items-center justify-center pt-20">
                <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                    <CardHeader className="bg-[#000235] text-white p-6">
                        <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
                        <CardDescription className="text-blue-100 text-center">
                            Enter your credentials to access your account
                        </CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardContent className="p-6 space-y-4">
                            {error && (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                    <strong className="font-bold">Error!</strong>
                                    <span className="block sm:inline"> {error}</span>
                                </div>
                            )}
                            <div>
    <Label className="text-gray-700 font-medium ">Login Type</Label>
    <div className="flex space-x-4 mt-2">
        <Button
            type="button"
            onClick={() => setLoginType('user')}
            className={`px-4 py-2 rounded w-[10] ${loginType === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
            User
        </Button>
        <Button
            type="button"
            onClick={() => setLoginType('admin')}
            className={`px-4 py-2 rounded  ${loginType === 'admin' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
            Admin
        </Button>
    </div>
</div>
                            <div>
                                <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                    <Input 
                                        id="email" 
                                        type="email" 
                                        placeholder="user@iamneo.ai" 
                                        className="pl-10 w-full"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                    <Input 
                                        id="password" 
                                        type={showPassword ? "text" : "password"} 
                                        placeholder="••••••" 
                                        className="pl-10 w-full"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="bg-gray-50 px-6 py-4">
                            <Button 
                                className="w-full bg-[#000235] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Logging in...' : `Login as ${loginType.charAt(0).toUpperCase() + loginType.slice(1)}`}
                            </Button>
                        </CardFooter>
                    </form>
                    <div className="text-center p-4 bg-gray-50">
                        <a href="/forgot-password" className="text-blue-600 hover:underline">Forgot password?</a>
                        <p className="mt-2">
                            Don't have an account? 
                            <a href="/register" className="text-blue-600 hover:underline ml-1">Sign up</a>
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Login;