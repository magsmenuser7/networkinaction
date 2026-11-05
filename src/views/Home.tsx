'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Users, Globe, TrendingUp, Library, Share2, GraduationCap } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import MeetingsSection from '../components/MeetingsSection';
import { CountUp, LetterReveal, Magnetic, ParallaxBg, TiltCard } from '../components/Motion';

const c3r3 = [
  { icon: GraduationCap, code: 'C1', label: 'Coaching', desc: 'World-class ActionCOACH and Brian Tracy certified coaches embedded in every chapter — giving members direct access to proven growth frameworks.' },
  { icon: Users, code: 'C2', label: 'Collaboration', desc: 'Purposeful partnerships engineered through structured meeting formats. Every collaboration is tracked, measured, and followed through.' },
  { icon: Globe, code: 'C3', label: 'Community', desc: 'An invite-only room of vetted, serious business owners who are invested in each others success — not just their own.' },
  { icon: Share2, code: 'R1', label: 'Referrals', desc: 'Trusted, warm introductions from people who know your business. NIA members refer within the network first — every time.' },
  { icon: Library, code: 'R2', label: 'Resources', desc: 'The NIA App, NIA University, and proven business tools designed to accelerate every member from day one.' },
  { icon: TrendingUp, code: 'R3', label: 'Revenue', desc: 'Every element of NIA is designed toward one measurable outcome: growing your revenue through your network.' },
];

const howItWorks = [
  { step: '01', title: 'Apply', image: '/sandeep2.jpeg', desc: 'Submit your application. We review every request personally. Not everyone qualifies — and that is exactly the point.' },
  { step: '02', title: 'Qualify', image: '/threeheads1.jpeg', desc: 'A real conversation with our City Partners to understand your business, your goals, and whether this room is the right fit.' },
  { step: '03', title: 'Grow', image: '/1775282604835.jpg', desc: 'Enter the room. Every structured interaction is engineered for one outcome: measurable, trackable business growth.' },
];

const notForYou = [
  "You're looking for casual, unstructured networking",
  'You avoid accountability and measurement',
  'You want visibility without committing to contribution',
  "You're not ready to grow beyond your current circle",
  'You expect results without bringing value to others',
];

const stats = [
  { value: '10', label: 'Countries' },
  { value: '20+', label: 'Cities in India' },
  { value: '2015', label: 'Founded Globally' },
  { value: 'Invite', label: 'Only Access' },
];

const gallery = ['/members2.jpeg', '/ganeshteam.jpeg', '/stagepeople2.jpeg', '/vinod.jpeg'];

const cityPartners = [
  {
    name: 'Sandeep N',
    role: 'Brand Architect | TedX Speaker',
    ventures: 'Magsmen | InTalks | 200M+ Views',
    image: '/PHOTO-2026-03-19-13-37-50.jpg',
    path: '/city-partners/sandeep-n',
    stat: '1.5L+ Community Built',
  },
  {
    name: 'Vinod Reddy T',
    role: 'Builder | Serial Entrepreneur',
    ventures: 'Raaga Infra | Wisecap | CREDAI AP',
    image: '/23456.png',
    path: '/city-partners/vinod-t',
    stat: '35+ Projects Delivered',
  },
];

const bg = (src: string) => ({ backgroundImage: `url('${src}')` });

