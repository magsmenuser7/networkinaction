import AnimatedSection from '../components/AnimatedSection';

const sections = [
  {
    title: 'Information We Collect',
    content: `When you submit a membership application or partner inquiry through our website, we collect the following information: your full name, mobile number, business name, designation, industry, revenue range, years in business, and your stated reason for interest.

We collect this information solely for the purpose of evaluating your application and contacting you to discuss membership.`,
  },
  {
    title: 'How We Use Your Information',
    content: `Your information is used exclusively for:
— Reviewing and responding to your membership or partnership application
— Contacting you via phone or WhatsApp to discuss your interest
— Understanding the profile of our community

We do not sell, rent, or share your personal information with any third party for marketing purposes.`,
  },
  {
    title: 'Data Storage',
    content: `Your data is stored securely in our application database. We use industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure.`,
  },
  {
    title: 'WhatsApp Communication',
    content: `If you initiate a WhatsApp conversation through our website, your message and contact details may be visible to our City Partners (Sandeep N and Vinod Reddy T) for the purpose of responding to your inquiry.`,
  },
  {
    title: 'Your Rights',
    content: `You have the right to request access to the personal information we hold about you, request correction of any inaccurate data, or request deletion of your data. To exercise these rights, contact us at guntur@networkinaction.com or call +91 97033 56332.`,
  },
  {
    title: 'Contact',
    content: `For any privacy-related queries, please contact:

Network In Action — Guntur
Guntur, Andhra Pradesh, India — 522 001
Phone: +91 97033 56332
Email: guntur@networkinaction.com`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-nia-ivory">
      <section className="min-h-[40vh] flex flex-col justify-end px-6 lg:px-12 pb-16 pt-32 border-b border-nia-border">
        <div className="max-w-[1280px] mx-auto w-full">
          <AnimatedSection>
            <p className="text-xs font-light tracking-[0.4em] uppercase text-nia-gold mb-6">
              Legal
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-nia-black leading-tight">
              Privacy Policy
            </h1>
            <p className="text-sm font-light text-nia-muted mt-4">
              Last updated: April 2026
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="text-base font-light text-nia-gray leading-relaxed-custom mb-16">
                Network In Action Guntur ("NIA Guntur", "we", "us") is committed to protecting your personal information. This Privacy Policy explains what data we collect through this website, how we use it, and your rights regarding your information.
              </p>
            </AnimatedSection>

            <div className="space-y-0">
              {sections.map((section, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 0.06}
                  className="py-10 border-b border-nia-border"
                >
                  <h2 className="font-playfair text-2xl font-bold text-nia-black mb-5">
                    {section.title}
                  </h2>
                  <div className="text-sm font-light text-nia-gray leading-relaxed-custom whitespace-pre-line">
                    {section.content}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
