import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useSEO } from '../hooks/useSEO';
import { motion } from 'framer-motion';

const differentiators = [
  { title: 'Execution at Scale', desc: 'Theory is noise. Vinod operates at the level of delivery — 35+ projects across Guntur that prove execution is a discipline, not a default.' },
  { title: 'Technology Foundation', desc: 'With a background in IT and experience at IBM, Vinod brings a systems-first mindset to every venture he builds — across industries.' },
  { title: 'Industry Governance', desc: 'As Joint Secretary of CREDAI AP, he shaped policy and standards at an industry level — understanding both the rules and how to build within them.' },
  { title: 'Multi-Venture Thinking', desc: 'Raaga Infra. Snakes & Ladders. Wisecap Innovations. A builder who can conceive, launch, and scale across completely different markets.' },
];

const ventures = [
  {
    name: 'Raaga Infra',
    desc: 'A real estate development company with 35+ completed residential and commercial projects across Guntur. Built on the conviction that delivery is the only credibility that counts.',
  },
  {
    name: 'Snakes and Ladders',
    desc: "A popular indoor play zone in Guntur — Vinod's foray into experiential and lifestyle-driven consumer businesses that connect communities.",
  },
  {
    name: 'Wisecap Innovations',
    desc: 'Co-founded with a focus on strategic and design-led solutions. Includes Wisecap Design Studio — delivering creative and innovation-led work.',
  },
  {
    name: 'CREDAI Andhra Pradesh',
    desc: "As Joint Secretary, Vinod contributes to the real estate industry's development, progressive collaboration, and governance across Andhra Pradesh.",
  },
];

export default function VinodT() {
  useSEO({
    title: 'Vinod Reddy T — City Partner NIA Guntur',
    description: 'Vinod Reddy Tiyyagura is a serial entrepreneur, founder of Raaga Infra, and Joint Secretary of CREDAI AP. City Partner of NIA Guntur.',
    keywords: 'Vinod Reddy T NIA Guntur, Vinod Raaga Infra, CREDAI AP, Guntur Builder, Serial Entrepreneur Guntur',
  });

  return (
    <div className="min-h-screen bg-nia-ivory">
      <section className="pt-16 min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-end pb-20 pt-16 px-8 lg:px-16 bg-nia-ivory order-1">
          <div className="flex items-center gap-3 mb-10">
            <Link to="/city-partners" className="text-xs tracking-[0.3em] uppercase text-nia-muted hover:text-nia-black transition-colors">
              City Partners
            </Link>
            <span className="text-nia-border">/</span>
            <span className="text-xs tracking-[0.3em] uppercase text-nia-gold">Vinod Reddy T</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-xs font-light tracking-[0.5em] uppercase text-nia-gold mb-5">
              City Partner — NIA Guntur
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-nia-black leading-tight mb-5">
              Vinod Reddy T.
            </h1>
            <p className="text-sm font-light text-nia-muted tracking-widest uppercase mb-8">
              Builder &nbsp;|&nbsp; Serial Entrepreneur
            </p>
            <p className="text-base font-light text-nia-gray leading-relaxed-custom max-w-md">
              From IBM to Raaga Infra. From real estate to innovation. A forward-thinking entrepreneur who blends disciplined execution with a restless appetite for building new categories.
            </p>
          </motion.div>
        </div>

        <div className="relative h-[55vh] lg:h-full overflow-hidden order-2">
          <img
            src="/23456.png"
            alt="Vinod Reddy T — Builder, Serial Entrepreneur, City Partner NIA Guntur"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 lg:to-transparent" />
        </div>
      </section>

      <section className="bg-nia-black border-b border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1e1e1e]">
            {[
              { value: '35+', label: 'Projects Delivered' },
              { value: 'Jt. Sec.', label: 'CREDAI AP' },
              { value: '4+', label: 'Active Ventures' },
              { value: 'IBM', label: 'Alumni' },
            ].map((stat) => (
              <div key={stat.label} className="px-8 py-8 text-center">
                <div className="font-playfair text-3xl font-bold text-nia-gold mb-1">{stat.value}</div>
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
              <p className="text-xs font-light tracking-[0.4em] uppercase text-nia-gold mb-6">The Story</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-nia-black mb-10 leading-tight">
                From IBM to infra.
                <br />From execution to ecosystem.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="space-y-6">
              <p className="text-base font-light text-nia-gray leading-relaxed-custom">
                Vinod Reddy Tiyyagura is a forward-thinking entrepreneur recognized for seamlessly blending innovation with disciplined execution. With a strong foundation in Information Technology and advanced academic exposure in Australia, he began his professional journey with IBM — gaining valuable global experience before transitioning into entrepreneurship.
              </p>
              <p className="text-base font-light text-nia-gray leading-relaxed-custom">
                As the Founder of Raaga Infra, Vinod has successfully delivered over 35 residential and commercial projects, earning a reputation for quality, reliability, and timely execution. His ventures reflect a deep commitment to creating value-driven developments that resonate with modern urban lifestyles.
              </p>
              <p className="text-base font-light text-nia-gray leading-relaxed-custom">
                Expanding beyond real estate, he has diversified into experiential and innovation-led businesses — including Snakes and Ladders, a popular indoor play zone in Guntur, and Wisecap Innovations. Vinod also serves as the Joint Secretary of CREDAI Andhra Pradesh, shaping the industry's future through governance and collaboration.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-16 bg-nia-darker border-y border-nia-border">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection className="mb-14">
            <p className="text-xs font-light tracking-[0.4em] uppercase text-nia-gold mb-4">What Makes Him Different</p>
            <h2 className="font-playfair text-4xl font-bold text-nia-black leading-tight">The engine behind growth.</h2>
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
            <p className="text-xs font-light tracking-[0.4em] uppercase text-nia-gold mb-4">Ventures</p>
            <h2 className="font-playfair text-4xl font-bold text-nia-black leading-tight">What he has built.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-nia-border">
            {ventures.map((venture, i) => (
              <AnimatedSection key={venture.name} delay={i * 0.08} className="bg-nia-ivory border border-nia-border rounded-xl p-10 hover:bg-nia-darker hover:border-nia-gold/40 hover:shadow-editorial transition-all duration-300">
                <h3 className="font-playfair text-2xl font-bold text-nia-gold mb-4">{venture.name}</h3>
                <p className="text-sm font-light text-nia-gray leading-relaxed-custom">{venture.desc}</p>
              </AnimatedSection>
            ))}
            <AnimatedSection className="bg-nia-black p-10 md:col-span-2" delay={0.2}>
              <p className="text-xs tracking-[0.4em] uppercase text-nia-gold mb-4">His Role in NIA Guntur</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-base font-light text-white/70 leading-relaxed-custom">
                  Inside NIA Guntur, Vinod brings the infrastructure of growth — the systems, the accountability, and the relentless focus on outcomes. He ensures this room produces results, not just conversations.
                </p>
                <p className="font-playfair text-xl text-white leading-relaxed italic">
                  "He's not a networker. He's a builder. And now, he's building the room."
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-16 bg-nia-black">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-[#555555] mb-3">Connect with Vinod</p>
                <a href="tel:+919885050850" className="font-playfair text-3xl font-bold text-white hover:text-nia-gold transition-colors">
                  +91 98850 50850
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
