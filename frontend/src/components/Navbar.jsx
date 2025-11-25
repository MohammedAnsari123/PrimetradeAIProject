import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { LogOut, User } from 'lucide-react';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold text-indigo-600">TaskApp</span>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        {user ? (
                            <>
                                <span className="text-gray-700 mr-4 flex items-center">
                                    <User className="h-5 w-5 mr-1" />
                                    {user.name}
                                </span>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center text-gray-500 hover:text-red-500 transition-colors"
                                >
                                    <LogOut className="h-5 w-5 mr-1" />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <div className="space-x-4">
                                <Link to="/login" className="text-gray-500 hover:text-indigo-600">Login</Link>
                                <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">Register</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
