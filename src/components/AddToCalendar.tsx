'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarPlus, Check, Download } from 'lucide-react';

// Static feed in /public: 3 recurring all-day events (Casual / Formal / Sports meets), Nov 2026 – Dec 2027.
const ICS_PATH = '/nia-meetings.ics';

type Option = 'google' | 'apple' | 'file';

// Subscriptions (Google, Apple) stay in sync if the feed changes; the file is a one-time import.
function hrefFor(option: Option) {
  const webcal = `webcal://${window.location.host}${ICS_PATH}`;
  if (option === 'google') return `https://calendar.google.com/calendar/render?cid=${encodeURIComponent(webcal)}`;
  if (option === 'apple') return webcal;
  return ICS_PATH;
}

// Apple devices → Apple Calendar (iPadOS reports itself as a Mac); everything else → Google.
const recommended = (): Option => (/iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent) ? 'apple' : 'google');

const OPTIONS: { id: Option; title: string; detail: string }[] = [
  { id: 'google', title: 'Google Calendar', detail: 'Android, iPhone or PC — subscribes your Google account' },
  { id: 'apple', title: 'Apple Calendar', detail: 'iPhone, iPad or Mac — opens the subscribe prompt' },
  { id: 'file', title: 'Outlook / other calendar', detail: 'Downloads an .ics file for Outlook, Windows or any app' },
];

export default function AddToCalendar({ className = '' }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [best, setBest] = useState<Option | null>(null);
  const [picked, setPicked] = useState<Option | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setBest(recommended()), []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const choose = (option: Option) => {
    setPicked(option);
    if (option === 'file') {
      const a = document.createElement('a');
      a.href = hrefFor('file');
      a.download = 'nia-guntur-meetings.ics';
      a.click();
    } else if (option === 'google') {
      window.open(hrefFor('google'), '_blank', 'noopener');
    } else {
      window.location.href = hrefFor('apple');
    }
    setTimeout(() => setOpen(false), 900);
  };

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      <button type="button" onClick={() => setOpen((o) => !o)} className="nia-btn" aria-haspopup="menu" aria-expanded={open}>
        <CalendarPlus size={16} />
        Add meetings to my calendar
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 z-30 mt-3 w-[min(340px,calc(100vw-32px))] -translate-x-1/2 rounded-3xl border border-nia-black/[0.06] bg-white p-2 text-left shadow-[0_24px_60px_rgba(0,0,0,0.16)]"
          >
            {OPTIONS.map((o) => (
              <button
                key={o.id}
                type="button"
                role="menuitem"
                onClick={() => choose(o.id)}
                className="group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-colors hover:bg-nia-ivory"
              >
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2 text-sm font-medium text-nia-black">
                    {o.title}
                    {best === o.id && (
                      <span className="rounded-full bg-nia-orange/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-nia-orange">
                        Your device
                      </span>
                    )}
                  </span>
                  <span className="mt-0.5 block text-xs text-nia-muted">{o.detail}</span>
                </span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-nia-black/10 transition group-hover:border-nia-orange group-hover:bg-nia-orange group-hover:text-white">
                  {picked === o.id ? <Check size={14} /> : o.id === 'file' ? <Download size={14} /> : <CalendarPlus size={14} />}
                </span>
              </button>
            ))}
            <p className="px-4 pb-2 pt-1 text-[11px] leading-snug text-nia-muted">
              Adds all 42 meetings, Nov 2026 – Dec 2027, as all-day events.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
