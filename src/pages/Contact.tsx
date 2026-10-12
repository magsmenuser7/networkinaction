import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useSEO } from '../hooks/useSEO';
// import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';
import building from "/a56db7d4-1a61-4b46-9024-acd83239df9f.png"

export default function Contact() {
  useSEO({
    title: 'Contact NIA Guntur',
    description: 'Reach out to Network In Action Guntur. Visit us at Icon Spaces, Brodipet, Guntur or call our team directly.',
    keywords: 'NIA Guntur Contact, Network In Action Guntur Address, Guntur Business Community Contact',
  });

  const [formData, setFormData] = useState({ full_name: '', mobile: '', business: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const { error } = await supabase.from('contact_inquiries').insert([formData]);
      if (error) throw error;
      setSubmitStatus('success');
      setFormData({ full_name: '', mobile: '', business: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const labelClass = 'text-sm font-semibold mb-2 block';
  const iconBox = 'w-10 h-10 rounded-full bg-nia-orange/10 flex items-center justify-center shrink-0';

  return (
    <div className="min-h-screen bg-nia-ivory">
      <section className="nia-hero pt-36 md:pt-40 pb-20 md:pb-24">
        <div className="nia-shell">
          <AnimatedSection>
            <p className="nia-eyebrow-light mb-4">Get in touch</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] leading-tight text-white mb-6 max-w-3xl">
              Let's start a real conversation.
            </h1>
            <p className="text-base md:text-lg font-light text-white/80 max-w-xl leading-relaxed">
              Whether you're curious about membership, partnership, or simply want to understand what NIA Guntur is — we respond to every inquiry personally.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="nia-shell grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Phone, label: 'Call Us', lines: ['+91 91213 15444 (NIA)', '+91 97033 56332 (Sandeep)', '+91 98850 50850 (Vinod)'] },
            { icon: Mail, label: 'Email Us', lines: ['guntur@networkinaction.com'] },
            { icon: Clock, label: 'Office Hours', lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: Closed'] },
          ].map(({ icon: Icon, label, lines }, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="nia-card h-full">
              <div className={`${iconBox} mb-5`}>
                <Icon size={16} className="text-nia-orange" />
              </div>
              <p className="nia-eyebrow mb-3">{label}</p>
              {lines.map((line, j) => (
                <p key={j} className="text-sm font-light text-nia-gray leading-relaxed">{line}</p>
              ))}
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="bg-nia-ivory py-20 md:py-24">
        <div className="nia-shell grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <AnimatedSection>
            <p className="nia-eyebrow mb-3">Our location</p>
            <h2 className="nia-title text-2xl md:text-3xl mb-10">Find us at Icon Spaces.</h2>

            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-5">
                <div className={iconBox}>
                  <MapPin size={16} className="text-nia-orange" />
                </div>
                <div>
                  <p className="nia-eyebrow mb-2">Address</p>
                  <address className="not-italic font-light text-nia-gray leading-relaxed">
                    4th Floor, Icon Spaces,<br />
                    6th Ln, Brodipet,<br />
                    Guntur, Andhra Pradesh — 522002
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className={iconBox}>
                  <Phone size={16} className="text-nia-orange" />
                </div>
                <div>
                  <p className="nia-eyebrow mb-2">Phone</p>
                  <div className="space-y-1.5">
                    {[
                      { label: 'NIA Office', num: '+91 91213 15444', href: 'tel:+919121315444' },
                      { label: 'Sandeep N', num: '+91 97033 56332', href: 'tel:+919703356332' },
                      { label: 'Vinod T', num: '+91 98850 50850', href: 'tel:+919885050850' },
                    ].map(({ label, num, href }) => (
                      <div key={label} className="flex items-center gap-3">
                        <span className="text-sm text-nia-gray w-24">{label}</span>
                        <a href={href} className="text-sm font-medium underline underline-offset-4 hover:text-nia-rust transition-colors">{num}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className={iconBox}>
                  <Mail size={16} className="text-nia-orange" />
                </div>
                <div>
                  <p className="nia-eyebrow mb-2">Email</p>
                  <a href="mailto:guntur@networkinaction.com" className="text-sm font-medium break-all underline underline-offset-4 hover:text-nia-rust transition-colors">
                    guntur@networkinaction.com
                  </a>
                </div>
              </div>
            </div>

            <div className="aspect-[4/3] relative overflow-hidden border border-nia-border rounded-2xl">
              <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${building})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nia-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="bg-white/95 rounded-xl p-4">
                  <p className="nia-eyebrow mb-1">NIA Guntur</p>
                  <p className="text-sm font-light text-nia-gray">Icon Spaces, Brodipet — 4th Floor</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="rounded-2xl border border-nia-border bg-white p-6 md:p-10">
              <p className="nia-eyebrow mb-3">Send a message</p>
              <h2 className="nia-title text-2xl md:text-3xl mb-8">We read every message.</h2>

              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl bg-nia-navy text-white border-l-4 border-nia-orange p-8"
                  role="status"
                >
                  <p className="nia-eyebrow-light mb-3">Message received</p>
                  <p className="text-base font-semibold mb-2">We'll reach out within 24 hours.</p>
                  <p className="text-sm font-light text-white/80">For immediate help, call +91 91213 15444.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {submitStatus === 'error' && (
                    <div className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-700 font-light" role="alert">
                      Something went wrong. Please try again or call us directly.
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-full_name" className={labelClass}>Full name</label>
                      <input id="contact-full_name" type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Full Name" required className="nia-input" />
                    </div>
                    <div>
                      <label htmlFor="contact-mobile" className={labelClass}>Mobile number</label>
                      <input id="contact-mobile" type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" required className="nia-input" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-business" className={labelClass}>Business / organization</label>
                    <input id="contact-business" type="text" name="business" value={formData.business} onChange={handleChange} placeholder="Business / Organization" className="nia-input" />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className={labelClass}>Message</label>
                    <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message — what brings you here?" rows={5} required className="nia-input resize-none" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="nia-btn w-full">
                    {isSubmitting ? 'Sending...' : <><span>Send Message</span><ArrowRight size={16} /></>}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
