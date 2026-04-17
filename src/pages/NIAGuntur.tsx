import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { useSEO } from '../hooks/useSEO';
import group4 from "../../public/stagepeople2.jpeg"

const whatWeDo = [
  {
    word: 'MEET',
    desc: 'One mandatory in-person monthly meeting at a fixed venue and time. Presence is not optional.',
  },
  {
    word: 'NETWORK',
    desc: 'Curated meeting structures that create result-oriented avenues to connect with members who matter.',
  },
  {
    word: 'ACTION',
    desc: 'Technology and proven meeting styles keep members engaged, involved, and in action all the time.',
  },
  {
    word: 'OPPORTUNITIES',
    desc: 'State, national, and international meetings plus world-class trainings to grow professionally and personally.',
  },
];

const differentiators = [
  { title: 'Curated Membership', desc: 'Not everyone gets in. Quality is the filter, not quantity.' },
  { title: 'Structured Interactions', desc: 'No randomness. Every conversation has a purpose.' },
  { title: 'Accountability Culture', desc: "Visibility creates action. You're seen, which means you deliver." },
  { title: 'Business-First Thinking', desc: 'Outcomes over optics. ROI is the measure that matters.' },
];

const meetingTypes = [
  { num: '01', label: 'Local Group', mode: 'In-Person', freq: '1 per month', desc: 'Mandatory structured monthly meeting' },
  { num: '02', label: 'Inter-City', mode: 'Virtual', freq: 'Once in 2 months', desc: 'Cross-chapter connections and collaborations' },
  { num: '03', label: 'Local Group Level', mode: 'Virtual', freq: '1–2 per month', desc: 'Focused sessions and member spotlights' },
  { num: '04', label: 'National / International', mode: 'Virtual', freq: 'Once in 2–3 months', desc: 'Global NIA network access and training' },
];

