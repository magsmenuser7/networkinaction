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
    <div className="min-h-screen bg-nia-ivory text-nia-black">
      <section className="nia-hero">
        <div className="nia-shell relative grid items-center gap-10 pt-36 pb-16 md:pt-40 md:pb-20 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <nav aria-label="Breadcrumb" className="flex items-center gap-3 mb-8 text-sm">
              <Link to="/city-partners" className="font-light text-white/70 hover:text-white transition-colors">
                City Partners
              </Link>
              <span className="text-white/40">/</span>
              <span className="font-semibold text-nia-peach">Sandeep N</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <p className="nia-eyebrow-light mb-5">City Partner — NIA Guntur</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[1.02] mb-5">
                Sandeep N<span className="text-nia-orange">.</span>
              </h1>
              <p className="text-lg md:text-xl font-light text-white/90 mb-6">
                Brand Architect &nbsp;|&nbsp; TedX Speaker &nbsp;|&nbsp; Serial Entrepreneur
              </p>
              <p className="max-w-md font-light leading-relaxed text-white/80">
                India's rare Legal-Blended Brand Architect. Founder of Magsmen and InTalks. Builder of brands that are not just visible — but defensible and sustainable.
              </p>
            </motion.div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-3 rounded-[1.75rem] border border-nia-orange/50" aria-hidden="true" />
            <img
              src="/PHOTO-2026-03-19-13-37-50.jpg"
              alt="Sandeep N — Brand Architect, TedX Speaker, City Partner NIA Guntur"
              className="relative aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-[0_24px_60px_#00000040]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-nia-border">
        <div className="nia-shell">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-nia-border">
            {[
              { value: '100+', label: 'Brands Shaped' },
              { value: '1.5L+', label: 'Community Built' },
              { value: '200M+', label: 'Video Views' },
              { value: 'TedX', label: 'Speaker' },
            ].map((stat) => (
              <div key={stat.label} className="px-4 py-8 text-center">
                <div className="text-3xl font-bold tracking-[-0.04em] text-nia-navy mb-1">{stat.value}</div>
                <p className="text-sm font-light text-nia-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nia-shell grid gap-8 py-20 md:grid-cols-[.7fr_1.3fr] md:py-24">
        <AnimatedSection>
          <p className="nia-eyebrow mb-4">The story</p>
          <h2 className="nia-title text-2xl md:text-3xl">
            Where brand strategy
            <br />meets legal foresight.
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.15} className="space-y-6 border-l-2 border-nia-orange pl-6 md:pl-9">
          <p className="font-light text-nia-gray leading-relaxed">
            Sandeep N is India's rare Legal-Blended Brand Architect and the founder of Magsmen strategy consultants — a firm that has shaped over 100 brands across startups and enterprise businesses.
          </p>
          <p className="font-light text-nia-gray leading-relaxed">
            He is the creator of InTalks Podcast, a high-impact platform with a 1.5 lakh+ Telugu business community and over 200 million views. Known for integrating brand strategy with legal foresight, business process, and economic discipline — Sandeep works with founders, celebrities, and business leaders to build brands that are not just visible, but defensible and sustainable.
          </p>
          <p className="font-light text-nia-gray leading-relaxed">
            A TedX speaker, lawyer, image consultant, and emerging thought leader, he believes the next generation of enduring brands will not come from convention, but from those willing to challenge it. Sandeep is building that shift — proving that where you start matters far less than how boldly you think and execute.
          </p>
        </AnimatedSection>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="nia-shell">
          <AnimatedSection className="mb-10">
            <p className="nia-eyebrow mb-3">What makes him different</p>
            <h2 className="nia-title text-2xl md:text-3xl">The rare intersection.</h2>
          </AnimatedSection>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.08} className="border-t-2 border-nia-orange pt-5">
                <span className="text-sm font-semibold text-nia-rust">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm font-light leading-7 text-nia-gray">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="nia-shell">
          <AnimatedSection className="mb-10">
            <p className="nia-eyebrow mb-3">Ventures</p>
            <h2 className="nia-title text-2xl md:text-3xl">What he has built.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ventures.map((venture) => (
              <AnimatedSection key={venture.name} className="nia-card p-8 md:p-10">
                <h3 className="nia-title text-2xl text-nia-navy mb-4">{venture.name}</h3>
                <p className="text-sm font-light text-nia-gray leading-7 mb-6">{venture.desc}</p>
                {venture.url && (
                  <a
                    href={venture.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-nia-rust hover:text-nia-orange transition-colors"
                  >
                    Visit {venture.name} <ExternalLink size={14} />
                  </a>
                )}
              </AnimatedSection>
            ))}
            <AnimatedSection className="nia-card p-8 md:p-10" delay={0.1}>
              <h3 className="nia-title text-2xl text-nia-navy mb-4">His Role in NIA Guntur</h3>
              <p className="text-sm font-light text-nia-gray leading-7">
                Inside NIA Guntur, Sandeep elevates the thinking of every member in the room. Strategy is not a department — it is a mindset every business owner here must develop. He brings that mindset to every meeting.
              </p>
            </AnimatedSection>
            <AnimatedSection className="rounded-2xl bg-nia-navy p-8 md:p-10 text-white" delay={0.15}>
              <p className="nia-eyebrow-light mb-4">A thought</p>
              <p className="text-xl font-light leading-relaxed text-white">
                "The next generation of enduring brands will not come from convention — but from those willing to challenge it."
              </p>
              <p className="mt-4 text-sm font-semibold text-nia-peach">— Sandeep N</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-nia-navy py-20 text-white">
        <AnimatedSection className="nia-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="nia-eyebrow-light mb-3">Connect with Sandeep</p>
            <a href="tel:+919703356332" className="nia-title text-3xl md:text-4xl text-white hover:text-nia-orange transition-colors">
              +91 97033 56332
            </a>
          </div>
          <Link to="/apply" className="nia-btn self-start md:self-auto shrink-0">
            Apply for Membership <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
