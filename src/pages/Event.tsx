import { useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { MapPin } from 'lucide-react';

const nextEventDate = new Date('2025-07-03T18:00:00').getTime();

const agenda = [
  {
    time: '6:00 PM',
    activity: 'Registration & Networking',
    description: 'Arrive. Meet fellow business owners. Build first connections.',
    presenter: '',
  },
  {
    time: '6:30 PM',
    activity: 'Welcome & Introduction',
    description: 'What NIA is, why it matters, and why now.',
    presenter: 'Sandeep N & Vinod Reddy T',
  },
  {
    time: '7:00 PM',
    activity: 'Panel Discussion',
    description: 'Four business archetypes. One conversation on growth.',
    presenter: 'Doctor / Lawyer / Auditor / Brand Owner',
  },
  {
    time: '7:45 PM',
    activity: 'Q&A & Open Discussion',
    description: 'Your questions. Real answers.',
    presenter: '',
  },
  {
    time: '8:15 PM',
    activity: 'Networking & Closing',
    description: 'Continue the conversation.',
    presenter: '',
  },
];

const letsTalkQuestions = [
  'What does your business do and who does it serve?',
  'What is your biggest challenge right now?',
  'What kind of connections would change your business?',
  'Are you open to giving referrals as readily as receiving them?',
  'What does growth look like for you in the next 12 months?',
  'Are you ready to be in a room that holds you accountable?',
];

export default function Event() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = nextEventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-nia-black">
      <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto w-full">
          <AnimatedSection>
            <p className="text-xs font-light tracking-[0.4em] uppercase text-nia-gold mb-8">
              BREW Connect — NIA Guntur
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-nia-ivory mb-6 leading-tight">
              Business. Relationships.
              <br />
              <span className="text-nia-gold">Elevated Wins.</span>
            </h1>
            <p className="text-base font-light text-nia-gray max-w-2xl mb-16 leading-relaxed-custom">
              An invite-only experience for serious business owners who are done exchanging cards and ready to build real alliances.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-nia-border max-w-3xl mb-12">
              {[
                { value: String(timeLeft.days).padStart(2, '0'), label: 'Days' },
                { value: String(timeLeft.hours).padStart(2, '0'), label: 'Hours' },
                { value: String(timeLeft.minutes).padStart(2, '0'), label: 'Minutes' },
                { value: String(timeLeft.seconds).padStart(2, '0'), label: 'Seconds' },
              ].map((item) => (
                <div key={item.label} className="bg-nia-darker p-6 text-center">
                  <div className="font-playfair text-4xl md:text-5xl font-bold text-nia-ivory mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs font-light text-nia-muted uppercase tracking-widest">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="space-y-1">
                <p className="text-xs tracking-widest uppercase text-nia-muted">Date</p>
                <p className="text-base font-light text-nia-ivory">Coming Soon</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-nia-border self-center" />
              <div className="space-y-1">
                <p className="text-xs tracking-widest uppercase text-nia-muted">Venue</p>
                <p className="text-base font-light text-nia-ivory">ITC Welcomhotel, Guntur</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-nia-border self-center" />
              <div className="space-y-1">
                <p className="text-xs tracking-widest uppercase text-nia-muted">Time</p>
                <p className="text-base font-light text-nia-ivory">6:00 PM onwards</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12 bg-nia-darker border-y border-nia-border">
        <div className="max-w-[1280px] mx-auto">
          <AnimatedSection>
            <p className="text-xs font-light tracking-[0.3em] uppercase text-nia-gold mb-8">
              Event Agenda
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-nia-ivory mb-16 leading-tight">
              Two hours.
              <br />
              Built for momentum.
            </h2>
          </AnimatedSection>

          <div className="space-y-px bg-nia-border">
            {agenda.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.08} className="bg-nia-darker p-6 md:p-8 hover:bg-nia-dark transition-colors duration-300">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <p className="font-playfair text-lg font-bold text-nia-gold">{item.time}</p>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-lg font-semibold text-nia-ivory mb-1">{item.activity}</h3>
                    <p className="text-sm font-light text-nia-gray leading-relaxed-custom">
                      {item.description}
                    </p>
                    {item.presenter && (
                      <p className="text-xs font-light text-nia-gold mt-2 tracking-wider">
                        {item.presenter}
                      </p>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <AnimatedSection>
            <p className="text-xs font-light tracking-[0.3em] uppercase text-nia-gold mb-8">
              Let's Talk
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-nia-ivory mb-6 leading-tight">
              Six questions
              <br />
              worth answering.
            </h2>
            <p className="text-base font-light text-nia-gray max-w-2xl mb-16 leading-relaxed-custom">
              If you can answer these honestly, you're already thinking like someone who belongs in this room.
            </p>
          </AnimatedSection>
          <div className="space-y-0">
            {letsTalkQuestions.map((question, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.06}
                className="flex items-start gap-6 py-7 border-b border-nia-border"
              >
                <div className="text-4xl font-extrabold text-nia-border leading-none w-12 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-base font-light text-nia-gray leading-relaxed-custom pt-1">{question}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12 bg-nia-darker border-y border-nia-border">
        <div className="max-w-[1280px] mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs font-light tracking-[0.3em] uppercase text-nia-gold mb-8">
                  Venue
                </p>
                <h2 className="font-playfair text-4xl font-bold text-nia-ivory mb-8 leading-tight">
                  ITC Welcomhotel
                </h2>
                <div className="flex items-start gap-3 mb-6">
                  <MapPin className="text-nia-gold mt-1 shrink-0" size={16} />
                  <p className="text-base font-light text-nia-gray">
                    Guntur, Andhra Pradesh
                  </p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-nia-gold hover:underline"
                >
                  View on Google Maps
                </a>
              </div>
              <div className="bg-nia-black border border-nia-border aspect-video flex items-center justify-center">
                <p className="text-nia-muted font-light text-sm">Map</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto text-center">
          <AnimatedSection>
            <p className="text-xs font-light tracking-[0.4em] uppercase text-nia-muted mb-8">
              Attendance is by invitation only
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-nia-ivory mb-6 leading-tight">
              Secure your seat.
            </h2>
            <p className="text-base font-light text-nia-gray max-w-md mx-auto mb-12 leading-relaxed-custom">
              Express your interest. We'll confirm your spot personally.
            </p>
            <Button to="/join" variant="filled">
              Request Access
            </Button>
            <p className="text-xs font-light text-nia-muted mt-6 tracking-wider">
              You're closer than you think.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
