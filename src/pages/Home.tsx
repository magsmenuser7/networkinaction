import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Users, Globe, TrendingUp, Library, Share2, GraduationCap } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useSEO } from '../hooks/useSEO';
import logo from "/nia-logo-guntur.png"
import sandeep from "/sandeep2.jpeg"
import group from "/members2.jpeg"
import group2 from "/threeheads1.jpeg"
import group3 from "/members1.jpeg"
import { useState, useEffect } from "react";

import vinod from "/vinod.jpeg"
import teampic from "/1775282604835.jpg"
import team from "/ganeshteam.jpeg"

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
    <div className="min-h-screen bg-nia-ivory text-nia-black">
      {/* Hero */}
      <section className="nia-hero">
        <div className="nia-shell relative grid items-center gap-12 pt-36 pb-20 md:pt-40 md:pb-28 lg:grid-cols-[1.1fr_.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="nia-eyebrow-light mb-6"
            >
              Network In Action — Guntur, India
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.05em] leading-[1.05] text-white mb-7 max-w-3xl"
            >
              The Right Room
              <br />
              <span>Changes Everything<span className="text-nia-orange">.</span></span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-base md:text-lg font-light text-white/85 max-w-lg mb-3 leading-relaxed"
            >
              Not every network deserves your time. Not every room deserves your ambition.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-sm font-light text-white/70 max-w-sm mb-10 leading-relaxed"
            >
              Invite-only. Curated. Guntur's most serious business community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/apply" className="nia-btn">
                Apply for Membership <ArrowRight size={16} />
              </Link>
              <Link to="/about-nia" className="nia-btn-outline text-white">
                Learn About NIA
              </Link>
            </motion.div>
          </motion.div>

          {/* Rotating image */}
          <div className="relative">
            <div className="relative aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-2xl border border-white/15 bg-white/5">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nia-navy/70 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="absolute -bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-[260px] rounded-2xl border border-white/20 bg-nia-navy/80 backdrop-blur-md p-5"
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-nia-orange text-nia-orange" />
                ))}
              </div>
              <p className="text-white text-sm font-light leading-relaxed">
                "The referrals alone paid for 3 years of membership in the first month."
              </p>
              <p className="nia-eyebrow-light mt-3 text-[10px]">NIA Member</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-nia-border">
        <div className="nia-shell grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-4 py-10 text-center ${i % 2 ? 'border-l border-nia-border' : ''} ${i === 2 ? 'md:border-l md:border-nia-border' : ''} ${i >= 2 ? 'border-t border-nia-border md:border-t-0' : ''}`}
            >
              <div className="nia-title text-3xl md:text-4xl text-nia-navy mb-2">{stat.value}</div>
              <p className="nia-eyebrow">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The problem */}
      <section className="bg-nia-ivory py-20 md:py-24">
        <div className="nia-shell grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="nia-eyebrow mb-4">The problem with networking</p>
            <h2 className="nia-title text-2xl md:text-3xl mb-8">
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
                  <div className="w-6 h-6 rounded-full border border-nia-orange/50 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-nia-rust text-xs">—</span>
                  </div>
                  <p className="font-light text-nia-gray leading-relaxed">{line}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 border-l-2 border-nia-orange pl-6 md:pl-9">
              <p className="font-light text-nia-black leading-relaxed">
                NIA is built differently. Every meeting has a purpose. Every referral is tracked. Every member is accountable — to the room and to their own growth.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="relative">
            <div
              className="w-full aspect-[4/5] bg-contain bg-no-repeat bg-center rounded-2xl overflow-hidden"
              style={{ backgroundImage: `url(${team})` }}
            />
            <div className="absolute -bottom-6 left-4 sm:-left-6 rounded-2xl border border-nia-border bg-white p-6 shadow-[0_16px_38px_#0d0d0d14] max-w-[220px]">
              <p className="nia-eyebrow mb-2">Member outcome</p>
              <p className="nia-title text-2xl text-nia-navy mb-1">3x</p>
              <p className="text-xs font-light text-nia-gray">Average referral ROI in first year</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* C3R3 framework */}
      <section className="bg-white py-20 md:py-24">
        <div className="nia-shell">
          <AnimatedSection className="mb-12">
            <p className="nia-eyebrow mb-4">The NIA framework</p>
            <h2 className="nia-title text-2xl md:text-3xl max-w-md">
              C3R3 — Six pillars of measurable growth.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c3r3.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.code} delay={index * 0.07} className="nia-card group p-7">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-11 h-11 rounded-full bg-nia-ivory border border-nia-border flex items-center justify-center group-hover:bg-nia-navy group-hover:border-nia-navy transition-colors duration-300">
                      <Icon size={17} className="text-nia-navy group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="nia-eyebrow">{item.code}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.label}</h3>
                  <p className="text-sm font-light text-nia-gray leading-7">{item.desc}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-nia-ivory py-20 md:py-24">
        <div className="nia-shell">
          <AnimatedSection className="mb-12">
            <p className="nia-eyebrow mb-4">The process</p>
            <h2 className="nia-title text-2xl md:text-3xl">How NIA works.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.1} className="border-t-2 border-nia-orange pt-5">
                <span className="nia-title text-5xl text-nia-navy/15">{step.step}</span>
                <h3 className="text-lg font-bold mt-3 mb-3">{step.title}</h3>
                <p className="text-sm font-light text-nia-gray leading-7">{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Honest criteria */}
      <section className="bg-nia-navy text-white py-20 md:py-24">
        <div className="nia-shell grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="nia-eyebrow-light mb-4">Honest criteria</p>
            <h2 className="nia-title text-2xl md:text-3xl text-white mb-6">
              NIA is not for
              <br />
              <span className="text-white">everyone.</span>
            </h2>
            <p className="font-light text-white/80 mb-8 leading-relaxed max-w-xl">
              This room is not for those who are still figuring out what they want. It is for serious entrepreneurs who are ready to give and receive with intention.
            </p>
            <div className="space-y-4">
              {notForYou.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full border border-nia-peach/50 flex items-center justify-center shrink-0">
                    <span className="text-nia-peach text-xs font-bold">×</span>
                  </div>
                  <p className="text-sm font-light text-white/75">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="relative overflow-hidden rounded-2xl">
            <div
              className="w-full aspect-square bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${group2})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nia-navy/85 via-nia-navy/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <CheckCircle size={20} className="text-nia-orange mb-3" />
              <p className="text-white text-lg font-semibold tracking-[-0.02em] mb-2">
                "This is not networking. This is an operating system for growth."
              </p>
              <p className="nia-eyebrow-light">NIA City Partner</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* City partners */}
      <section className="bg-white py-20 md:py-24">
        <div className="nia-shell">
          <AnimatedSection className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="nia-eyebrow mb-4">Guntur leadership</p>
              <h2 className="nia-title text-2xl md:text-3xl">Meet the City Partners.</h2>
            </div>
            <Link
              to="/city-partners"
              className="inline-flex items-center gap-2 text-sm font-semibold text-nia-rust hover:text-nia-orange transition-colors"
            >
              View All City Partners <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cityPartners.map((partner, i) => (
              <AnimatedSection key={partner.name} delay={i * 0.1}>
                <Link to={partner.path} className="group block">
                  <div className="relative overflow-hidden aspect-[3/4] rounded-2xl border border-nia-border">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${partner.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nia-navy via-nia-navy/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <p className="nia-eyebrow-light mb-2">{partner.stat}</p>
                      <h3 className="nia-title text-3xl text-white mb-1">{partner.name}</h3>
                      <p className="text-sm font-light text-white/80 mb-1">{partner.role}</p>
                      <p className="text-xs font-light text-white/60">{partner.ventures}</p>
                      <div className="flex items-center gap-2 mt-5 text-sm font-semibold text-white group-hover:text-nia-peach group-hover:gap-4 transition-all duration-300">
                        <span>View Profile</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${group3})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-nia-navy/95 via-nia-navy/85 to-nia-navy/60" />
        <div className="nia-shell relative z-10">
          <AnimatedSection>
            <p className="nia-eyebrow-light mb-4">Guntur, Andhra Pradesh</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.05em] leading-[1.05] text-white mb-6 max-w-3xl">
              Are you ready for
              <br />
              <span className="text-white">this room?</span>
            </h2>
            <p className="font-light text-white/80 max-w-xl mb-10 leading-relaxed">
              Applications for NIA Guntur are reviewed personally. Seats are limited by design. The right room is waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apply" className="nia-btn">
                Apply for Membership <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="nia-btn-outline text-white">
                Contact Us First
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
