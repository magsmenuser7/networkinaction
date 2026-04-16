import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Users, Globe, TrendingUp, Library, Share2, GraduationCap } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useSEO } from '../hooks/useSEO';
import logo from "../../public/nia-logo-guntur.png"
import sandeep from "../../public/sandeep2.jpeg"
import group from "../../public/members2.jpeg"
import group2 from "../../public/threeheads1.jpeg"
import group3 from "../../public/members1.jpeg"
import { useState, useEffect } from "react";

import vinod from "../../public/vinod.jpeg"
import teampic from "../../public/1775282604835.jpg"
import team from "../../public/ganeshteam.jpeg"





const c3r3 = [
  { icon: GraduationCap, code: 'C1', label: 'Coaching', desc: 'World-class ActionCOACH and Brian Tracy certified coaches embedded in every chapter — giving members direct access to proven growth frameworks.' },
  { icon: Users, code: 'C2', label: 'Collaboration', desc: 'Purposeful partnerships engineered through structured meeting formats. Every collaboration is tracked, measured, and followed through.' },
  { icon: Globe, code: 'C3', label: 'Community', desc: 'An invite-only room of vetted, serious business owners who are invested in each others success — not just their own.' },
  { icon: Share2, code: 'R1', label: 'Referrals', desc: 'Trusted, warm introductions from people who know your business. NIA members refer within the network first — every time.' },
  { icon: Library, code: 'R2', label: 'Resources', desc: 'The NIA App, NIA University, and proven business tools designed to accelerate every member from day one.' },
  { icon: TrendingUp, code: 'R3', label: 'Revenue', desc: 'Every element of NIA is designed toward one measurable outcome: growing your revenue through your network.' },
];

const howItWorks = [
  { step: '01', title: 'Apply', desc: 'Submit your application. We review every request personally. Not everyone qualifies — and that is exactly the point.' },
  { step: '02', title: 'Qualify', desc: 'A real conversation with our City Partners to understand your business, your goals, and whether this room is the right fit.' },
  { step: '03', title: 'Grow', desc: 'Enter the room. Every structured interaction is engineered for one outcome: measurable, trackable business growth.' },
];

const notForYou = [
  "You're looking for casual, unstructured networking",
  "You avoid accountability and measurement",
  "You want visibility without committing to contribution",
  "You're not ready to grow beyond your current circle",
  "You expect results without bringing value to others",
];

const stats = [
  { value: '10', label: 'Countries' },
  { value: '20+', label: 'Cities in India' },
  { value: '2015', label: 'Founded Globally' },
  { value: 'Invite', label: 'Only Access' },
];

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

export default function Home() {

  const images = [sandeep, vinod, group, teampic, group2];

const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, 3000); // change every 3 sec

  return () => clearInterval(interval);
}, []);
  useSEO({
    title: 'NIA Guntur — The Right Room Changes Everything',
    description: "Network In Action Guntur is Andhra Pradesh's most exclusive, invite-only business community. Structured meetings. Measurable growth. Real referrals.",
    keywords: 'NIA Guntur, Network In Action Guntur, Business Networking Guntur, Entrepreneur Community Guntur',
    image: logo,
  });

  return (
    <div className="min-h-screen bg-nia-ivory">
      <section className="relative min-h-screen flex items-end pb-24 px-6 lg:px-16 overflow-hidden">
       <motion.div
  key={currentIndex}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: `url(${images[currentIndex]})` }}
