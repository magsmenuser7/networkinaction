import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { useSEO } from '../hooks/useSEO';

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
    <div className="min-h-screen bg-nia-ivory text-nia-black">
      {/* Hero */}
      <section className="nia-hero">
        <div className="nia-shell relative grid items-center gap-10 pt-36 pb-20 md:grid-cols-[1.2fr_.8fr] md:pt-40 md:pb-28">
          <AnimatedSection>
            <p className="nia-eyebrow-light mb-6">About NIA Guntur</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] leading-[1.07] max-w-[770px]">
              Not another business group.
              <br />
              <span className="text-nia-peach">A strategic growth ecosystem.</span>
            </h1>
            <p className="mt-7 max-w-2xl font-light leading-relaxed text-white/85">
              Guntur doesn't need more networking events. It needs a room where serious people meet with intent. Network In Action Guntur is curated, invite-only, and built for one purpose: measurable business growth through engineered relationships.
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

      {/* Why NIA Guntur exists */}
      <section className="py-20 md:py-24">
        <AnimatedSection className="nia-shell grid gap-8 md:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="nia-eyebrow mb-4">Why NIA Guntur exists</p>
            <h2 className="nia-title text-2xl md:text-3xl">
              The ecosystem is
              <br />
              fragmented.
            </h2>
          </div>
          <div className="border-l-2 border-nia-orange pl-6 md:pl-9 space-y-5 max-w-2xl font-light leading-relaxed text-nia-gray">
            <p>
              Guntur sits at a strategic intersection. Emerging capital corridor. Expanding industries. Rising entrepreneurial ambition.
            </p>
            <p>
              But here's the problem no one says out loud: people are growing, but not together. Opportunities exist, but are not connected.
            </p>
            <p>
              NIA Guntur is built to fix that. Conversations are intentional. Referrals are meaningful. Collaborations are real. Growth is measurable.
            </p>
            <p className="font-semibold text-nia-black">
              This is not scale for the sake of scale. This is precision networking.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* What we do */}
      <section className="bg-white py-20 md:py-24">
        <div className="nia-shell">
          <AnimatedSection className="mb-10">
            <p className="nia-eyebrow mb-3">What we do</p>
            <h2 className="nia-title text-2xl md:text-3xl">
              Four pillars.
              <br />
              One purpose.
            </h2>
          </AnimatedSection>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeDo.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="border-t-2 border-nia-orange pt-5">
                <h3 className="text-lg font-bold">{item.word}</h3>
                <p className="mt-3 text-sm font-light leading-7 text-nia-gray">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What makes NIA different */}
      <section className="py-20 md:py-24">
        <div className="nia-shell">
          <AnimatedSection className="mb-10">
            <p className="nia-eyebrow mb-3">What makes NIA different</p>
            <h2 className="nia-title text-2xl md:text-3xl max-w-2xl">
              Most communities fail because they
              <br className="hidden md:block" /> optimise for numbers.
            </h2>
          </AnimatedSection>
          <div className="grid gap-4 md:grid-cols-2">
            {differentiators.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.08} className="nia-card flex gap-5 p-7">
                <span className="text-3xl font-bold tracking-[-0.04em] text-nia-orange leading-none shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm font-light leading-7 text-nia-gray">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting structure */}
      <section className="bg-white py-20 md:py-24">
        <div className="nia-shell">
          <AnimatedSection className="mb-10">
            <p className="nia-eyebrow mb-3">Meeting structure</p>
            <h2 className="nia-title text-2xl md:text-3xl mb-4">Structure is the product.</h2>
            <p className="max-w-2xl font-light leading-relaxed text-nia-gray">
              One mandatory in-person monthly meeting. Plus optional online and in-person meets designed for depth. All structured, all purposeful.
            </p>
          </AnimatedSection>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {meetingTypes.map((item, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.08}
                className="rounded-2xl border border-nia-border bg-nia-ivory p-7"
              >
                <span className="text-3xl font-bold tracking-[-0.04em] text-nia-orange leading-none">{item.num}</span>
                <h3 className="mt-6 text-lg font-bold">{item.label}</h3>
                <p className="nia-eyebrow mt-2">{item.mode} · {item.freq}</p>
                <p className="mt-4 text-sm font-light leading-7 text-nia-gray">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* The story of NIA */}
      <section className="py-20 md:py-24">
        <div className="nia-shell grid gap-12 lg:grid-cols-2 items-center">
          <AnimatedSection>
            <p className="nia-eyebrow mb-3">The story of NIA</p>
            <h2 className="nia-title text-2xl md:text-3xl mb-6">
              Founded 2015.
              <br />
              Now in 10 countries.
            </h2>
            <div className="space-y-5 font-light leading-relaxed text-nia-gray">
              <p>
                Network In Action was founded in Houston, Texas in 2015 by serial entrepreneur Scott Talley. It began franchising in 2016, addressing the gaps in existing networking organizations.
              </p>
              <p>
                NIA's primary style revolves around real people, real results, and real relationships. A professional system backed by technology, monthly meetings, and measurable impact — where every member gets guaranteed ROI.
              </p>
              <p className="border-l-2 border-nia-orange pl-5 text-sm">
                Now active across USA, Canada, UAE, India, Sri Lanka, Latvia, Lithuania, Guyana, Suriname, and Malaysia.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl border border-nia-border bg-white p-7 md:p-8">
              <p className="nia-eyebrow mb-5">India presence</p>
              <div className="flex flex-wrap gap-2">
                {['Guntur', 'Hyderabad', 'Vizag', 'Bengaluru', 'Coimbatore', 'Nagpur', 'Delhi NCR', 'Noida', 'Chandigarh', 'Bhopal', 'Rajkot', 'Surat', 'Vadodara', 'Indore', 'Kolkata', 'Guwahati', 'Imphal'].map((city) => (
                  <span
                    key={city}
                    className={`rounded-full border px-3.5 py-1.5 text-xs ${city === 'Guntur' ? 'border-nia-orange bg-nia-orange/10 font-semibold text-nia-rust' : 'border-nia-border font-light text-nia-gray'}`}
                  >
                    {city}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm font-light text-nia-gray">And we keep growing...</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision CTA */}
      <section className="bg-nia-navy py-20 text-white md:py-24">
        <AnimatedSection className="nia-shell text-center">
          <p className="nia-eyebrow-light mb-4">Our vision</p>
          <h2 className="nia-title text-2xl md:text-3xl max-w-3xl mx-auto">
            To build a dynamic ecosystem where individuals and organizations converge to foster collaboration, fuel growth and positively impact 1 million+ lives.
          </h2>
          <div className="mt-10">
            <Link to="/apply" className="nia-btn">
              Request Access
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
