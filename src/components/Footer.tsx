import Link from 'next/link';
import { ArrowUpRight, Instagram, Youtube, Facebook } from 'lucide-react';
const logo = '/nia-logo-guntur-trim.png';

const columns = [
  {
    title: 'The Network',
    links: [
      { name: 'About NIA', path: '/about-nia' },
      { name: 'NIA Guntur Vision', path: '/vision' },
      { name: 'City Partners', path: '/city-partners' },
      { name: 'Sandeep N', path: '/city-partners/sandeep-n' },
      { name: 'Vinod Reddy T', path: '/city-partners/vinod-t' },
    ],
  },
  {
    title: 'Community',
    links: [
      { name: 'Current Members', path: '/members' },
      { name: 'Think Space', path: '/think-space' },
      { name: 'Apply for Membership', path: '/apply' },
      { name: 'Contact Us', path: '/contact' },
    ],
  },
];

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/networkinactionguntur/', Icon: Instagram },
  { label: 'YouTube', href: 'https://www.youtube.com/@networkinactionguntur', Icon: Youtube },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61577547012330', Icon: Facebook },
];

const heading = 'mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/45';
const link = 'text-sm font-light text-white/75 hover:text-nia-peach transition-colors';

export default function Footer() {
  return (
    <footer className="bg-[#0B1430] text-white">
      <div className="nia-shell pt-20 pb-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
          <div>
            <img src={logo} alt="NIA Guntur" className="mb-6 h-10 w-auto brightness-0 invert" />
            <p className="max-w-xs text-sm font-light leading-relaxed text-white/60">
              An invite-only business community for serious entrepreneurs who believe the right room changes everything.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className={heading}>{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.path}>
                    <Link href={l.path} className={link}>
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className={heading}>Visit</h4>
            <address className="not-italic text-sm font-light leading-relaxed text-white/75">
              4th Floor, Icon Spaces,
              <br />
              6th Ln, Brodipet,
              <br />
              Guntur, AP — 522002
            </address>
            <div className="mt-5 space-y-1.5">
              <a href="tel:+919121315444" className={`block ${link}`}>+91 91213 15444 (NIA)</a>
              <a href="tel:+919703356332" className={`block ${link}`}>+91 97033 56332 (Sandeep)</a>
              <a href="tel:+919885050850" className={`block ${link}`}>+91 98850 50850 (Vinod)</a>
              <a href="mailto:guntur@networkinaction.com" className={`block ${link}`}>guntur@networkinaction.com</a>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-2xl bg-white/[0.06] p-6 sm:col-span-2 md:flex-row md:items-center md:justify-between md:p-8 lg:col-span-4">
            <div>
            <h4 className={heading}>Membership</h4>
            <p className="font-serif text-3xl uppercase leading-tight">Ready for the right room?</p>
            <p className="mt-2 text-xs font-light text-white/45">Every application is reviewed personally.</p>
            </div>
            <Link href="/apply" className="flex shrink-0 items-center justify-between gap-6 rounded-full bg-white py-1.5 pl-5 pr-1.5 text-sm text-nia-black transition hover:bg-nia-peach">
              Apply for membership
              <span className="grid h-9 w-9 place-items-center rounded-full bg-nia-orange text-white">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="font-serif text-lg">Network In Action — Guntur</p>
          <div className="flex items-center gap-6 text-xs font-light text-white/50">
            <span>&copy; {new Date().getFullYear()} All rights reserved</span>
            <Link href="/privacy-policy" className="hover:text-nia-peach transition-colors">Privacy</Link>
            <span>Powered by NIA Global</span>
          </div>
          <div className="flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/80 transition hover:bg-nia-orange hover:text-white"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
