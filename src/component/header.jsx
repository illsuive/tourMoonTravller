import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Map, Plane, Heart, Sprout, Users } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Fix: Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Packages', icon: <Map size={18} />, path: '/packages' },
    { name: 'Honeymoon', icon: <Heart size={18} />, path: '/honeymoon' },
    { name: 'Group-Tours', icon: <Users size={18} />, path: '/group-tours' },
    { name: 'International', icon: <Plane size={18} />, path: '/international' },
    { name: 'Spiritual', icon: <Sprout size={18} />, path: '/spiritual' }
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-2xl py-3 border-b border-slate-100' 
        : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to='/' className="flex items-center gap-3 group relative z-[110]">
          <div className="bg-blue-600 p-2.5 rounded-2xl group-hover:rotate-[15deg] transition-all duration-300 shadow-xl shadow-blue-500/40 group-hover:scale-110">
            <Plane className="text-white w-5 h-5" />
          </div>
          <span className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${
            isScrolled ? 'text-slate-900' : 'text-white'
          }`}>
            MOON<span className="text-blue-600">TRAVELLER</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2 p-1.5 rounded-3xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                flex items-center gap-2 text-[12px] font-black uppercase tracking-widest transition-all duration-300
                px-5 py-2.5 rounded-2xl border
                
                /* FIXED COLOR LOGIC FOR VISIBILITY */
                ${isActive 
                  ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/30' 
                  : (isScrolled 
                      ? 'text-slate-600 border-transparent hover:bg-slate-100 hover:text-blue-600' 
                      : 'text-white border-transparent bg-white/5 backdrop-blur-md hover:bg-white/20 hover:border-white/30')
                }

                /* PREVENTING FONT SHIFT ON HOVER */
                hover:scale-105 active:scale-95 transform
              `}
            >
              <span className="opacity-80">{link.icon}</span>
              {link.name}
            </NavLink>
          ))}
          
          <div className={`h-8 w-[1px] mx-4 ${isScrolled ? 'bg-slate-200' : 'bg-white/20'}`} />
          
          <a 
            href="tel:9560791644"
            className="flex items-center gap-3 bg-slate-900 hover:bg-blue-600 text-white px-7 py-3 rounded-2xl font-black text-xs uppercase tracking-[0.15em] shadow-xl transition-all hover:-translate-y-1 active:scale-95"
          >
            <Phone size={14} className="animate-pulse" />
            Connect
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className={`lg:hidden p-3 rounded-2xl transition-all z-[110] ${
            isOpen 
              ? 'bg-red-500 text-white shadow-lg' 
              : (isScrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/20 backdrop-blur-lg text-white border border-white/30')
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Fullscreen Overlay */}
      <div className={`fixed inset-0 bg-white z-[100] transition-all duration-500 ease-expo ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-full'
      } lg:hidden flex flex-col p-8 pt-32`}>
        
        <div className="space-y-4">
            <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em] mb-6">Main Menu</p>
            {navLinks.map((link, i) => (
            <NavLink
                key={link.name}
                to={link.path}
                style={{ transitionDelay: `${i * 50}ms` }}
                className={({ isActive }) => `
                flex items-center justify-between p-6 rounded-[2rem] text-2xl font-black transition-all
                ${isActive 
                    ? 'bg-blue-600 text-white shadow-2xl shadow-blue-200' 
                    : 'bg-slate-50 text-slate-800 border border-slate-100'}
                `}
            >
                <div className="flex items-center gap-4">
                    {link.icon}
                    {link.name}
                </div>
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center">
                    <Plane size={14} />
                </div>
            </NavLink>
            ))}
        </div>
        
        <div className="mt-auto space-y-4">
            <a 
            href="tel:9560791644"
            className="w-full bg-slate-900 text-white py-6 rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 shadow-xl active:scale-95 transition-transform"
            >
            <Phone size={24} /> Call Aman Thakur
            </a>
            <p className="text-center text-slate-400 font-bold text-xs uppercase tracking-widest">
                Available 24/7 for support
            </p>
        </div>
      </div>
    </nav>
  );
};

export default Header;