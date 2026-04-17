import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useSEO } from '../hooks/useSEO';
import { motion } from 'framer-motion';

const differentiators = [
  { title: 'Legal-Blended Brand Architecture', desc: "India's rare combination of brand strategy and legal foresight — building brands that are not just visible, but defensible." },
  { title: 'Business Process Integration', desc: 'Beyond surface-level branding. Sandeep embeds brand strategy into the operational DNA of every business he touches.' },
  { title: 'Economic Discipline', desc: 'Financial thinking woven into every brand decision — because a brand that cannot sustain itself is just aesthetics.' },
  { title: 'Community at Scale', desc: '1.5 lakh+ Telugu business community built through InTalks, proving that trust, not reach, is the real currency.' },
];

const ventures = [
  {
    name: 'Magsmen',
    desc: 'A brand strategy consultancy that has shaped over 100 brands across startups and enterprise businesses. Where brand meets business architecture.',
    url: 'https://magsmen.com',
  },
  {
    name: 'InTalks',
    desc: 'A high-impact podcast and community platform with 1.5 lakh+ Telugu business community and over 200 million views — proving attention is easy, but trust is engineered.',
  },
];

export default function SandeepN() {
  useSEO({
    title: 'Sandeep N — City Partner NIA Guntur',
    description: "Sandeep N is India's rare Legal-Blended Brand Architect, TedX speaker, and founder of Magsmen and InTalks. City Partner of NIA Guntur.",
    keywords: 'Sandeep N NIA Guntur, Sandeep Magsmen, InTalks Guntur, Brand Architect Guntur, TedX Speaker Guntur',
  });

  return (
    <div className="min-h-screen bg-nia-ivory">
      <section className="pt-16 min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[55vh] lg:h-[95vh] overflow-hidden lg:order-1 order-2">
          <img
            src="/PHOTO-2026-03-19-13-37-50.jpg"
            alt="Sandeep N — Brand Architect, TedX Speaker, City Partner NIA Guntur"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/0 lg:to-white/10" />
        </div>

        <div className="flex flex-col justify-end pb-20 pt-16 px-8 lg:px-16 bg-nia-ivory lg:order-2 order-1">
          <div className="flex items-center gap-3 mb-10">
            <Link to="/city-partners" className="text-xs tracking-[0.3em] uppercase text-nia-muted hover:text-nia-black transition-colors">
              City Partners
            </Link>
            <span className="text-nia-border">/</span>
            <span className="text-xs tracking-[0.3em] uppercase text-[#f07723]">Sandeep N</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-xs font-light tracking-[0.5em] uppercase text-[#f07723] mb-5">
              City Partner — NIA Guntur
            </p>
            <h1 className="font-montserrat text-5xl md:text-6xl lg:text-7xl font-bold text-nia-black leading-tight mb-5">
              Sandeep N.
            </h1>
            <p className="text-sm font-light text-nia-muted tracking-widest uppercase mb-8">
              Brand Architect &nbsp;|&nbsp; TedX Speaker &nbsp;|&nbsp; Serial Entrepreneur
            </p>
            <p className="text-base font-light text-nia-gray leading-relaxed-custom max-w-md">
              India's rare Legal-Blended Brand Architect. Founder of Magsmen and InTalks. Builder of brands that are not just visible — but defensible and sustainable.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-nia-black border-b border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1e1e1e]">
            {[
              { value: '100+', label: 'Brands Shaped' },
              { value: '1.5L+', label: 'Community Built' },
              { value: '200M+', label: 'Video Views' },
              { value: 'TedX', label: 'Speaker' },
            ].map((stat) => (
              <div key={stat.label} className="px-8 py-8 text-center">
                <div className="font-montserrat text-3xl font-bold text-white mb-1">{stat.value}</div>
                <p className="text-xs font-light text-[#555555] tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <AnimatedSection>
              <p className="text-xs font-light tracking-[0.4em] uppercase text-[#f07723] mb-6">The Story</p>
              <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-nia-black mb-10 leading-tight">
                Where brand strategy
                <br />meets legal foresight.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="space-y-6">
              <p className="text-base font-light text-nia-gray leading-relaxed-custom">
                Sandeep N is India's rare Legal-Blended Brand Architect and the founder of Magsmen strategy consultants — a firm that has shaped over 100 brands across startups and enterprise businesses.
              </p>
              <p className="text-base font-light text-nia-gray leading-relaxed-custom">
                He is the creator of InTalks Podcast, a high-impact platform with a 1.5 lakh+ Telugu business community and over 200 million views. Known for integrating brand strategy with legal foresight, business process, and economic discipline — Sandeep works with founders, celebrities, and business leaders to build brands that are not just visible, but defensible and sustainable.
              </p>
              <p className="text-base font-light text-nia-gray leading-relaxed-custom">
                A TedX speaker, lawyer, image consultant, and emerging thought leader, he believes the next generation of enduring brands will not come from convention, but from those willing to challenge it. Sandeep is building that shift — proving that where you start matters far less than how boldly you think and execute.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-16 bg-nia-darker border-y border-nia-border">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection className="mb-14">
            <p className="text-xs font-light tracking-[0.4em] uppercase text-[#f07723] mb-4">What Makes Him Different</p>
            <h2 className="font-montserrat text-4xl font-bold text-nia-black leading-tight">The rare intersection.</h2>
          </AnimatedSection>
          <div className="space-y-0 border-t border-nia-border">
            {differentiators.map((item, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.08}
                className="flex flex-col md:flex-row md:items-start gap-6 py-8 border-b border-nia-border"
              >
                <div className="text-4xl font-extrabold text-nia-border leading-none w-12 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-nia-black mb-2 tracking-wide">{item.title}</h3>
                  <p className="text-sm font-light text-nia-gray leading-relaxed-custom">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection className="mb-14">
            <p className="text-xs font-light tracking-[0.4em] uppercase text-[#f07723] mb-4">Ventures</p>
            <h2 className="font-montserrat text-4xl font-bold text-nia-black leading-tight">What he has built.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px ">
            {ventures.map((venture) => (
              <AnimatedSection key={venture.name} className="bg-nia-ivory border border-nia-border rounded-xl p-10 hover:bg-nia-darker hover:border-[#f07723]/40 hover:shadow-editorial transition-all duration-300">
                <h3 className="font-montserrat text-2xl font-bold text-[#0e1c40] mb-4">{venture.name}</h3>
                <p className="text-sm font-light text-nia-gray leading-relaxed-custom mb-6">{venture.desc}</p>
                {venture.url && (
                  <a
                    href={venture.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-nia-black hover:text-[#f07723] transition-colors font-light"
                  >
                    Visit {venture.name} <ExternalLink size={12} />
                  </a>
                )}
              </AnimatedSection>
            ))}
            <AnimatedSection className="bg-nia-ivory border border-nia-border rounded-xl p-10 hover:bg-nia-darker hover:border-[#f07723]/40 hover:shadow-editorial transition-all duration-300" delay={0.1}>
              <h3 className="font-montserrat text-2xl font-bold text-[#0e1c40] mb-4">His Role in NIA Guntur</h3>
              <p className="text-sm font-light text-nia-gray leading-relaxed-custom">
                Inside NIA Guntur, Sandeep elevates the thinking of every member in the room. Strategy is not a department — it is a mindset every business owner here must develop. He brings that mindset to every meeting.
              </p>
            </AnimatedSection>
            <AnimatedSection className="bg-nia-black p-10" delay={0.15}>
              <p className="text-xs tracking-[0.4em] uppercase text-[#f07723] mb-4">A Thought</p>
              <p className="font-montserrat text-xl text-white leading-relaxed italic">
                "The next generation of enduring brands will not come from convention — but from those willing to challenge it."
              </p>
              <p className="text-xs text-[#555555] tracking-widest uppercase mt-4">— Sandeep N</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-16 bg-nia-black">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-[#555555] mb-3">Connect with Sandeep</p>
                <a href="tel:+919703356332" className="font-montserrat text-3xl font-bold text-white hover:text-[#f07723] transition-colors">
                  +91 97033 56332
                </a>
              </div>
              <Link
                to="/apply"
                className="h-[52px] px-10 font-semibold text-sm tracking-widest uppercase bg-nia-orange text-white hover:bg-nia-orange/90 hover:shadow-[0_0_32px_rgba(232,119,34,0.3)] transition-all duration-300 inline-flex items-center gap-2 shrink-0"
              >
                Apply for Membership <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
