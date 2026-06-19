import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Accessibility } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import AccessibilityMenu from './AccessibilityModule';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_LINKS = [
  { name: 'About', path: '/about' },
  { name: 'Amenities', path: '/amenities' },
  { name: 'Lifestyle', path: '/lifestyle' },
  { name: 'Contact', path: '/contact' },
];

const PORTAL_LINKS = [
  { name: 'Building 3500', url: 'https://ngm.cincwebaxis.com/mvc2' },
  { name: 'Building 3700', url: 'https://ngm.cincwebaxis.com/mvc2' },
  { name: 'Building 3900', url: 'https://ngm.cincwebaxis.com/mvc1' },
];

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portalDropdownOpen, setPortalDropdownOpen] = useState(false);
  const [livingDropdownOpen, setLivingDropdownOpen] = useState(false);
  const [a11yModuleOpen, setA11yModuleOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setPortalDropdownOpen(false);
    setLivingDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navBackground = (isScrolled || !isHome || mobileMenuOpen) ? 'bg-white/95 backdrop-blur-md shadow-sm text-navy' : 'bg-transparent text-white';
  const logoColor = (isScrolled || !isHome || mobileMenuOpen) ? 'text-navy' : 'text-white';

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        {/* Sticky Top Notification Banner */}
        <div className="w-full bg-navy text-white text-[10px] md:text-xs tracking-widest uppercase font-semibold py-2.5 px-4 text-center border-b border-white/10 flex items-center justify-center gap-2 z-50 shrink-0 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-palm animate-pulse shrink-0" />
          <span>Welcome to our new website. Additional functionalities coming soon.</span>
        </div>

        {/* Navigation Bar wrapper to apply dynamic background */}
        <div className={cn('w-full transition-all duration-300', navBackground)}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 h-24 flex items-center justify-between">
          <Link to="/" onClick={handleLogoClick} className="flex items-center z-50 relative">
            <img 
              src="/logo.png" 
              alt="Mediterranean Village" 
              className={cn(
                "h-10 md:h-12 w-auto transition-all duration-300", 
                (isScrolled || !isHome || mobileMenuOpen) ? "brightness-0 opacity-90" : ""
              )} 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8">
            <Link
              to="/about"
              className={cn(
                'text-xs uppercase tracking-widest font-semibold transition-colors hover:opacity-70',
                location.pathname === '/about' ? 'opacity-100 border-b border-current pb-1' : 'opacity-80'
              )}
            >
              About
            </Link>

            {/* Living Dropdown */}
            <div className="relative" onMouseLeave={() => setLivingDropdownOpen(false)}>
              <button
                onMouseEnter={() => setLivingDropdownOpen(true)}
                onClick={() => setLivingDropdownOpen(!livingDropdownOpen)}
                className="flex items-center gap-1 text-xs uppercase tracking-widest font-semibold transition-colors opacity-80 hover:opacity-100"
              >
                Living
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {livingDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full pt-6 w-48"
                  >
                    <div className="bg-white shadow-xl border border-sand-dark py-2">
                      <Link
                        to="/amenities"
                        className="block px-6 py-3 text-xs uppercase tracking-widest text-navy hover:bg-sand transition-colors"
                      >
                        Amenities
                      </Link>
                      <Link
                        to="/lifestyle"
                        className="block px-6 py-3 text-xs uppercase tracking-widest text-navy hover:bg-sand transition-colors"
                      >
                        Lifestyle
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className={cn(
                'text-xs uppercase tracking-widest font-semibold transition-colors hover:opacity-70',
                location.pathname === '/contact' ? 'opacity-100 border-b border-current pb-1' : 'opacity-80'
              )}
            >
              Contact
            </Link>

            {/* Homeowner Portal Dropdown */}
            <div className="relative" onMouseLeave={() => setPortalDropdownOpen(false)}>
              <button
                onMouseEnter={() => setPortalDropdownOpen(true)}
                onClick={() => setPortalDropdownOpen(!portalDropdownOpen)}
                className={cn(
                  'flex items-center gap-1 text-xs uppercase tracking-widest font-semibold px-5 py-2.5 border transition-all duration-300',
                  isScrolled || !isHome 
                    ? 'border-navy bg-navy text-white hover:bg-navy-light' 
                    : 'border-white bg-white text-navy hover:bg-sand'
                )}
              >
                Homeowner Portal
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {portalDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full pt-2 w-56"
                  >
                    <div className="bg-white shadow-xl border border-sand-dark py-2">
                      {PORTAL_LINKS.map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-6 py-3 text-xs uppercase tracking-widest text-navy hover:bg-sand transition-colors"
                        >
                          {link.name}
                        </a>
                      ))}
                      <div className="h-px bg-sand-dark my-2 mx-4" />
                      <Link
                        to="/welcome-guide"
                        className="block px-6 py-3 text-xs uppercase tracking-widest text-navy hover:bg-sand transition-colors"
                      >
                        Welcome Guide
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden z-50 relative p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={cn('w-6 h-6', mobileMenuOpen ? 'text-navy' : logoColor)} />
            ) : (
              <Menu className={cn('w-6 h-6', logoColor)} />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed inset-0 bg-white z-40 flex flex-col pt-32 pb-24 px-6 overflow-y-auto xl:hidden"
            >
              <div className="flex flex-col gap-6 items-center">
                <Link to="/about" className="text-lg font-serif uppercase tracking-widest text-navy" onClick={() => setMobileMenuOpen(false)}>About</Link>
                <Link to="/amenities" className="text-lg font-serif uppercase tracking-widest text-navy" onClick={() => setMobileMenuOpen(false)}>Amenities</Link>
                <Link to="/lifestyle" className="text-lg font-serif uppercase tracking-widest text-navy" onClick={() => setMobileMenuOpen(false)}>Lifestyle</Link>
                <Link to="/contact" className="text-lg font-serif uppercase tracking-widest text-navy" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                
                <div className="w-full h-px bg-sand-dark my-4" />
                
                <span className="text-sm uppercase tracking-widest text-navy/60 mb-2">Homeowner Portals</span>
                {PORTAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-serif uppercase tracking-widest text-navy"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Link 
                  to="/welcome-guide" 
                  className="text-lg font-serif uppercase tracking-widest text-navy mt-2 mb-12"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Welcome Guide
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-navy text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center mb-6">
                <img 
                  src="/logo.png" 
                  alt="Mediterranean Village" 
                  className="h-12 md:h-16 w-auto" 
                />
              </Link>
              <p className="text-sm text-white/70 font-light leading-relaxed max-w-xs">
                A private residential community on Williams Island, offering elegant waterfront living and resort-style amenities in Aventura, South Florida.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-lg tracking-wider uppercase mb-6">Explore</h4>
              <ul className="space-y-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm font-light text-white/70 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg tracking-wider uppercase mb-6">Resources</h4>
              <ul className="space-y-4">
                <li>
                  <Link to="/welcome-guide" className="text-sm font-light text-white/70 hover:text-white transition-colors">
                    Welcome Guide
                  </Link>
                </li>
                {PORTAL_LINKS.map((link) => (
                  <li key={link.name}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm font-light text-white/70 hover:text-white transition-colors flex items-center gap-1">
                      {link.name} Portal
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg tracking-wider uppercase mb-6">Contact</h4>
              <ul className="space-y-4 text-sm font-light text-white/70">
                <li>1000 Williams Island Blvd</li>
                <li>Aventura, FL 33160</li>
                <li className="pt-2">
                  <a href="tel:+13059377898" className="hover:text-white transition-colors">305-937-7898</a>
                </li>
                <li>
                  <a href="mailto:manager@medvillageassociation.com" className="hover:text-white transition-colors">manager@medvillageassociation.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-light text-white/50">
              &copy; {new Date().getFullYear()} Mediterranean Village Association. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs font-light text-white/50">
              <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Accessibility Floating Button */}
      <button
        onClick={() => setA11yModuleOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#E0F2FE] rounded-full shadow-lg flex items-center justify-center hover:bg-[#BAE6FD] transition-colors border border-[#BAE6FD]"
        aria-label="Accessibility Options"
      >
        <Accessibility className="w-6 h-6 text-navy" />
      </button>

      <AccessibilityMenu 
        isOpen={a11yModuleOpen} 
        onClose={() => setA11yModuleOpen(false)} 
      />
    </div>
  );
}