export default function Home() {
  return (
    <div className="bg-nia-ivory text-nia-black">
      {/* Hero — full-bleed photo, oversized wordmark */}
      <section
        className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-[#080c1c] text-white"
      >
        <div className="absolute inset-0 animate-kenburns bg-cover bg-center" style={bg('/members2.jpeg')} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080c1c]/80 via-[#080c1c]/60 to-[#080c1c]/85" />
        <div className="relative px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="nia-eyebrow-light mb-6"
          >
            Network In Action — Guntur, India
          </motion.p>
          <p className="text-[15vw] font-extralight leading-[0.95] tracking-[-0.05em] md:text-[9vw]">
            <LetterReveal text="NIA Guntur" delay={0.35} />
          </p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mx-auto mt-8 max-w-xl !text-xl !font-normal md:!text-2xl"
          >
            The right room changes everything<span className="text-nia-orange">.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Magnetic>
              <Link href="/apply" className="nia-btn">
                Apply for Membership <ArrowUpRight size={16} />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/about-nia" className="nia-btn-outline text-white">
                Learn About NIA
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        <a
          href="#intro"
          aria-label="Scroll to content"
          className="absolute bottom-10 left-1/2 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full bg-white text-nia-black transition hover:scale-110 hover:bg-nia-orange hover:text-white"
        >
          <ArrowDown size={16} className="relative animate-bounce" />
        </a>
      </section>

      {/* Intro — stacked serif headline, small copy, offset images */}
      <section id="intro" className="nia-shell scroll-mt-16 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl">
              Not every
              <br />
              network deserves
              <br />
              your time.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="md:justify-self-end">
            <div className="aspect-[4/3] w-full max-w-[300px] rounded-sm bg-cover bg-center" style={bg('/stagepeople.jpeg')} />
          </AnimatedSection>
        </div>
        <div className="mt-14 grid items-end gap-10 md:grid-cols-[.8fr_1.2fr]">
          <AnimatedSection>
            <div className="aspect-[5/4] w-full rounded-sm bg-cover bg-center" style={bg('/threefounders2.jpeg')} />
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="max-w-md md:pl-10">
            <p className="text-sm font-light leading-7 text-nia-gray">
              Not every room deserves your ambition. NIA Guntur is invite-only and curated — Guntur's most serious
              business community.
            </p>
            <p className="mt-4 text-sm font-light leading-7 text-nia-gray">
              Every meeting has a purpose. Every referral is tracked. Every member is accountable — to the room and to
              their own growth.
            </p>
            <Link href="/about-nia" className="nia-link mt-8">
              <span className="nia-link-dot"><ArrowUpRight size={14} /></span>
              Explore NIA
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-nia-border">
        <div className="nia-shell grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-4 py-10 text-center ${i % 2 ? 'border-l border-nia-border' : ''} ${i === 2 ? 'md:border-l' : ''} ${i >= 2 ? 'border-t border-nia-border md:border-t-0' : ''}`}
            >
              <div className="mb-2 font-serif text-4xl md:text-5xl"><CountUp value={stat.value} /></div>
              <p className="nia-eyebrow">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full-bleed photo with frosted caption */}
      <section className="relative mt-24 h-[70svh] min-h-[420px] md:mt-32">
        <ParallaxBg src="/stagepeople2.jpeg" />
        <AnimatedSection className="nia-glass absolute bottom-8 left-6 max-w-[240px] md:left-[12%]">
          <p className="nia-eyebrow mb-1">Member outcome</p>
          <p className="font-serif text-4xl">3x</p>
          <p className="text-xs text-nia-gray">Average referral ROI in first year</p>
        </AnimatedSection>
      </section>

      {/* The problem */}
      <section className="nia-shell py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-2">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl">
              Most networking
              <br />
              is a waste of time.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="space-y-4 text-sm font-light leading-7 text-nia-gray">
            <p>Events with no structure. Small talk with no follow-through.</p>
            <p>Referrals that never come. Accountability that doesn't exist.</p>
            <p>Rooms full of people who are there for themselves — not for you.</p>
            <p className="text-nia-black">
              NIA is built differently. Every meeting has a purpose. Every referral is tracked.
            </p>
          </AnimatedSection>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-2 md:grid-cols-4">
          {gallery.map((src, i) => (
            <AnimatedSection key={src} delay={i * 0.08} className="group overflow-hidden rounded-sm">
              <div className={`nia-zoom aspect-[4/5] bg-cover bg-center ${i % 2 ? 'md:mt-10' : ''}`} style={bg(src)} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* C3R3 framework */}
      <section className="bg-white py-24 md:py-32">
        <div className="nia-shell">
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <AnimatedSection>
              <p className="nia-eyebrow mb-4">The NIA framework</p>
              <h2 className="text-4xl md:text-5xl">
                C3R3 —
                <br />
                six pillars.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="self-end">
              <p className="max-w-md text-sm font-light leading-7 text-nia-gray">
                Three Cs and three Rs — the structure behind every NIA chapter worldwide, designed toward one measurable
                outcome: growth.
              </p>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {c3r3.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection
                  key={item.code}
                  delay={index * 0.06}
                  className="group relative -mx-4 cursor-default rounded-2xl border-t border-nia-border px-4 pb-6 pt-6 transition-all duration-500 hover:-translate-y-2 hover:bg-nia-ivory hover:shadow-[0_24px_50px_rgba(20,18,14,0.08)]"
                >
                  {/* orange rule that draws across the top on hover */}
                  <span className="absolute inset-x-4 -top-px h-0.5 origin-left scale-x-0 bg-nia-orange transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="mb-6 flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-nia-ivory transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110 group-hover:bg-nia-orange">
                      <Icon size={17} className="text-nia-orange transition-colors duration-500 group-hover:text-white" />
                    </span>
                    <span className="font-serif text-3xl text-nia-black/10 transition-colors duration-500 group-hover:text-nia-orange">{item.code}</span>
                  </div>
                  <h3 className="mb-3 text-2xl transition-transform duration-500 group-hover:translate-x-1">{item.label}</h3>
                  <p className="text-sm font-light leading-7 text-nia-gray">{item.desc}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process — circular image cards */}
      <section className="nia-shell py-24 md:py-32">
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl">
              Apply &amp;
              <br />
              grow.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="md:text-right">
            <h2 className="text-4xl md:text-5xl">
              How NIA
              <br />
              works.
            </h2>
          </AnimatedSection>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {howItWorks.map((step, index) => (
            <AnimatedSection key={step.step} delay={index * 0.12} className="group text-center">
              <div className="relative mx-auto mb-6 aspect-square w-full max-w-[260px]">
                <div className="h-full w-full overflow-hidden rounded-full ring-1 ring-nia-border ring-offset-8 ring-offset-nia-ivory transition-all duration-500 group-hover:ring-nia-orange">
                  <div className="nia-zoom h-full w-full bg-cover bg-center" style={bg(step.image)} />
                </div>
                <span className="absolute -right-1 top-4 grid h-14 w-14 place-items-center rounded-full bg-nia-orange font-serif text-xl text-white shadow-[0_10px_24px_rgba(232,119,34,0.4)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-12">
                  {step.step}
                </span>
              </div>
              <p className="nia-eyebrow mb-2">Step {step.step}</p>
              <h3 className="mb-3 text-3xl">{step.title}</h3>
              <p className="mx-auto max-w-xs text-sm font-light leading-7 text-nia-gray">{step.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Not for everyone — card over full-bleed photo */}
      <section className="relative py-20 md:py-28">
        <ParallaxBg src="/members1.jpeg" />
        <div className="absolute inset-0 bg-[#080c1c]/45" />
        <AnimatedSection className="nia-shell relative">
          <div className="grid gap-8 rounded-2xl bg-white p-6 md:grid-cols-[.9fr_1.1fr] md:p-10">
            <div className="relative min-h-[300px] overflow-hidden rounded-xl bg-cover bg-center" style={bg('/threeheads1.jpeg')}>
              <div className="nia-glass absolute bottom-4 left-4 right-4">
                <p className="text-sm leading-relaxed">"This is not networking. This is an operating system for growth."</p>
                <p className="nia-eyebrow mt-2">NIA City Partner</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="nia-eyebrow mb-4">Honest criteria</p>
              <p className="mb-6 text-sm font-light leading-7 text-nia-gray">
                This room is not for those who are still figuring out what they want. It is for serious entrepreneurs who
                are ready to give and receive with intention.
              </p>
              <ul className="space-y-3">
                {notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-light text-nia-black/80">
                    <span className="mt-1 text-nia-orange">×</span>
                    {item}
                  </li>
                ))}
              </ul>
              <h2 className="mt-auto pt-10 text-4xl md:text-5xl">
                Not for
                <br />
                everyone.
              </h2>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* City partners */}
      <section className="nia-shell py-24 md:py-32">
        <div className="mb-14 grid gap-8 md:grid-cols-2">
          <AnimatedSection>
            <p className="nia-eyebrow mb-4">Guntur leadership</p>
            <h2 className="text-4xl md:text-5xl">
              Meet the
              <br />
              City Partners.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="self-end md:justify-self-end">
            <Link href="/city-partners" className="nia-link">
              <span className="nia-link-dot"><ArrowUpRight size={14} /></span>
              View all City Partners
            </Link>
          </AnimatedSection>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {cityPartners.map((partner, i) => (
            <AnimatedSection key={partner.name} delay={i * 0.1}>
              <Link href={partner.path} className="group block">
                <TiltCard className="aspect-[4/5] overflow-hidden rounded-lg">
                  <div className="nia-zoom h-full w-full bg-cover bg-top" style={bg(partner.image)} />
                  <div className="nia-glass absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between gap-4 transition-transform duration-500 group-hover:-translate-y-2">
                    <div>
                      <p className="nia-eyebrow mb-1">{partner.stat}</p>
                      <h3 className="text-3xl">{partner.name}</h3>
                      <p className="text-xs text-nia-gray">{partner.role}</p>
                      <p className="text-xs text-nia-muted">{partner.ventures}</p>
                    </div>
                    <span className="nia-link-dot shrink-0 bg-white group-hover:border-nia-orange group-hover:bg-nia-orange group-hover:text-white">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </TiltCard>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <MeetingsSection />

      {/* Final CTA — centered serif, like an "about" closer */}
      <section className="relative overflow-hidden border-t border-nia-border py-24 text-center md:py-32">
        {/* slow-pulsing brand glow behind the headline */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[radial-gradient(circle,rgba(232,119,34,0.22),transparent_65%)] blur-2xl" />
        <AnimatedSection className="nia-shell relative">
          <p className="nia-eyebrow mb-6">Guntur, Andhra Pradesh</p>
          <h2 className="mx-auto max-w-3xl text-5xl md:text-7xl">
            Are you ready for <span className="italic text-nia-orange">this room?</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-sm font-light leading-7 text-nia-gray">
            Applications for NIA Guntur are reviewed personally. Seats are limited by design. The right room is waiting.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Magnetic>
              <Link href="/apply" className="nia-btn">
                Apply for Membership <ArrowUpRight size={16} />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-nia-black/20 px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-nia-black hover:bg-nia-black hover:text-white active:scale-[0.97]">
                Contact Us First
              </Link>
            </Magnetic>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
