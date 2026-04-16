import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { useSEO } from '../hooks/useSEO';
// import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';
import members from "../../public/members2cropped.jpg"

export default function Apply() {
  useSEO({
    title: 'Apply for Membership',
    description: 'Apply to join Network In Action Guntur — an invite-only, curated business community for serious entrepreneurs in Andhra Pradesh.',
    keywords: 'NIA Guntur Apply, Business Membership Application, Network In Action Join Guntur',
  });

  const [formData, setFormData] = useState({
    full_name: '', business: '', designation: '', industry: '',
    mobile: '', revenue_range: '', years_in_business: '', intent: '',
    how_heard: '', city: 'Guntur',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const { error } = await supabase.from('membership_applications').insert([formData]);
      if (error) throw error;
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass = 'w-full bg-nia-ivory border border-nia-border rounded-xl px-5 py-4 text-nia-black placeholder-nia-muted focus:border-[#f07723] focus:outline-none focus:shadow-ring-[#f07723] transition-all duration-200 text-sm font-light';
  const selectClass = 'w-full bg-nia-ivory border border-nia-border rounded-xl px-5 py-4 text-nia-black focus:border-[#f07723] focus:outline-none focus:shadow-ring-[#f07723] transition-all duration-200 text-sm font-light appearance-none';

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-nia-ivory flex items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-lg">
          <div className="w-16 h-px bg-[#f07723] mx-auto mb-10" />
          <p className="text-xs tracking-[0.4em] uppercase text-[#f07723] mb-6">Application Received</p>
          <h2 className="font-montserrat text-4xl font-bold text-nia-black mb-6">You're closer than you think.</h2>
          <p className="text-base font-light text-nia-gray leading-relaxed-custom mb-8">
            Today, you chose to step forward. That already says something about the kind of leader you are. We'll reach out within 24 hours.
          </p>
          <p className="text-sm font-light text-nia-muted">
            Call +91 97033 56332 / +91 98850 50850 and speak to Sandeep or Vinod directly.
          </p>
          <div className="w-16 h-px bg-nia-border mx-auto mt-10" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nia-ivory">
      <section className="relative min-h-[75vh] flex items-end pb-20 pt-32 px-6 lg:px-16 overflow-hidden border-b border-nia-border">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${members})` }}
        />
        <div className="absolute inset-0 bg-black/50 bg-gradient-r" />
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <AnimatedSection>
            <p className="text-xs font-light tracking-[0.4em] uppercase text-[#f07723] mb-6">Apply for Membership</p>
            <h1 className="font-montserrat text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-3xl">
              The room is
              <span className="text-white"> invitation-only.</span>
            </h1>
            <p className="text-base font-light text-white/60 max-w-xl leading-relaxed-custom">
              We review every application personally. Not everyone is accepted. That is by design.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-10">
              <AnimatedSection>
                <div className="space-y-8">
                  {[
                    { num: '01', title: 'Apply', desc: 'Complete the form with honest, specific answers.' },
                    { num: '02', title: 'Qualify', desc: 'Personal call to understand your business and goals.' },
                    { num: '03', title: 'Grow', desc: 'Enter the room. Every meeting structured for growth.' },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-5">
                      <span className="text-2xl font-extrabold text-nia-border leading-none mt-1">{step.num}</span>
                      <div>
                        <h4 className="text-sm font-semibold text-nia-black mb-1 tracking-wide">{step.title}</h4>
                        <p className="text-sm font-light text-nia-gray leading-relaxed-custom">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="border-t border-nia-border pt-8">
                  <p className="text-xs tracking-[0.3em] uppercase text-nia-muted mb-4">Membership Investment</p>
                  <div className="space-y-2 text-sm font-light text-nia-gray">
                    {[
                      { label: 'Membership Fee', value: '₹60,000' },
                      { label: 'Application Fee', value: '₹8,500' },
                      { label: 'Hospitality Fee', value: '₹60,000' },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between">
                        <span>{label}</span>
                        <span className="text-nia-black">{value}</span>
                      </div>
                    ))}
                    <div className="flex justify-between pt-3 border-t border-nia-border">
                      <span className="font-semibold text-nia-black">Total</span>
                      <span className="font-semibold text-[#0e1c40]">₹1,27,000 + GST</span>
                    </div>
                  </div>
                  <p className="text-xs font-light text-nia-muted mt-4 leading-relaxed-custom">
                    This is not a payment. Investment details are discussed after qualification.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-3">
              <AnimatedSection delay={0.1}>
                {submitStatus === 'error' && (
                  <div className="border border-red-300 bg-red-50 rounded-xl p-4 mb-6 text-sm text-red-600 font-light">
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Full Name" required className={inputClass} />
                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" required className={inputClass} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="business" value={formData.business} onChange={handleChange} placeholder="Business Name" required className={inputClass} />
                    <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Your Role / Designation" required className={inputClass} />
                  </div>
                  <input type="text" name="industry" value={formData.industry} onChange={handleChange} placeholder="Industry / Sector" required className={inputClass} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select name="revenue_range" value={formData.revenue_range} onChange={handleChange} required className={selectClass}>
                      <option value="" disabled>Annual Revenue Range</option>
                      <option value="Below 25L">Below ₹25 Lakhs</option>
                      <option value="25L - 1Cr">₹25L – ₹1 Crore</option>
                      <option value="1Cr - 5Cr">₹1 Crore – ₹5 Crore</option>
                      <option value="5Cr - 25Cr">₹5 Crore – ₹25 Crore</option>
                      <option value="25Cr+">₹25 Crore+</option>
                    </select>
                    <select name="years_in_business" value={formData.years_in_business} onChange={handleChange} required className={selectClass}>
                      <option value="" disabled>Years in Business</option>
                      <option value="Less than 1 year">Less than 1 year</option>
                      <option value="1-3 years">1–3 years</option>
                      <option value="3-5 years">3–5 years</option>
                      <option value="5-10 years">5–10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                  </div>
                  <textarea name="intent" value={formData.intent} onChange={handleChange} placeholder="Why do you want access to NIA Guntur? Be specific." rows={4} required className={`${inputClass} resize-none`} />
                  <select name="how_heard" value={formData.how_heard} onChange={handleChange} className={selectClass}>
                    <option value="">How did you hear about NIA? (Optional)</option>
                    <option value="Friend/Colleague">Friend / Colleague</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Event">Event</option>
                    <option value="Website">Website</option>
                    <option value="Other">Other</option>
                  </select>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 font-semibold text-sm tracking-[0.25em] uppercase bg-nia-orange text-white rounded-xl hover:bg-nia-orange/90 hover:shadow-[0_0_32px_rgba(232,119,34,0.3)] transition-all duration-300 disabled:opacity-40"
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                  </button>
                  <p className="text-xs text-center font-light text-nia-muted mt-2 leading-relaxed-custom">
                    This is not a payment or commitment. We review every application personally and reach out within 24 hours.
                  </p>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
