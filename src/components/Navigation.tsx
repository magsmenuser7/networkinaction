import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const cityPartnerLinks = [
  { name: 'Sandeep N', path: '/city-partners/sandeep-n' },
  { name: 'Vinod Reddy T', path: '/city-partners/vinod-t' },
];

const navLinks = [
  { name: 'About NIA', path: '/about-nia' },
  { name: 'NIA Guntur Vision', path: '/vision' },
  { name: 'City Partners', path: '/city-partners', children: cityPartnerLinks },
  { name: 'Contact', path: '/contact' },
  { name: 'Members', path: '/members' },
];

export default function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-nia-ivory/96 backdrop-blur-md border-b border-nia-border shadow-whisper'
            : 'bg-nia-ivory/96 backdrop-blur-md border-b border-nia-border'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-[70px]">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src="/logo_nia_guntu.png" alt="NIA Guntur" className="h-8 w-auto" />
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-nia-black">NIA</span>
              <span className="text-[9px] font-light tracking-[0.35em] uppercase text-nia-muted -mt-0.5">Guntur</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className={`flex items-center gap-1 text-xs font-light tracking-[0.2em] uppercase transition-colors duration-200 ${
                      isActive(link.path) ? 'text-nia-gold' : 'text-nia-black/60 hover:text-nia-black'
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-3 w-52 bg-nia-ivory border border-nia-border rounded-xl shadow-editorial overflow-hidden"
                      >
                        <Link
                          to={link.path}
                          className="block px-5 py-3.5 text-xs tracking-[0.2em] uppercase font-light text-nia-black/60 hover:bg-nia-darker hover:text-nia-gold transition-colors border-b border-nia-border"
                        >
                          All Partners
                        </Link>
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-5 py-3.5 text-xs tracking-[0.2em] uppercase font-light transition-colors hover:bg-nia-darker ${
                              isActive(child.path) ? 'text-nia-gold' : 'text-nia-black/60 hover:text-nia-gold'
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-light tracking-[0.2em] uppercase transition-colors duration-200 ${
                    isActive(link.path) ? 'text-nia-gold' : 'text-nia-black/60 hover:text-nia-black'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/apply"
              className="h-9 px-6 text-xs font-semibold tracking-[0.2em] uppercase bg-nia-orange text-white rounded-lg hover:bg-nia-orange/90 hover:shadow-[0_0_20px_rgba(232,119,34,0.3)] transition-all duration-300 inline-flex items-center"
            >
              Apply
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-nia-black"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-nia-ivory pt-16 flex flex-col overflow-y-auto"
          >
            <div className="flex-1 px-6 py-10 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={`block py-4 text-sm font-light tracking-[0.2em] uppercase border-b border-nia-border transition-colors ${
                      isActive(link.path) ? 'text-nia-gold' : 'text-nia-black'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.children?.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className={`block py-3 pl-5 text-xs font-light tracking-widest uppercase border-b border-nia-border transition-colors ${
                        isActive(child.path) ? 'text-nia-gold' : 'text-nia-muted'
                      }`}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div className="px-6 pb-10">
              <Link
                to="/apply"
                className="w-full h-14 text-sm font-semibold tracking-widest uppercase bg-nia-orange text-white rounded-xl flex items-center justify-center hover:bg-nia-orange/90 transition-colors"
              >
                Apply for Membership
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
