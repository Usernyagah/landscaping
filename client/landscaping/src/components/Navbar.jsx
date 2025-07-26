// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { darkMode, toggleTheme } = useTheme();
  
  return (
    <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-sm shadow-sm py-4`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-emerald-600 w-10 h-10 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">LF</span>
          </div>
          <h1 className="text-2xl font-bold text-emerald-800 dark:text-emerald-300">LandsaFix</h1>
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            <Link to="/explore" className="text-emerald-800 dark:text-emerald-200 font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Explore
            </Link>
            {!user ? (
              <>
                <Link to="/login" className="text-emerald-800 dark:text-emerald-200 font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Login
                </Link>
                <Link to="/register">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Register
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="text-emerald-800 dark:text-emerald-200 font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Dashboard
                </Link>
                {user.role === 'landscaper' && (
                  <Link to="/services/new" className="text-emerald-800 dark:text-emerald-200 font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    Add Service
                  </Link>
                )}
                <Button 
                  onClick={logout} 
                  variant="outline" 
                  className="border-emerald-600 text-emerald-800 dark:border-emerald-400 dark:text-emerald-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/50"
                >
                  Logout
                </Button>
              </>
            )}
          </div>
          
          <Button 
            onClick={toggleTheme} 
            variant="ghost" 
            size="icon"
            className="text-emerald-800 dark:text-emerald-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/50"
          >
            {darkMode ? '☀️' : '🌙'}
          </Button>
        </div>
      </div>
    </nav>
  );
}
