import { ArrowUpRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useSEO } from '../hooks/useSEO';

// "UULF" + channel id (minus "UC") is YouTube's auto-maintained long-form uploads playlist (no Shorts).
// Embedding it always plays the newest long video, so new episodes appear without code changes.
const LONG_FORM_PLAYLIST = 'UULFwwTm1mhcdgzyJggOpp1KIA';
const CHANNEL_URL = 'https://www.youtube.com/@networkinactionguntur';

const eyebrow = 'text-xs font-semibold uppercase tracking-[0.18em]';

const themes = [
  { title: 'Perspectives', copy: 'Members share how they see business, society and the world around them.' },
  { title: 'Experiences', copy: 'The challenges, turning points and lessons learned along the way.' },
  { title: 'Leadership', copy: 'How leaders across industries think, decide and build.' },
  { title: 'Growth', copy: 'Personal and professional growth beyond the usual networking discussion.' },
];

export default function ThinkSpace() {
  useSEO({
    title: 'Think Space',
    description: 'Think Space is a conversation series by Network In Action Guntur where members share ideas, perspectives and experiences that go beyond business.',
    keywords: 'Think Space, NIA Guntur podcast, Network In Action Guntur, business conversations',
  });

  return (
    <div className="bg-nia-ivory text-nia-black">
      {/* Hero */}
      <section className="relative overflow-hidden text-white bg-[linear-gradient(110deg,#0E1C40_0%,#152955_65%,#24375c_100%)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_83%_26%,#e8772238_0,transparent_25%),repeating-linear-gradient(130deg,transparent_0_54px,#ffffff0b_55px_56px)]"
        />
        <AnimatedSection className="relative max-w-[1200px] mx-auto px-6 lg:px-12 pt-36 pb-16 md:pt-40 md:pb-20">
          <p className={`${eyebrow} mb-6 text-[#F4AD78]`}>A conversation series by NIA Guntur</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[1.02]">
            Think Space<span className="text-nia-orange">.</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl font-light text-white/90">Conversations beyond business.</p>
          <p className="mt-6 max-w-2xl font-light leading-relaxed text-white/75">
            Business is built through transactions, but meaningful relationships are built through conversations.
            Think Space is where NIA members speak openly about ideas, experiences, leadership and the lessons they
            have learned along the way.
          </p>
        </AnimatedSection>
      </section>

      {/* Latest episode */}
      <section id="latest" className="max-w-[1200px] mx-auto px-6 lg:px-12 py-20 md:py-24">
        <AnimatedSection>
          <p className={`${eyebrow} mb-3 text-[#A84B07]`}>Latest episode</p>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.04em]">Watch the newest conversation</h2>
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#A84B07] hover:text-nia-orange"
            >
              All episodes on YouTube <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-nia-border bg-black shadow-whisper">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/videoseries?list=${LONG_FORM_PLAYLIST}&rel=0`}
              title="Think Space — latest episode"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </AnimatedSection>
      </section>

      {/* About */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid gap-8 md:grid-cols-[.7fr_1.3fr]">
          <AnimatedSection>
            <p className={`${eyebrow} mb-4 text-[#A84B07]`}>Why Think Space</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.04em] leading-tight">
              Every person sees
              <br />
              the world differently.
            </h2>
          </AnimatedSection>
          <AnimatedSection className="border-l-2 border-nia-orange pl-6 md:pl-9">
            <p className="max-w-2xl font-light leading-[1.85] text-nia-gray">
              At Network In Action Guntur, networking is not just about exchanging contacts or generating business.
              It is about building genuine relationships, sharing knowledge and growing together as a community.
              Think Space is an extension of that belief — a space to think, listen, question, learn and see things
              from a different perspective.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Themes */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 py-20 md:py-24">
        <AnimatedSection>
          <p className={`${eyebrow} mb-3 text-[#A84B07]`}>What we talk about</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.04em] mb-10">In every episode</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {themes.map((t) => (
              <div key={t.title} className="border-t-2 border-nia-orange pt-5">
                <h3 className="text-lg font-bold">{t.title}</h3>
                <p className="mt-3 text-sm font-light leading-7 text-nia-gray">{t.copy}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Subscribe */}
      <section className="bg-[#0E1C40] py-20 text-white">
        <AnimatedSection className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className={`${eyebrow} mb-4 text-[#F4AD78]`}>Never miss an episode</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.04em]">Subscribe to NIA Guntur on YouTube.</h2>
          </div>
          <a
            href={`${CHANNEL_URL}?sub_confirmation=1`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full bg-nia-orange px-7 py-4 font-semibold text-nia-black transition hover:brightness-110 md:self-auto"
          >
            Subscribe <ArrowUpRight size={18} />
          </a>
        </AnimatedSection>
      </section>
    </div>
  );
}
