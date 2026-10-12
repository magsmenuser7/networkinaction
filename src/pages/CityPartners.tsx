import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useSEO } from '../hooks/useSEO';
import sandeepcropedpic from "/sandeepsircroppedimage.jpg"
import vinodcroppedpic from "/vinodsircroppedpic.png"
const partners = [
  {
    name: 'Sandeep N',
    role: 'City Partner — Strategy, Brand & Growth Systems',
    tagline: 'The architect of visibility.',
    desc: "India's rare Legal-Blended Brand Architect. Founder of Magsmen and InTalks — a 1.5 lakh+ Telugu business community with 200M+ views. TedX speaker, lawyer, image consultant, and thought leader who works with founders, celebrities, and business leaders to build brands that are defensible and sustainable.",
    stats: [
      { value: '100+', label: 'Brands' },
      { value: '1.5L+', label: 'Community' },
      { value: 'TedX', label: 'Speaker' },
    ],
    image: sandeepcropedpic,
    path: '/city-partners/sandeep-n',
    ventures: ['Magsmen', 'InTalks'],
  },
  {
    name: 'Vinod Reddy T',
    role: 'City Partner — Execution, Infrastructure & Market Expansion',
    tagline: 'The engine behind growth.',
    desc: 'Forward-thinking entrepreneur who blends innovation with disciplined execution. IBM alumni with advanced education in Australia. Founder of Raaga Infra (35+ projects), Snakes & Ladders, and Wisecap Innovations. Joint Secretary of CREDAI Andhra Pradesh — shaping the industry across the state.',
    stats: [
      { value: '35+', label: 'Projects' },
      { value: 'Jt. Sec.', label: 'CREDAI AP' },
      { value: '4+', label: 'Ventures' },
    ],
    image: vinodcroppedpic,
    path: '/city-partners/vinod-t',
    ventures: ['Raaga Infra', 'CREDAI AP'],
  },
];

const poweredBy = [
  { name: 'ActionCOACH', desc: "World's number one business coaching franchise" },
  { name: 'MarsVenus Coaching', desc: 'Relationship and communication excellence' },
  { name: 'Brian Tracy Solutions', desc: 'Personal and professional development' },
  { name: 'SalesGeek', desc: 'Sales excellence and revenue systems' },
];

export default function CityPartners() {
  useSEO({
    title: 'City Partners — NIA Guntur',
    description: "Meet the NIA Guntur City Partners — Sandeep N and Vinod Reddy T. Two leaders building Guntur's premier business ecosystem.",
    keywords: 'NIA Guntur City Partners, Sandeep N, Vinod Reddy T, NIA Guntur Leadership',
  });

  return (
    <div className="min-h-screen bg-nia-ivory text-nia-black">
      <section className="nia-hero">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=1')" }}
          aria-hidden="true"
        />
        <div className="nia-shell relative grid items-center gap-10 pt-36 pb-20 md:grid-cols-[1.2fr_.8fr] md:pt-40 md:pb-28">
          <AnimatedSection>
            <p className="nia-eyebrow-light mb-6">City Partners</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-[-0.05em] leading-[1.05] max-w-3xl">
              Two leaders.
              <br />
              <span className="text-nia-peach">One mission.</span>
            </h1>
            <p className="mt-7 max-w-2xl font-light leading-relaxed text-white/85">
              The NIA Guntur chapter is led by two of Andhra Pradesh's most respected entrepreneurs — each bringing a distinct domain of expertise to build the city's most powerful business room.
            </p>
          </AnimatedSection>
          <div className="relative hidden min-h-80 items-center justify-center md:flex" aria-hidden="true">
            <div className="absolute h-72 w-72 rounded-full border border-white/20" />
            <div className="absolute h-56 w-56 rounded-full border border-white/30" />
            <div className="absolute h-40 w-40 rounded-full border border-nia-orange/60" />
            <span className="text-7xl font-bold tracking-[-0.09em] text-white/90">
              NIA<span className="text-nia-orange">.</span>
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="nia-shell space-y-12 md:space-y-16">
          {partners.map((partner, i) => (
            <AnimatedSection key={partner.name} delay={i * 0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-2xl border border-nia-border bg-white">
                <div className={`relative min-h-[420px] lg:min-h-[540px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={partner.image}
                    alt={`${partner.name} — ${partner.role}`}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nia-navy/90 via-nia-navy/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="grid grid-cols-3 divide-x divide-white/20">
                      {partner.stats.map((stat) => (
                        <div key={stat.label} className="px-3 text-center">
                          <div className="text-xl md:text-2xl font-bold tracking-[-0.04em] text-white mb-1">{stat.value}</div>
                          <p className="text-xs font-light text-white/75">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`p-8 md:p-12 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <p className="nia-eyebrow mb-4">City partner</p>
                  <h2 className="nia-title text-3xl md:text-4xl mb-3">{partner.name}</h2>
                  <p className="text-lg font-semibold text-nia-orange mb-2">{partner.tagline}</p>
                  <p className="text-sm font-light text-nia-gray mb-6">{partner.role}</p>
                  <p className="font-light text-nia-gray leading-relaxed border-l-2 border-nia-orange pl-6 mb-8">{partner.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {partner.ventures.map((v) => (
                      <span key={v} className="rounded-full border border-nia-border bg-nia-ivory px-4 py-1.5 text-xs font-semibold text-nia-rust">
                        {v}
                      </span>
                    ))}
                  </div>
                  <Link to={partner.path} className="nia-btn self-start">
                    Full Profile <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="nia-shell">
          <AnimatedSection className="mb-10">
            <p className="nia-eyebrow mb-3">Powered by</p>
            <h2 className="nia-title text-2xl md:text-3xl">
              World-class expertise.
              <br />In this room.
            </h2>
          </AnimatedSection>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {poweredBy.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.08} className="border-t-2 border-nia-orange pt-5">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="mt-3 text-sm font-light leading-7 text-nia-gray">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-nia-navy py-20 md:py-24 text-white">
        <AnimatedSection className="nia-shell text-center">
          <p className="nia-eyebrow-light mb-4">Join the room</p>
          <h2 className="nia-title text-3xl md:text-4xl mb-6">
            Ready to be in the room
            <br />with people like these?
          </h2>
          <p className="font-light text-white/80 max-w-md mx-auto mb-10 leading-relaxed">
            Applications for Guntur are open. Every application is reviewed personally.
          </p>
          <Link to="/apply" className="nia-btn">
            Apply for Membership <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