/>
        <div className="absolute inset-0 bg-black/50 bg-gradient-r" />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" /> */}

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xs font-light tracking-[0.5em] uppercase text-[#f07723] mb-8"
            >
              Network In Action — Guntur, India
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="font-montserrat text-5xl md:text-5xl lg:text-[55px] font-bold text-white mb-8 leading-tight max-w-5xl"
            >
              The Right Room
              <br />
              <span className="">Changes Everything.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-base md:text-lg font-light text-white/60 max-w-lg mb-4 leading-relaxed-custom"
            >
              Not every network deserves your time. Not every room deserves your ambition.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-sm font-light text-white/40 max-w-sm mb-14 tracking-wide"
            >
              Invite-only. Curated. Guntur's most serious business community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/apply"
                className="h-14 px-10 font-semibold text-sm tracking-[0.2em] uppercase bg-nia-orange text-white rounded-xl border border-nia-orange hover:bg-nia-orange/90 hover:shadow-[0_0_40px_rgba(232,119,34,0.4)] transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Apply for Membership <ArrowRight size={16} />
              </Link>
              <Link
                to="/about-nia"
                className="h-14 px-10 font-light text-sm tracking-[0.2em] uppercase bg-transparent text-white/70 rounded-xl border border-white/20 hover:border-white/50 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
              >
                Learn About NIA
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:bottom-8 lg:right-16 z-10 w-[90%] max-w-[260px] lg:max-w-[220px]">
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.6, duration: 0.6 }}
    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 lg:p-5"
  >
    <div className="flex items-center gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={12} className="fill-[#f07723] text-[#f07723]" />
      ))}
    </div>

    <p className="text-white text-xs font-light leading-relaxed">
      "The referrals alone paid for 3 years of membership in the first month."
    </p>

    <p className="text-white/40 text-[10px] tracking-widest uppercase mt-2">
      NIA Member
    </p>
  </motion.div>
