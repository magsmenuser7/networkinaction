import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useSEO } from '../hooks/useSEO';
import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';

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

  const inputClass = 'w-full bg-nia-ivory border border-nia-border rounded-xl px-5 py-4 text-nia-black placeholder-nia-muted focus:border-nia-gold focus:outline-none transition-all duration-200 text-sm font-light';

  return (
    <div className="min-h-screen bg-nia-ivory">
      <section className="relative min-h-[50vh] flex items-end pb-20 pt-32 px-6 lg:px-16 overflow-hidden border-b border-nia-border">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1920&h=700&dpr=1')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <AnimatedSection>
            <p className="text-xs font-light tracking-[0.5em] uppercase text-nia-gold mb-6">Get In Touch</p>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-3xl">
              Let's start a real
              <span className="text-nia-gold"> conversation.</span>
            </h1>
            <p className="text-base font-light text-white/60 max-w-xl leading-relaxed-custom">
              Whether you're curious about membership, partnership, or simply want to understand what NIA Guntur is — we respond to every inquiry personally.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-0 bg-nia-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1e1e1e]">
            {[
              { icon: Phone, label: 'Call Us', lines: ['+91 91213 15444 (NIA)', '+91 97033 56332 (Sandeep)', '+91 98850 50850 (Vinod)'] },
              { icon: Mail, label: 'Email Us', lines: ['guntur@networkinaction.com'] },
              { icon: Clock, label: 'Office Hours', lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: Closed'] },
            ].map(({ icon: Icon, label, lines }, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="py-10 px-10 flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-nia-gold/10 border border-nia-gold/20 flex items-center justify-center mb-5">
                  <Icon size={16} className="text-nia-gold" />
                </div>
                <p className="text-xs tracking-[0.3em] uppercase text-[#555555] mb-3">{label}</p>
                {lines.map((line, j) => (
                  <p key={j} className="text-sm font-light text-white/60">{line}</p>
                ))}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <AnimatedSection>
              <p className="text-xs font-light tracking-[0.4em] uppercase text-nia-gold mb-6">Our Location</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-nia-black mb-10 leading-tight">
                Find us at
                <br />Icon Spaces.
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-nia-gold/10 border border-nia-gold/20 flex items-center justify-center shrink-0 mt-1">
                    <MapPin size={16} className="text-nia-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-nia-muted mb-2">Address</p>
                    <address className="not-italic text-base font-light text-nia-black leading-relaxed">
                      4th Floor, Icon Spaces,<br />
                      6th Ln, Brodipet,<br />
                      Guntur, Andhra Pradesh — 522002
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-nia-gold/10 border border-nia-gold/20 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-nia-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-nia-muted mb-2">Phone</p>
                    <div className="space-y-1.5">
                      {[
                        { label: 'NIA Office', num: '+91 91213 15444', href: 'tel:+919121315444' },
                        { label: 'Sandeep N', num: '+91 97033 56332', href: 'tel:+919703356332' },
                        { label: 'Vinod T', num: '+91 98850 50850', href: 'tel:+919885050850' },
                      ].map(({ label, num, href }) => (
                        <div key={label} className="flex items-center gap-3">
                          <span className="text-xs text-nia-muted w-20">{label}</span>
                          <a href={href} className="text-sm font-light text-nia-black hover:text-nia-gold transition-colors">{num}</a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-nia-gold/10 border border-nia-gold/20 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-nia-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-nia-muted mb-2">Email</p>
                    <a href="mailto:guntur@networkinaction.com" className="text-sm font-light text-nia-black hover:text-nia-gold transition-colors">
                      guntur@networkinaction.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="aspect-[4/3] relative overflow-hidden border border-nia-border rounded-xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nia-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/95 p-4">
                    <p className="text-xs tracking-widest uppercase text-nia-gold mb-1">NIA Guntur</p>
                    <p className="text-sm font-light text-nia-black">Icon Spaces, Brodipet — 4th Floor</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="text-xs font-light tracking-[0.4em] uppercase text-nia-gold mb-6">Send a Message</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-nia-black mb-10 leading-tight">
                We read every
                <br />message.
              </h2>

              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-nia-gold p-8"
                >
                  <p className="text-xs tracking-widest uppercase text-nia-gold mb-3">Message Received</p>
                  <p className="text-base font-light text-nia-black mb-2">We'll reach out within 24 hours.</p>
                  <p className="text-sm font-light text-nia-gray">For immediate help, call +91 91213 15444.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {submitStatus === 'error' && (
                    <div className="border border-red-300 bg-red-50 p-4 text-sm text-red-600 font-light">
                      Something went wrong. Please try again or call us directly.
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Full Name" required className={inputClass} />
                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" required className={inputClass} />
                  </div>
                  <input type="text" name="business" value={formData.business} onChange={handleChange} placeholder="Business / Organization" className={inputClass} />
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message — what brings you here?" rows={5} required className={`${inputClass} resize-none`} />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 font-semibold text-sm tracking-[0.25em] uppercase bg-nia-orange text-white hover:bg-nia-orange/90 hover:shadow-[0_0_32px_rgba(232,119,34,0.3)] transition-all duration-300 disabled:opacity-40 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Sending...' : <><span>Send Message</span><ArrowRight size={16} /></>}
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
