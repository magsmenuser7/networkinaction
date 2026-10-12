import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Linkedin } from 'lucide-react';
import logo from "/nia-logo-guntur-trim.png"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nia-black text-white">
      <div className="nia-shell pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="NIA Guntur"
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-sm font-light text-white/70 leading-relaxed-custom max-w-sm mb-6">
              Network In Action Guntur is an invite-only business community for serious entrepreneurs who believe the right room changes everything.
            </p>
            <p className="nia-eyebrow-light mb-8">
              "The Right Room Changes Everything"
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/niaaguntur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-nia-peach hover:border-nia-peach/60 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://www.linkedin.com/company/niaaguntur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-nia-peach hover:border-nia-peach/60 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="nia-eyebrow-light mb-6">
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
                { name: 'Think Space', path: '/think-space' },
                { name: 'Privacy Policy', path: '/privacy-policy' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm font-light text-white/70 hover:text-nia-peach transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="nia-eyebrow-light mb-6">
              Contact
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-nia-peach mt-0.5 shrink-0" />
                <address className="not-italic text-sm font-light text-white/70 leading-relaxed">
                  4th Floor, Icon Spaces,<br />
                  6th Ln, Brodipet,<br />
                  Guntur, AP — 522002
                </address>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-nia-peach shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <a
                    href="tel:+919121315444"
                    className="block text-sm font-light text-white/70 hover:text-nia-peach transition-colors"
                  >
                    +91 91213 15444 (NIA)
                  </a>
                  <a
                    href="tel:+919703356332"
                    className="block text-sm font-light text-white/70 hover:text-nia-peach transition-colors"
                  >
                    +91 97033 56332 (Sandeep)
                  </a>
                  <a
                    href="tel:+919885050850"
                    className="block text-sm font-light text-white/70 hover:text-nia-peach transition-colors"
                  >
                    +91 98850 50850 (Vinod)
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-nia-peach shrink-0" />
                <a
                  href="mailto:guntur@networkinaction.com"
                  className="text-sm font-light text-white/70 hover:text-nia-peach transition-colors"
                >
                  guntur@networkinaction.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-light text-white/50">
            &copy; {currentYear} Network In Action — Guntur. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-xs font-light text-white/50 hover:text-nia-peach transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20 text-xs">|</span>
            <p className="text-xs font-light text-white/50">
              Powered by NIA Global
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
