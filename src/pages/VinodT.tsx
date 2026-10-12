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
    <div className="min-h-screen bg-nia-ivory text-nia-black">
      <section className="nia-hero">
        <div className="nia-shell relative grid items-center gap-10 pt-36 pb-16 md:pt-40 md:pb-20 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <nav aria-label="Breadcrumb" className="flex items-center gap-3 mb-8 text-sm">
              <Link to="/city-partners" className="font-light text-white/70 hover:text-white transition-colors">
                City Partners
              </Link>
              <span className="text-white/40">/</span>
              <span className="font-semibold text-nia-peach">Vinod Reddy T</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <p className="nia-eyebrow-light mb-5">City Partner — NIA Guntur</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[1.02] mb-5">
                Vinod Reddy T<span className="text-nia-orange">.</span>
              </h1>
              <p className="text-lg md:text-xl font-light text-white/90 mb-6">
                Builder &nbsp;|&nbsp; Serial Entrepreneur
              </p>
              <p className="max-w-md font-light leading-relaxed text-white/80">
                From IBM to Raaga Infra. From real estate to innovation. A forward-thinking entrepreneur who blends disciplined execution with a restless appetite for building new categories.
              </p>
            </motion.div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-3 rounded-[1.75rem] border border-nia-orange/50" aria-hidden="true" />
            <img
              src="/23456.png"
              alt="Vinod Reddy T — Builder, Serial Entrepreneur, City Partner NIA Guntur"
              className="relative aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-[0_24px_60px_#00000040]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-nia-border">
        <div className="nia-shell">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-nia-border">
            {[
              { value: '35+', label: 'Projects Delivered' },
              { value: 'Jt. Sec.', label: 'CREDAI AP' },
              { value: '4+', label: 'Active Ventures' },
              { value: 'IBM', label: 'Alumni' },
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
            From IBM to infra.
            <br />From execution to ecosystem.
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.15} className="space-y-6 border-l-2 border-nia-orange pl-6 md:pl-9">
          <p className="font-light text-nia-gray leading-relaxed">
            Vinod Reddy Tiyyagura is a forward-thinking entrepreneur recognized for seamlessly blending innovation with disciplined execution. With a strong foundation in Information Technology and advanced academic exposure in Australia, he began his professional journey with IBM — gaining valuable global experience before transitioning into entrepreneurship.
          </p>
          <p className="font-light text-nia-gray leading-relaxed">
            As the Founder of Raaga Infra, Vinod has successfully delivered over 35 residential and commercial projects, earning a reputation for quality, reliability, and timely execution. His ventures reflect a deep commitment to creating value-driven developments that resonate with modern urban lifestyles.
          </p>
          <p className="font-light text-nia-gray leading-relaxed">
            Expanding beyond real estate, he has diversified into experiential and innovation-led businesses — including Snakes and Ladders, a popular indoor play zone in Guntur, and Wisecap Innovations. Vinod also serves as the Joint Secretary of CREDAI Andhra Pradesh, shaping the industry's future through governance and collaboration.
          </p>
        </AnimatedSection>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="nia-shell">
          <AnimatedSection className="mb-10">
            <p className="nia-eyebrow mb-3">What makes him different</p>
            <h2 className="nia-title text-2xl md:text-3xl">The engine behind growth.</h2>
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
            {ventures.map((venture, i) => (
              <AnimatedSection key={venture.name} delay={i * 0.08} className="nia-card p-8 md:p-10">
                <h3 className="nia-title text-2xl text-nia-navy mb-4">{venture.name}</h3>
                <p className="text-sm font-light text-nia-gray leading-7">{venture.desc}</p>
              </AnimatedSection>
            ))}
            <AnimatedSection className="rounded-2xl bg-nia-navy p-8 md:p-10 text-white md:col-span-2" delay={0.2}>
              <p className="nia-eyebrow-light mb-4">His role in NIA Guntur</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="font-light text-white/80 leading-relaxed">
                  Inside NIA Guntur, Vinod brings the infrastructure of growth — the systems, the accountability, and the relentless focus on outcomes. He ensures this room produces results, not just conversations.
                </p>
                <p className="text-xl font-light leading-relaxed text-white border-l-2 border-nia-orange pl-6">
                  "He's not a networker. He's a builder. And now, he's building the room."
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-nia-navy py-20 text-white">
        <AnimatedSection className="nia-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="nia-eyebrow-light mb-3">Connect with Vinod</p>
            <a href="tel:+919885050850" className="nia-title text-3xl md:text-4xl text-white hover:text-nia-orange transition-colors">
              +91 98850 50850
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
