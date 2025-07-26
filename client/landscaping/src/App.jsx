import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Explore from './pages/Explore';
import ServiceDetail from './pages/ServiceDetail';
import Dashboard from './pages/Dashboard';
import AddService from './pages/AddService';
import { AuthProvider, useAuth } from './hooks/useAuth';
import { ThemeProvider } from './hooks/useTheme';

function ProtectedRoute({ children, roles }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/" replace />;
  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/dashboard" element={
              <ProtectedRoute roles={['client', 'landscaper']}>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/services/new" element={
              <ProtectedRoute roles={['landscaper']}>
                <AddService />
              </ProtectedRoute>
            } />
          </Routes>
          <Toaster />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}
