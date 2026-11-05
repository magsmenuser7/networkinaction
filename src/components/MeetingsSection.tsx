'use client';

import { useEffect, useState } from 'react';
import AnimatedSection from './AnimatedSection';
import AddToCalendar from './AddToCalendar';

// Same rule as public/nia-meetings.ics: every month, Nov 2026 – Dec 2027.
const MEETS = [
  { name: 'Casual Meet', nth: 1, when: '1st Wednesday', image: '/members2.jpeg' },
  { name: 'Formal Meet', nth: 3, when: '3rd Wednesday', image: '/stagepeople.jpeg' },
  { name: 'Sports Meet', nth: 4, when: '4th Wednesday', image: '/ganeshteam.jpeg' },
];
const FIRST = new Date(2026, 10, 1);
const LAST = new Date(2027, 11, 31);

function nthWednesday(year: number, month: number, nth: number) {
  const offset = (3 - new Date(year, month, 1).getDay() + 7) % 7; // days until the month's first Wednesday
  return new Date(year, month, 1 + offset + (nth - 1) * 7);
}

/** Next occurrence on or after today, or null once the schedule has ended. */
export function nextMeeting(nth: number, today: Date) {
  const from = today < FIRST ? FIRST : today;
  for (let k = 0; k < 3; k++) {
    const d = nthWednesday(from.getFullYear(), from.getMonth() + k, nth);
    if (d >= from) return d <= LAST ? d : null;
  }
  return null;
}

const fmt = (d: Date) => d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });

export default function MeetingsSection() {
  // Dates depend on "today", so compute after mount (the page itself is pre-rendered at build time).
  const [next, setNext] = useState<(Date | null)[] | null>(null);
  useEffect(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    setNext(MEETS.map((m) => nextMeeting(m.nth, today)));
  }, []);

  return (
    <section id="meetings" className="scroll-mt-24 bg-white py-24 md:py-32">
      <div className="nia-shell">
        <div className="mb-14 grid gap-8 md:grid-cols-2">
          <AnimatedSection>
            <p className="nia-eyebrow mb-4">Meetings calendar · Nov 2026 – Dec 2027</p>
            <h2 className="text-4xl md:text-5xl">
              Three rooms,
              <br />
              every month.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="self-end">
            <p className="max-w-md text-sm font-light leading-7 text-nia-gray">
              NIA Guntur meets every Wednesday that matters — a casual meet to open the month, a formal meet at its
              heart, and a sports meet to close it out. Add the whole schedule to your calendar in one tap.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {MEETS.map((m, i) => (
            <AnimatedSection key={m.name} delay={i * 0.08} className="group overflow-hidden rounded-2xl bg-nia-ivory">
              <div className="relative h-44 overflow-hidden">
                <div className="nia-zoom h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('${m.image}')` }} />
                <span className="nia-glass absolute left-4 top-4 !px-3 !py-1.5 text-[11px] font-medium uppercase tracking-[0.18em]">
                  {m.when}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-3xl">{m.name}</h3>
                <p className="nia-eyebrow mt-4">Next meeting</p>
                <p className="mt-1 min-h-[1.5rem] text-sm font-medium text-nia-black">
                  {next === null ? '' : next[i] ? fmt(next[i]!) : 'Schedule complete'}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* relative z-20 so the open menu paints above the next section */}
        <AnimatedSection className="relative z-20 mt-12 flex flex-col items-center gap-3 text-center">
          <AddToCalendar />
          <p className="text-xs text-nia-muted">Works with Google Calendar, Apple Calendar (iPhone & Mac) and Outlook.</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
