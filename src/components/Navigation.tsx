'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Instagram, Youtube, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
const logo = '/nia-logo-guntur-trim.png';

const cityPartnerLinks = [
  { name: 'Sandeep N', path: '/city-partners/sandeep-n' },
  { name: 'Vinod Reddy T', path: '/city-partners/vinod-t' },
];

const navLinks = [
  { name: 'About', path: '/about-nia' },
  { name: 'Vision', path: '/vision' },
  { name: 'City Partners', path: '/city-partners', children: cityPartnerLinks },
  { name: 'Members', path: '/members' },
  { name: 'Think Space', path: '/think-space' },
  { name: 'Contact', path: '/contact' },
];

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/networkinactionguntur/', Icon: Instagram },
  { label: 'YouTube', href: 'https://www.youtube.com/@networkinactionguntur', Icon: Youtube },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61577547012330', Icon: Facebook },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/network-in-action-guntur/', Icon: Linkedin },
];

const spring = { type: 'spring' as const, stiffness: 420, damping: 34 };

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Solid after 40px; tuck away while scrolling down, return on any scroll up.
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setIsScrolled(y > 40);
    setHidden(y > 240 && y > prev && !dropdownOpen);
  });

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');
  const activePath = navLinks.find((l) => isActive(l.path))?.path ?? null;
  const pillAt = hovered ?? activePath; // the sliding pill follows the cursor, rests on the current page

  const solid = isScrolled || isMobileMenuOpen;
  const ink = solid ? 'text-nia-black' : 'text-white';

  const linkInner = (link: (typeof navLinks)[number]) => (
    <>
      {pillAt === link.path && (
        <motion.span
          layoutId="nav-pill"
          transition={spring}
          className={`absolute inset-0 -z-10 rounded-full ${
            activePath === link.path ? (solid ? 'bg-nia-black' : 'bg-white') : solid ? 'bg-nia-black/[0.07]' : 'bg-white/15'
          }`}
        />
      )}
      <span
        className={`transition-colors duration-200 ${
          activePath === link.path && pillAt === link.path ? (solid ? 'text-white' : 'text-nia-black') : ''
        }`}
      >
        {link.name}
      </span>
      {activePath === link.path && pillAt !== link.path && (
        <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-nia-orange" />
      )}
    </>
  );

  const linkClass = 'relative isolate inline-flex items-center gap-1 rounded-full px-4 py-2 text-[13px] font-medium';

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: hidden && !isMobileMenuOpen ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 lg:px-6 lg:pt-4"
      >
        <nav
          className={`mx-auto flex max-w-[1280px] items-center justify-between rounded-full border pl-5 pr-2 backdrop-blur-xl transition-all duration-500 ${
            solid
              ? 'h-14 border-nia-black/[0.06] bg-white/80 shadow-[0_10px_40px_rgba(20,18,14,0.10)]'
              : 'h-16 border-white/15 bg-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]'
          }`}
        >
          <Link href="/" className="flex shrink-0 items-center" aria-label="NIA Guntur home">
            <img
              src={logo}
              alt="NIA Guntur"
              className={`w-auto transition-all duration-500 ${solid ? 'h-7' : 'h-8 brightness-0 invert'}`}
            />
          </Link>

          <div className={`hidden items-center lg:flex ${ink}`} onMouseLeave={() => setHovered(null)}>
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    onMouseEnter={() => setHovered(link.path)}
                    className={linkClass}
                    aria-expanded={dropdownOpen}
                  >
                    {linkInner(link)}
                    <ChevronDown size={12} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.96 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full mt-4 w-60 origin-top -translate-x-1/2 rounded-3xl border border-nia-black/[0.06] bg-white/95 p-2 text-nia-black shadow-[0_24px_60px_rgba(0,0,0,0.16)] backdrop-blur-xl"
                      >
                        {[{ name: 'All City Partners', path: link.path }, ...link.children].map((child, i) => (
                          <motion.div
                            key={child.name}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.04 * i }}
                          >
                            <Link
                              href={child.path}
                              className={`group flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition-colors hover:bg-nia-ivory ${
                                pathname === child.path ? 'text-nia-orange' : ''
                              }`}
                            >
                              {child.name}
                              <ArrowUpRight size={14} className="-translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={link.name} href={link.path} onMouseEnter={() => setHovered(link.path)} className={linkClass}>
                  {linkInner(link)}
                </Link>
              )
            )}
          </div>

          <div className="hidden items-center gap-1 lg:flex">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`grid h-9 w-9 place-items-center rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:bg-nia-orange hover:text-white ${
                  solid ? 'text-nia-black/60' : 'text-white/75'
                }`}
              >
                <Icon size={15} />
              </a>
            ))}
            <Link
              href="/apply"
              className="group ml-2 flex items-center gap-3 rounded-full bg-nia-orange py-1.5 pl-5 pr-1.5 text-[13px] font-medium text-white transition-all duration-300 hover:shadow-[0_10px_28px_rgba(232,119,34,0.45)] active:scale-[0.97]"
            >
              Apply now
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-nia-orange transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`grid h-10 w-10 place-items-center rounded-full lg:hidden ${solid ? 'bg-nia-black text-white' : 'bg-white text-nia-black'}`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 95% 4%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 95% 4%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 95% 4%)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-nia-ivory pt-24"
          >
            <div className="flex-1 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    href={link.path}
                    className={`flex items-baseline justify-between border-b border-nia-border py-4 font-serif text-3xl uppercase ${
                      isActive(link.path) ? 'text-nia-orange' : 'text-nia-black'
                    }`}
                  >
                    {link.name}
                    <span className="font-sans text-xs text-nia-muted">0{i + 1}</span>
                  </Link>
                  {link.children?.map((child) => (
                    <Link
                      key={child.path}
                      href={child.path}
                      className={`block border-b border-nia-border py-3 pl-5 text-sm ${
                        isActive(child.path) ? 'text-nia-orange' : 'text-nia-black/60'
                      }`}
                    >
                      {child.name}
                    </Link>
                  ))}
                </motion.div>
              ))}
            </div>
            <div className="flex items-center gap-3 px-6 py-8">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full bg-white text-nia-black"
                >
                  <Icon size={16} />
                </a>
              ))}
              <Link href="/apply" className="nia-btn flex-1">
                Apply for Membership <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
