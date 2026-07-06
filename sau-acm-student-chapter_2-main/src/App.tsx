/**
 * Main application component that handles routing and theme management.
 * Implements dark mode functionality and page-specific styling.
 */
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Membership from './pages/Membership';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

/**
 * Wrapper component that handles page-specific styling by setting data attributes
 * based on the current route.
 */
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  // Extract the current page from the URL path
  const page = location.pathname.split('/')[1] || 'home';
  
  // Set the page-specific data attribute for styling
  useEffect(() => {
    document.body.setAttribute('data-page', page);
    return () => {
      document.body.removeAttribute('data-page');
    };
  }, [page]);

  return <>{children}</>;
};

function App() {
  // Dark mode state management with localStorage persistence
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  // Update localStorage and apply dark mode class when theme changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <Router>
      <PageWrapper>
        <div className="min-h-screen flex flex-col">
          {/* AnimatedBackground removed to fix import error */}
          <Navbar>
            {/* Theme toggle button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-[var(--secondary)] transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </Navbar>
          
          {/* Main content area with routes */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>

          <Footer />
          <GoToTop />
        </div>
      </PageWrapper>
    </Router>
  );
}

export default App;