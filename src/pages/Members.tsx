import { Link } from 'react-router-dom';
import { Lock, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useSEO } from '../hooks/useSEO';

export default function Members() {
  useSEO({
    title: 'Current Members',
    description: 'The NIA Guntur member directory is exclusively available to active members. Apply for membership to gain access.',
    keywords: 'NIA Guntur Members, Network In Action Guntur Community',
  });

  return (
    <div className="min-h-screen bg-nia-ivory flex flex-col">
      <section className="flex-1 flex items-center justify-center px-6 py-40">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-nia-gold/10 border border-nia-gold/20 flex items-center justify-center mx-auto mb-10">
            <Lock size={24} className="text-nia-gold" />
          </div>

          <p className="text-xs font-light tracking-[0.5em] uppercase text-nia-gold mb-6">Members Area</p>

          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-nia-black mb-6 leading-tight">
            This room is
            <br />
            <span className="text-nia-gold">coming soon.</span>
          </h1>

          <p className="text-base font-light text-nia-gray max-w-md mx-auto leading-relaxed-custom mb-4">
            The NIA Guntur member directory and exclusive portal is currently being built. Active members will receive direct access once it launches.
          </p>

          <p className="text-sm font-light text-nia-muted max-w-sm mx-auto leading-relaxed-custom mb-12">
            Not yet a member? Applications are open — but seats are limited.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/apply"
              className="h-[52px] px-10 font-semibold text-sm tracking-widest uppercase bg-nia-orange text-white hover:bg-nia-orange/90 hover:shadow-[0_0_40px_rgba(232,119,34,0.3)] transition-all duration-300 inline-flex items-center gap-2"
            >
              Apply for Membership <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="h-[52px] px-10 font-semibold text-sm tracking-widest uppercase border border-nia-border text-nia-black hover:border-nia-gold hover:text-nia-gold transition-all duration-300 inline-flex items-center"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-20 w-16 h-px bg-nia-border mx-auto" />
          <p className="text-xs font-light text-nia-muted mt-6 tracking-wide">
            For member access inquiries, call +91 91213 15444
          </p>
        </AnimatedSection>
      </section>
    </div>
  );
}
