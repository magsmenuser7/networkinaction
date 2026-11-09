import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { ScrollProgress } from '../components/Motion';
import '../index.css';

const serif = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-serif' });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });

const ogImage = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=1';

export const metadata: Metadata = {
  metadataBase: new URL('https://networkinactionguntur.com'),
  title: {
    default: 'NIA Guntur — Network In Action | Premium Business Community',
    template: '%s | NIA Guntur',
  },
  description:
    'Network In Action Guntur is an exclusive, invite-only business community for serious entrepreneurs. Structured meetings, measurable growth, world-class coaching — in Guntur, Andhra Pradesh.',
  keywords:
    'NIA Guntur, Network In Action Guntur, Business Networking Guntur, Entrepreneur Community Guntur, Business Community Andhra Pradesh, Sandeep N, Vinod T, NIA India',
  authors: [{ name: 'NIA Guntur' }],
  robots: 'index, follow',
  icons: { icon: '/logo_nia_guntu.png' },
  other: {
    'geo.region': 'IN-AP',
    'geo.placename': 'Guntur, Andhra Pradesh, India',
    'geo.position': '16.3067;80.4365',
    ICBM: '16.3067, 80.4365',
  },
  openGraph: {
    type: 'website',
    siteName: 'NIA Guntur',
    locale: 'en_IN',
    description: "Invite-only business community for Guntur's most ambitious entrepreneurs. Structured meetings. Measurable growth. Real referrals.",
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    description: "Invite-only business community for Guntur's most ambitious entrepreneurs.",
    images: [ogImage],
  },
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Network In Action Guntur',
  alternateName: 'NIA Guntur',
  url: 'https://networkinactionguntur.com',
  logo: 'https://networkinactionguntur.com/logo_nia_guntu.png',
  description: 'Exclusive invite-only business community for serious entrepreneurs in Guntur, Andhra Pradesh.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4th Floor, Icon Spaces, 6th Ln, Brodipet',
    addressLocality: 'Guntur',
    addressRegion: 'Andhra Pradesh',
    postalCode: '522002',
    addressCountry: 'IN',
  },
  telephone: '+919121315444',
  contactPoint: [
    { '@type': 'ContactPoint', telephone: '+919121315444', contactType: 'customer service', availableLanguage: ['English', 'Telugu'] },
  ],
  sameAs: [
    'https://www.youtube.com/@networkinactionguntur',
    'https://www.instagram.com/networkinactionguntur/',
    'https://www.facebook.com/profile.php?id=61577547012330',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <div className="min-h-screen flex flex-col">
          <ScrollProgress />
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
