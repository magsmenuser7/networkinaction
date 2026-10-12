import { Link } from 'react-router-dom';
import { Target, Globe, Users, Lightbulb, Award, TrendingUp, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useSEO } from '../hooks/useSEO';
import group4 from "/sandeep.jpeg"
import group5 from "/stagepeople2.jpeg"

const pillars = [
  { icon: Target, title: 'Purposeful Community', desc: 'Every member is handpicked. Every meeting is structured. No noise. Only signal.' },
  { icon: TrendingUp, title: 'Measurable Growth', desc: 'Revenue tracking, referral accountability, and business coaching baked into every meeting format.' },
  { icon: Globe, title: 'Global Network', desc: 'Access to 10 countries and 20+ Indian cities through the NIA global ecosystem — from Guntur.' },
  { icon: Users, title: 'Leadership Training', desc: 'Members become better leaders through NIA University, Brian Tracy, ActionCOACH, and MarsVenus frameworks.' },
  { icon: Lightbulb, title: 'Innovation Culture', desc: "Guntur's business community is being built to be forward-thinking — aligned with Amaravathi's rise as a capital city." },
  { icon: Award, title: '1 Million Lives Mission', desc: "NIA's global mission to positively impact 1 million lives through better business, better leaders, and better communities." },
];

const initiatives = [
  { name: 'Business Square', desc: 'A curated marketplace for NIA members to do business with each other first — built on trust, not cold pitching.' },
  { name: 'ABFY', desc: "NIA's youth entrepreneurship wing — planting the seed of business thinking in Guntur's next generation." },
  { name: 'Executive Club', desc: 'A premium inner circle for CXO-level members seeking peer advisory, not just networking.' },
  { name: 'Bordruum', desc: 'A confidential advisory setting where founders bring their biggest challenges to a board of experienced peers.' },
  { name: 'Lighthouse', desc: 'Mentorship infrastructure connecting experienced NIA members with early-stage entrepreneurs across Guntur.' },
  { name: 'TYA Club', desc: "Targeting Young Achievers — an exclusive track for Guntur's most ambitious entrepreneurs under 35." },
];

const indianCities = [
  'Hyderabad', 'Bangalore', 'Chennai', 'Mumbai', 'Delhi', 'Pune', 'Kolkata',
  'Ahmedabad', 'Jaipur', 'Kochi', 'Coimbatore', 'Vizag', 'Vijayawada',
  'Indore', 'Surat', 'Nagpur', 'Bhopal', 'Chandigarh', 'Lucknow', 'Guntur',
];

