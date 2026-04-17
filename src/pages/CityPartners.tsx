import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useSEO } from '../hooks/useSEO';
import sandeepcropedpic from "../../public/sandeepsircroppedimage.jpg"
import vinodcroppedpic from "../../public/vinodsircroppedpic.png"
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
    <div className="min-h-screen bg-nia-ivory">
      <section className="relative min-h-[60vh] flex items-end pb-20 pt-32 px-6 lg:px-16 overflow-hidden border-b border-nia-border">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=1')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <AnimatedSection>
            <p className="text-xs font-light tracking-[0.5em] uppercase text-[#f07723] mb-6">
              City Partners
            </p>
            <h1 className="font-montserrat text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight max-w-4xl">
              Two leaders.
              <br />
              <span className="text-white">One mission.</span>
            </h1>
            <p className="text-base font-light text-white/60 max-w-2xl leading-relaxed-custom">
              The NIA Guntur chapter is led by two of Andhra Pradesh's most respected entrepreneurs — each bringing a distinct domain of expertise to build the city's most powerful business room.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="space-y-24">
            {partners.map((partner, i) => (
              <AnimatedSection key={partner.name} delay={i * 0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 border border-nia-border rounded-2xl overflow-hidden`}>
                  <div
                    className={`relative h-[400px] lg:h-auto min-h-[500px] bg-cover bg-no-repeat bg-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}
                    style={{ backgroundImage: `url('${partner.image}')` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="grid grid-cols-3 divide-x divide-white/20">
                        {partner.stats.map((stat) => (
                          <div key={stat.label} className="px-4 first:pl-0 last:pr-0 text-center">
                            <div className="font-montserrat text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <p className="text-xs font-light text-white/60">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`p-10 lg:p-14 flex flex-col justify-center bg-nia-ivory ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <p className="text-xs font-light tracking-[0.4em] uppercase text-[#0e1c40] mb-4">City Partner</p>
                    <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-nia-black mb-3 leading-tight">
                      {partner.name}
                    </h2>
                    <p className="text-sm font-light text-nia-muted tracking-widest uppercase mb-4">
                      {partner.tagline}
                    </p>
                    <p className="text-xs font-light text-[#0e1c40] tracking-wide mb-6">{partner.role}</p>
                    <p className="text-base font-light text-nia-gray leading-relaxed-custom mb-8">{partner.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {partner.ventures.map((v) => (
                        <span key={v} className="text-xs px-3 py-1.5 border border-[#0e1c40]/40 text-[#0e1c40] font-light">
                          {v}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={partner.path}
                      className="inline-flex items-center gap-2 h-12 px-8 font-semibold text-xs tracking-widest uppercase bg-nia-black text-white hover:bg-nia-orange hover:shadow-[0_0_24px_rgba(232,119,34,0.25)] transition-all duration-300 self-start"
                    >
                      Full Profile <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-16 bg-nia-darker border-y border-nia-border">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection className="mb-16">
            <p className="text-xs font-light tracking-[0.4em] uppercase text-[#0e1c40] mb-4">Powered By</p>
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-nia-black leading-tight">
              World-class expertise.
              <br />In this room.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-nia-border">
            {poweredBy.map((item, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.08}
                className="bg-nia-darker border border-nia-border rounded-xl p-8 hover:bg-nia-ivory hover:border-[#0e1c40]/40 hover:shadow-editorial transition-all duration-300"
              >
                <h3 className="font-montserrat text-xl font-bold text-[#f07723] mb-4">{item.name}</h3>
                <p className="text-sm font-light text-nia-gray leading-relaxed-custom">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-16 bg-nia-black">
        <div className="max-w-[800px] mx-auto text-center">
          <AnimatedSection>
            <p className="text-xs font-light tracking-[0.5em] uppercase text-[#f07723] mb-6">Join the Room</p>
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to be in the room
              <br />with people like these?
            </h2>
            <p className="text-base font-light text-[#666666] max-w-md mx-auto mb-10 leading-relaxed-custom">
              Applications for Guntur are open. Every application is reviewed personally.
            </p>
            <Link
              to="/apply"
              className="h-14 px-10 font-semibold text-sm tracking-widest uppercase bg-nia-orange text-white hover:bg-nia-orange/90 hover:shadow-[0_0_40px_rgba(232,119,34,0.3)] transition-all duration-300 inline-flex items-center gap-2"
            >
              Apply for Membership <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