</div>
      </section>

      <section className="bg-nia-black py-6">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1e1e1e]">
            {stats.map((stat) => (
              <div key={stat.label} className="px-8 py-6 text-center">
                <div className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <p className="text-xs font-light text-[#555555] tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-16 bg-nia-ivory">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-xs font-light tracking-[0.4em] uppercase text-[#f07723] mb-6">
                The Problem with Networking
              </p>
              <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-nia-black mb-8 leading-tight">
                Most networking is
                <br />
                a waste of time.
              </h2>
              <div className="space-y-5">
                {[
                  "Events with no structure. Small talk with no follow-through.",
                  "Referrals that never come. Accountability that doesn't exist.",
                  "Rooms full of people who are there for themselves — not for you.",
                ].map((line, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 border border-[#f07723]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#f07723] text-xs">—</span>
                    </div>
                    <p className="text-base font-light text-nia-gray leading-relaxed-custom">{line}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 border-l-2 border-[#f07723] pl-6">
                <p className="text-base font-light text-nia-black leading-relaxed-custom">
                  NIA is built differently. Every meeting has a purpose. Every referral is tracked. Every member is accountable — to the room and to their own growth.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="relative">
              <div
                className="w-full aspect-[4/5] bg-contain bg-no-repeat bg-center rounded-2xl overflow-hidden"
                style={{ backgroundImage: `url(${team})` }}
              />
              <div className="absolute -bottom-6 -left-6 bg-nia-ivory border border-nia-border rounded-xl p-6 shadow-editorial max-w-[220px]">
                <p className="text-xs tracking-[0.3em] uppercase text-[#f07723] mb-2">Member Outcome</p>
                <p className="font-montserrat text-2xl font-bold text-nia-black mb-1">3x</p>
                <p className="text-xs font-light text-nia-gray">Average referral ROI in first year</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-16 bg-nia-darker border-y border-[#0e1c40]">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection className="mb-16">
            <p className="text-xs font-light tracking-[0.4em] uppercase text-[#f07723] mb-4">
              The NIA Framework
            </p>
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-nia-black max-w-2xl leading-tight">
              C3R3 — Six pillars of
              measurable growth.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c3r3.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection
                  key={item.code}
                  delay={index * 0.07}
                  className="bg-nia-ivory border border-nia-border rounded-xl p-8 hover:border-[#0e1c40]/40 hover:shadow-editorial transition-all duration-300 group "
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-[#0e1c40]/10 border border-[#0e1c40]/20 rounded-lg flex items-center justify-center group-hover:bg-[#0e1c40] group-hover:border-[#0e1c40] transition-all duration-300">
                      <Icon size={16} className="text-[#0e1c40] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-[10px] font-extrabold tracking-[0.4em] uppercase text-nia-muted">{item.code}</span>
                  </div>
                  <h3 className="font-montserrat text-xl font-bold text-nia-black mb-3">{item.label}</h3>
                  <p className="text-sm font-light text-nia-gray leading-relaxed-custom">{item.desc}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-16 bg-nia-ivory">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection className="text-center mb-20">
            <p className="text-xs font-light tracking-[0.4em] uppercase text-[#0e1c40] mb-4">The Process</p>
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-nia-black leading-tight">
              How NIA works.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {howItWorks.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.1} className="bg-nia-darker border border-nia-border rounded-xl p-10 hover:border-[#0e1c40]/50 hover:shadow-editorial transition-all duration-300">
                <span className="font-montserrat text-6xl font-bold text-nia-border">{step.step}</span>
                <h3 className="font-montserrat text-2xl font-bold text-nia-black mt-4 mb-4">{step.title}</h3>
                <p className="text-sm font-light text-nia-gray leading-relaxed-custom">{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-16 bg-nia-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <p className="text-xs font-light tracking-[0.4em] uppercase text-[#f07723] mb-6">
                Honest Criteria
              </p>
              <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">
                NIA is not for
                <br />
                <span className="text-white">everyone.</span>
              </h2>
              <p className="text-base font-light text-[#777777] mb-8 leading-relaxed-custom">
                This room is not for those who are still figuring out what they want. It is for serious entrepreneurs who are ready to give and receive with intention.
              </p>
              <div className="space-y-4">
                {notForYou.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-5 h-5 border border-red-900/60 flex items-center justify-center shrink-0">
                      <span className="text-red-500/60 text-xs font-bold">×</span>
                    </div>
                    <p className="text-sm font-light text-[#666666]">{item}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="relative">
              <div
                className="w-full aspect-square bg-cover bg-no-repeat bg-center rounded-2xl overflow-hidden"
                style={{ backgroundImage: `url(${group2})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nia-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <CheckCircle size={20} className="text-[#f07723] mb-3" />
                <p className="text-white font-montserrat text-lg font-semibold mb-2">
                  "This is not networking. This is an operating system for growth."
                </p>
                <p className="text-blue text-xs tracking-widest uppercase">NIA City Partner</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-16 bg-nia-ivory">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection className="mb-16">
            <p className="text-xs font-light tracking-[0.4em] uppercase text-[#f07723] mb-4">
              Guntur Leadership
            </p>
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-nia-black leading-tight">
              Meet the City Partners.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cityPartners.map((partner, i) => (
              <AnimatedSection key={partner.name} delay={i * 0.1}>
                <Link to={partner.path} className="group block">
                  <div className="relative overflow-hidden aspect-[3/4] rounded-2xl">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${partner.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="text-xs tracking-[0.3em] uppercase text-[#f07723] mb-2">{partner.stat}</p>
                      <h3 className="font-montserrat text-3xl font-bold text-white mb-1">{partner.name}</h3>
                      <p className="text-sm font-light text-white/60 mb-1">{partner.role}</p>
                      <p className="text-xs font-light text-white/40">{partner.ventures}</p>
                      <div className="flex items-center gap-2 mt-5 text-white hover:text-[#f07723] text-xs tracking-widest uppercase font-light group-hover:gap-4 transition-all duration-300">
                        <span>View Profile</span>
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.2} className="text-center mt-12">
            <Link
              to="/city-partners"
              className="inline-flex items-center gap-2 text-sm font-light text-nia-black/70 hover:text-[#f07723] transition-colors tracking-widest uppercase"
            >
              View All City Partners <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-40 px-6 lg:px-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${group3})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <AnimatedSection>
            <p className="text-xs font-light tracking-[0.5em] uppercase text-[#f07723] mb-6">
              Guntur, Andhra Pradesh
            </p>
            <h2 className="font-montserrat text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-3xl">
              Are you ready for
              <br />
              <span className="text-white">this room?</span>
            </h2>
            <p className="text-base font-light text-white/50 max-w-xl mb-12 leading-relaxed-custom">
              Applications for NIA Guntur are reviewed personally. Seats are limited by design. The right room is waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/apply"
                className="h-14 px-10 font-semibold text-sm tracking-[0.2em] uppercase bg-nia-orange text-white rounded-xl hover:bg-nia-orange/90 hover:shadow-[0_0_40px_rgba(232,119,34,0.35)] transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Apply for Membership <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="h-14 px-10 font-light text-sm tracking-[0.2em] uppercase text-white/60 rounded-xl border border-white/20 hover:border-white/50 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
              >
                Contact Us First
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