export default function Vision() {
  useSEO({
    title: 'NIA Guntur Vision',
    description: 'The NIA Guntur Vision: building the most powerful and structured business community in Andhra Pradesh, aligned with the rise of Amaravathi.',
    keywords: 'NIA Guntur Vision, Network In Action Vision, Guntur Business Community, Amaravathi Business Ecosystem',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=1',
  });

  return (
    <div className="min-h-screen bg-nia-ivory text-nia-black">
      {/* Hero */}
      <section className="nia-hero">
        <div className="nia-shell relative grid items-center gap-10 pt-36 pb-20 md:grid-cols-[1.1fr_.9fr] md:pt-40 md:pb-28">
          <AnimatedSection>
            <p className="nia-eyebrow-light mb-6">NIA Guntur vision</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.05em] leading-[1.05] max-w-4xl">
              Building Guntur's
              <br />
              <span className="text-nia-peach">Business Future.</span>
            </h1>
            <p className="mt-7 max-w-2xl font-light leading-relaxed text-white/85">
              With Amaravathi rising and Guntur positioned at the center of one of India's most exciting development stories, NIA Guntur is building the infrastructure for serious business growth — today.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <img
              src={group5}
              alt="NIA Guntur members on stage"
              className="w-full aspect-[4/3] rounded-2xl object-cover border border-white/15 shadow-[0_24px_60px_#00000040]"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-nia-border">
        <div className="nia-shell grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-nia-border">
          {[
            { value: '1M+', label: 'Lives to Impact' },
            { value: '20+', label: 'Indian Cities' },
            { value: '10', label: 'Countries' },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-10 text-center">
              <div className="text-4xl md:text-5xl font-bold tracking-[-0.05em] text-nia-navy">{stat.value}</div>
              <p className="nia-eyebrow mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Guntur */}
      <section className="py-20 md:py-24">
        <div className="nia-shell grid gap-12 lg:grid-cols-2 items-center">
          <AnimatedSection>
            <p className="nia-eyebrow mb-3">Why Guntur. Why now.</p>
            <h2 className="nia-title text-2xl md:text-3xl mb-6">
              The capital city is rising.
            </h2>
            <div className="border-l-2 border-nia-orange pl-6 md:pl-9 space-y-5 font-light leading-relaxed text-nia-gray">
              <p>
                Amaravathi is set to become the capital of Andhra Pradesh — and Guntur is at the epicenter of that transformation. Land values are rising. Infrastructure is accelerating. Global attention is turning here.
              </p>
              <p>
                The entrepreneurs who build their networks now — before the wave crests — will be the ones who define the city's next chapter. NIA Guntur exists for exactly that reason.
              </p>
              <p className="font-semibold text-nia-black">
                This is not about riding the wave. It is about being the wave.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div
              role="img"
              aria-label="NIA Guntur"
              className="w-full aspect-[4/5] rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url('${group4}')` }}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Six pillars */}
      <section className="bg-white py-20 md:py-24">
        <div className="nia-shell">
          <AnimatedSection className="mb-10">
            <p className="nia-eyebrow mb-3">Six pillars</p>
            <h2 className="nia-title text-2xl md:text-3xl max-w-2xl">What NIA Guntur is built on.</h2>
          </AnimatedSection>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.08} className="nia-card group p-7">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-nia-orange/10 transition-colors duration-300 group-hover:bg-nia-orange">
                    <Icon size={18} className="text-nia-rust transition-colors duration-300 group-hover:text-nia-black" />
                  </div>
                  <h3 className="text-lg font-bold">{pillar.title}</h3>
                  <p className="mt-3 text-sm font-light leading-7 text-nia-gray">{pillar.desc}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 md:py-24">
        <div className="nia-shell">
          <AnimatedSection className="mb-10">
            <p className="nia-eyebrow mb-3">NIA initiatives</p>
            <h2 className="nia-title text-2xl md:text-3xl max-w-2xl">Programs that accelerate members.</h2>
          </AnimatedSection>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {initiatives.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.07} className="border-t-2 border-nia-orange pt-5">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="mt-3 text-sm font-light leading-7 text-nia-gray">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Across India */}
      <section className="bg-white py-20 md:py-24">
        <div className="nia-shell">
          <AnimatedSection className="mb-10">
            <p className="nia-eyebrow mb-3">NIA across India</p>
            <h2 className="nia-title text-2xl md:text-3xl max-w-2xl">20+ cities. One network.</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="flex flex-wrap gap-2.5">
              {indianCities.map((city) => (
                <span
                  key={city}
                  className={`rounded-full border px-4 py-2 text-xs ${
                    city === 'Guntur'
                      ? 'border-nia-orange bg-nia-orange/10 font-semibold text-nia-rust'
                      : 'border-nia-border font-light text-nia-gray transition-colors hover:border-nia-orange/60'
                  }`}
                >
                  {city}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-nia-navy py-20 text-white md:py-24">
        <AnimatedSection className="nia-shell text-center">
          <p className="nia-eyebrow-light mb-4">Be part of the vision</p>
          <h2 className="nia-title text-2xl md:text-3xl">
            This is a movement,
            <br />
            not a membership.
          </h2>
          <p className="mx-auto mt-6 mb-10 max-w-md font-light leading-relaxed text-white/80">
            Join the entrepreneurs who are building Guntur's future together — with structure, accountability, and real relationships.
          </p>
          <Link to="/apply" className="nia-btn">
            Apply for Membership <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