export default function NIAGuntur() {
  useSEO({
    title: 'About NIA Guntur',
    description: 'Network In Action Guntur is a curated, invite-only business community for serious entrepreneurs. Learn about our structured approach to measurable business growth.',
    keywords: 'About NIA Guntur, Network In Action Guntur, Business Community Guntur, Curated Networking Andhra Pradesh',
  });

  return (
    <div className="min-h-screen bg-nia-ivory">
      <section className="min-h-[60vh] flex flex-col justify-end px-6 lg:px-12 pb-20 pt-32 border-b border-nia-border">
        <div className="max-w-[1280px] mx-auto w-full">
          <AnimatedSection>
            <p className="text-xs font-light tracking-[0.4em] uppercase text-[#f07723] mb-6">
              About NIA Guntur
            </p>
            <h1 className="font-montserrat text-3xl md:text-6xl lg:text-5xl font-bold text-nia-black mb-8 leading-tight">
              Not another business group.
              <br />
              <span className="text-black">A strategic growth ecosystem.</span>
            </h1>
            <p className="text-base font-light text-nia-gray max-w-2xl leading-relaxed-custom">
              Guntur doesn't need more networking events. It needs a room where serious people meet with intent. Network In Action Guntur is curated, invite-only, and built for one purpose: measurable business growth through engineered relationships.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs font-light tracking-[0.3em] uppercase text-[#f07723] mb-8">
                  Why NIA Guntur Exists
                </p>
                <h2 className="font-montserrat text-3xl md:text-5xl font-bold text-nia-black mb-8 leading-tight">
                  The ecosystem is
                  <br />
                  fragmented.
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-base font-light text-nia-gray leading-relaxed-custom">
                  Guntur sits at a strategic intersection. Emerging capital corridor. Expanding industries. Rising entrepreneurial ambition.
                </p>
                <p className="text-base font-light text-nia-gray leading-relaxed-custom">
                  But here's the problem no one says out loud: people are growing, but not together. Opportunities exist, but are not connected.
                </p>
                <p className="text-base font-light text-nia-gray leading-relaxed-custom">
                  NIA Guntur is built to fix that. Conversations are intentional. Referrals are meaningful. Collaborations are real. Growth is measurable.
                </p>
                <p className="text-sm font-light text-nia-muted leading-relaxed-custom border-l-2 border-[#f07723] pl-5">
                  This is not scale for the sake of scale. This is precision networking.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12 bg-nia-darker border-y border-nia-border">
        <div className="max-w-[1280px] mx-auto">
          <AnimatedSection>
            <p className="text-xs font-light tracking-[0.3em] uppercase text-[#f07723] mb-8">
              What We Do
            </p>
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-nia-black mb-16 leading-tight">
              Four pillars.
              <br />
              One purpose.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-nia-border">
            {whatWeDo.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="bg-nia-darker p-8 hover:bg-nia-dark transition-colors duration-300">
                <h3 className="font-montserrat text-2xl font-bold text-[#f07723] mb-5">
                  {item.word}
                </h3>
                <p className="text-sm font-light text-nia-gray leading-relaxed-custom">
                  {item.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <AnimatedSection>
            <p className="text-xs font-light tracking-[0.3em] uppercase text-[#f07723] mb-8">
              What Makes NIA Different
            </p>
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-nia-black mb-16 leading-tight">
              Most communities fail because they
              <br />
              optimise for numbers.
            </h2>
          </AnimatedSection>
          <div className="space-y-0">
            {differentiators.map((item, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.08}
                className="flex flex-col md:flex-row md:items-center gap-6 py-8 border-b border-nia-border"
              >
                <div className="text-5xl font-extrabold text-nia-border leading-none w-16 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-nia-black mb-2">{item.title}</h3>
                  <p className="text-sm font-light text-nia-gray leading-relaxed-custom">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12 bg-nia-darker border-y border-nia-border">
        <div className="max-w-[1280px] mx-auto">
          <AnimatedSection>
            <p className="text-xs font-light tracking-[0.3em] uppercase text-[#f07723] mb-8">
              Meeting Structure
            </p>
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-nia-black mb-6 leading-tight">
              Structure is the product.
            </h2>
            <p className="text-base font-light text-nia-gray max-w-2xl mb-16 leading-relaxed-custom">
              One mandatory in-person monthly meeting. Plus optional online and in-person meets designed for depth. All structured, all purposeful.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-nia-border">
            {meetingTypes.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.08} className="bg-nia-darker p-8">
                <div className="text-4xl font-extrabold text-nia-border mb-6 leading-none">
                  {item.num}
                </div>
                <h3 className="text-lg font-semibold text-nia-black mb-1">{item.label}</h3>
                <p className="text-xs tracking-widest uppercase text-[#f07723] mb-4">{item.mode} · {item.freq}</p>
                <p className="text-sm font-light text-nia-gray leading-relaxed-custom">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-xs font-light tracking-[0.3em] uppercase text-[#f07723] mb-8">
                The Story of NIA
              </p>
              <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-nia-black mb-8 leading-tight">
                Founded 2015.
                <br />
                Now in 10 countries.
              </h2>
              <p className="text-base font-light text-nia-gray leading-relaxed-custom mb-6">
                Network In Action was founded in Houston, Texas in 2015 by serial entrepreneur Scott Talley. It began franchising in 2016, addressing the gaps in existing networking organizations.
              </p>
              <p className="text-base font-light text-nia-gray leading-relaxed-custom mb-6">
                NIA's primary style revolves around real people, real results, and real relationships. A professional system backed by technology, monthly meetings, and measurable impact — where every member gets guaranteed ROI.
              </p>
              <p className="text-sm font-light text-nia-muted leading-relaxed-custom">
                Now active across USA, Canada, UAE, India, Sri Lanka, Latvia, Lithuania, Guyana, Suriname, and Malaysia.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="border border-nia-border rounded-xl p-8 space-y-6">
                <p className="text-xs tracking-ultra-wide uppercase text-nia-muted mb-2">India Presence</p>
                <div className="flex flex-wrap gap-2">
                  {['Guntur', 'Hyderabad', 'Vizag', 'Bengaluru', 'Coimbatore', 'Nagpur', 'Delhi NCR', 'Noida', 'Chandigarh', 'Bhopal', 'Rajkot', 'Surat', 'Vadodara', 'Indore', 'Kolkata', 'Guwahati', 'Imphal'].map((city) => (
                    <span
                      key={city}
                      className={`text-xs font-light px-3 py-1.5 border ${city === 'Guntur' ? 'border-[#f07723] text-[#f07723]' : 'border-nia-border text-nia-muted'}`}
                    >
                      {city}
                    </span>
                  ))}
                </div>
                <p className="text-xs font-light text-nia-muted pt-2">And we keep growing...</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-nia-darker border-t border-nia-border">
        <div className="max-w-[1280px] mx-auto text-center">
          <AnimatedSection>
            <p className="text-xs font-light tracking-[0.4em] uppercase text-[#f07723] mb-6">
              Our Vision
            </p>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-nia-black mb-6 max-w-3xl mx-auto leading-tight">
              To build a dynamic ecosystem where individuals and organizations converge to foster collaboration, fuel growth and positively impact 1 million+ lives.
            </h2>
            <div className="mt-12">
              <Link
                to="/apply"
                className="h-[52px] px-10 font-semibold text-sm tracking-[0.2em] uppercase bg-nia-orange text-nia-white border border-nia-orange hover:bg-nia-orange/90 hover:shadow-[0_0_32px_rgba(232,119,34,0.3)] transition-all duration-300 inline-flex items-center justify-center"
              >
                Request Access
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
