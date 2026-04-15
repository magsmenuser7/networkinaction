import { Link } from 'react-router-dom';
import { Target, Globe, Users, Lightbulb, Award, TrendingUp, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useSEO } from '../hooks/useSEO';

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
    <div className="min-h-screen bg-nia-ivory">
      <section className="relative min-h-[70vh] flex items-end pb-24 px-6 lg:px-16 overflow-hidden border-b border-nia-border">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=900&dpr=1')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <AnimatedSection>
            <p className="text-xs font-light tracking-[0.5em] uppercase text-nia-gold mb-6">
              NIA Guntur Vision
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight max-w-4xl">
              Building Guntur's
              <br />
              <span className="text-nia-gold">Business Future.</span>
            </h1>
            <p className="text-base font-light text-white/60 max-w-2xl leading-relaxed-custom">
              With Amaravathi rising and Guntur positioned at the center of one of India's most exciting development stories, NIA Guntur is building the infrastructure for serious business growth — today.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-nia-black py-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1e1e1e]">
            {[
              { value: '1M+', label: 'Lives to Impact' },
              { value: '20+', label: 'Indian Cities' },
              { value: '10', label: 'Countries' },
            ].map((stat) => (
              <div key={stat.label} className="px-12 py-8 text-center">
                <div className="font-playfair text-4xl font-bold text-nia-gold mb-2">{stat.value}</div>
                <p className="text-xs font-light text-[#555555] tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <p className="text-xs font-light tracking-[0.4em] uppercase text-nia-gold mb-6">Why Guntur. Why Now.</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-nia-black mb-8 leading-tight">
                The capital city
                is rising.
              </h2>
              <div className="space-y-6 text-base font-light text-nia-gray leading-relaxed-custom">
                <p>
                  Amaravathi is set to become the capital of Andhra Pradesh — and Guntur is at the epicenter of that transformation. Land values are rising. Infrastructure is accelerating. Global attention is turning here.
                </p>
                <p>
                  The entrepreneurs who build their networks now — before the wave crests — will be the ones who define the city's next chapter. NIA Guntur exists for exactly that reason.
                </p>
                <p>
                  This is not about riding the wave. It is about being the wave.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div
                className="w-full aspect-[4/5] bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=1')" }}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-16 bg-nia-darker border-y border-nia-border">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection className="mb-16">
            <p className="text-xs font-light tracking-[0.4em] uppercase text-nia-gold mb-4">
              Six Pillars
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-nia-black leading-tight max-w-2xl">
              What NIA Guntur
              is built on.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-nia-border">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <AnimatedSection
                  key={index}
                  delay={index * 0.08}
                  className="bg-nia-darker border border-nia-border rounded-xl p-8 hover:bg-nia-ivory hover:border-nia-gold/40 hover:shadow-editorial transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-nia-gold/10 border border-nia-gold/20 flex items-center justify-center mb-6 group-hover:bg-nia-gold group-hover:border-nia-gold transition-all duration-300">
                    <Icon size={16} className="text-nia-gold group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-nia-black mb-3">{pillar.title}</h3>
                  <p className="text-sm font-light text-nia-gray leading-relaxed-custom">{pillar.desc}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection className="mb-16">
            <p className="text-xs font-light tracking-[0.4em] uppercase text-nia-gold mb-4">
              NIA Initiatives
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-nia-black leading-tight max-w-2xl">
              Programs that
              accelerate members.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-nia-border">
            {initiatives.map((item, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.07}
                className="p-8 border border-nia-border rounded-xl hover:border-nia-gold/40 hover:shadow-editorial transition-all duration-300 bg-nia-ivory"
              >
                <h3 className="font-playfair text-xl font-bold text-nia-gold mb-3">{item.name}</h3>
                <p className="text-sm font-light text-nia-gray leading-relaxed-custom">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-16 bg-nia-darker border-y border-nia-border">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection className="mb-12">
            <p className="text-xs font-light tracking-[0.4em] uppercase text-nia-gold mb-4">
              NIA Across India
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-nia-black leading-tight max-w-2xl">
              20+ cities.
              One network.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="flex flex-wrap gap-3">
              {indianCities.map((city) => (
                <span
                  key={city}
                  className={`text-xs px-4 py-2 border font-light tracking-wide ${
                    city === 'Guntur'
                      ? 'border-nia-gold text-nia-gold bg-nia-gold/5'
                      : 'border-nia-border text-nia-gray hover:border-nia-gold/40 transition-colors'
                  }`}
                >
                  {city}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-16 bg-nia-black">
        <div className="max-w-[800px] mx-auto text-center">
          <AnimatedSection>
            <p className="text-xs font-light tracking-[0.5em] uppercase text-nia-gold mb-6">
              Be Part of the Vision
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              This is a movement,
              <br />
              not a membership.
            </h2>
            <p className="text-base font-light text-[#666666] max-w-md mx-auto mb-10 leading-relaxed-custom">
              Join the entrepreneurs who are building Guntur's future together — with structure, accountability, and real relationships.
            </p>
            <Link
              to="/apply"
              className="h-14 px-10 font-semibold text-sm tracking-[0.2em] uppercase bg-nia-orange text-white hover:bg-nia-orange/90 hover:shadow-[0_0_40px_rgba(232,119,34,0.3)] transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Apply for Membership <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
