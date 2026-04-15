import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nia-black border-t border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <img
              src="/logo_nia_guntu.png"
              alt="NIA Guntur"
              className="h-10 mb-6 brightness-0 invert"
            />
            <p className="text-sm font-light text-[#777777] leading-relaxed-custom max-w-sm mb-6">
              Network In Action Guntur is an invite-only business community for serious entrepreneurs who believe the right room changes everything.
            </p>
            <p className="text-xs tracking-[0.3em] uppercase text-nia-gold font-light mb-8">
              "The Right Room Changes Everything"
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/niaaguntur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#252525] rounded-lg flex items-center justify-center text-[#555555] hover:text-nia-gold hover:border-nia-gold/40 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://www.linkedin.com/company/niaaguntur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#252525] rounded-lg flex items-center justify-center text-[#555555] hover:text-nia-gold hover:border-nia-gold/40 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-[#555555] mb-6 font-light">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About NIA', path: '/about-nia' },
                { name: 'NIA Guntur Vision', path: '/vision' },
                { name: 'City Partners', path: '/city-partners' },
                { name: 'Sandeep N', path: '/city-partners/sandeep-n' },
                { name: 'Vinod Reddy T', path: '/city-partners/vinod-t' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Apply for Membership', path: '/apply' },
                { name: 'Current Members', path: '/members' },
                { name: 'Privacy Policy', path: '/privacy-policy' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm font-light text-[#777777] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-[#555555] mb-6 font-light">
              Contact
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-nia-gold mt-0.5 shrink-0" />
                <address className="not-italic text-sm font-light text-[#777777] leading-relaxed">
                  4th Floor, Icon Spaces,<br />
                  6th Ln, Brodipet,<br />
                  Guntur, AP — 522002
                </address>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-nia-gold shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <a
                    href="tel:+919121315444"
                    className="block text-sm font-light text-[#777777] hover:text-white transition-colors"
                  >
                    +91 91213 15444 (NIA)
                  </a>
                  <a
                    href="tel:+919703356332"
                    className="block text-sm font-light text-[#777777] hover:text-white transition-colors"
                  >
                    +91 97033 56332 (Sandeep)
                  </a>
                  <a
                    href="tel:+919885050850"
                    className="block text-sm font-light text-[#777777] hover:text-white transition-colors"
                  >
                    +91 98850 50850 (Vinod)
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-nia-gold shrink-0" />
                <a
                  href="mailto:guntur@networkinaction.com"
                  className="text-sm font-light text-[#777777] hover:text-white transition-colors"
                >
                  guntur@networkinaction.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-light text-[#444444]">
            &copy; {currentYear} Network In Action — Guntur. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-xs font-light text-[#444444] hover:text-[#777777] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-[#2a2a2a] text-xs">|</span>
            <p className="text-xs font-light text-[#444444]">
              Powered by NIA Global
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
