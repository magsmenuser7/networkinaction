import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { useSEO } from '../hooks/useSEO';
// import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';

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

  const labelClass = 'text-sm font-semibold mb-2 block';

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen nia-hero flex items-center justify-center px-6 pt-36 pb-20 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center max-w-lg"
          role="status"
        >
          <div className="w-16 h-1 rounded-full bg-nia-orange mx-auto mb-10" />
          <p className="nia-eyebrow-light mb-4">Application received</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] leading-tight text-white mb-6">You're closer than you think.</h2>
          <p className="text-base font-light text-white/85 leading-relaxed mb-8">
            Today, you chose to step forward. That already says something about the kind of leader you are. We'll reach out within 24 hours.
          </p>
          <p className="text-sm font-light text-white/70">
            Call +91 97033 56332 / +91 98850 50850 and speak to Sandeep or Vinod directly.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nia-ivory">
      <section className="nia-hero pt-36 md:pt-40 pb-20 md:pb-24">
        <div className="nia-shell">
          <AnimatedSection>
            <p className="nia-eyebrow-light mb-4">Apply for membership</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] leading-tight text-white mb-6 max-w-3xl">
              The room is invitation-only.
            </h1>
            <p className="text-base md:text-lg font-light text-white/80 max-w-xl leading-relaxed">
              We review every application personally. Not everyone is accepted. That is by design.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-nia-ivory py-20 md:py-24">
        <div className="nia-shell grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-10">
            <AnimatedSection>
              <p className="nia-eyebrow mb-3">How it works</p>
              <div className="space-y-6 mt-6">
                {[
                  { num: '01', title: 'Apply', desc: 'Complete the form with honest, specific answers.' },
                  { num: '02', title: 'Qualify', desc: 'Personal call to understand your business and goals.' },
                  { num: '03', title: 'Grow', desc: 'Enter the room. Every meeting structured for growth.' },
                ].map((step) => (
                  <div key={step.num} className="flex gap-5 border-t-2 border-nia-orange pt-5">
                    <span className="text-2xl font-bold tracking-[-0.04em] text-nia-rust leading-none">{step.num}</span>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                      <p className="text-sm font-light text-nia-gray leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl border border-nia-border bg-white p-6">
                <p className="nia-eyebrow mb-4">Membership investment</p>
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
                    <span className="font-semibold text-nia-navy">₹1,27,000 + GST</span>
                  </div>
                </div>
                <p className="text-xs font-light text-nia-gray mt-4 leading-relaxed">
                  This is not a payment. Investment details are discussed after qualification.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-3">
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-nia-border bg-white p-6 md:p-10">
                <p className="nia-eyebrow mb-3">Your application</p>
                <h2 className="nia-title text-2xl md:text-3xl mb-8">Tell us about your business.</h2>
                {submitStatus === 'error' && (
                  <div className="border border-red-300 bg-red-50 rounded-xl p-4 mb-6 text-sm text-red-700 font-light" role="alert">
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="apply-full_name" className={labelClass}>Full name</label>
                      <input id="apply-full_name" type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Full Name" required className="nia-input" />
                    </div>
                    <div>
                      <label htmlFor="apply-mobile" className={labelClass}>Mobile number</label>
                      <input id="apply-mobile" type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" required className="nia-input" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="apply-business" className={labelClass}>Business name</label>
                      <input id="apply-business" type="text" name="business" value={formData.business} onChange={handleChange} placeholder="Business Name" required className="nia-input" />
                    </div>
                    <div>
                      <label htmlFor="apply-designation" className={labelClass}>Role / designation</label>
                      <input id="apply-designation" type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Your Role / Designation" required className="nia-input" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="apply-industry" className={labelClass}>Industry / sector</label>
                    <input id="apply-industry" type="text" name="industry" value={formData.industry} onChange={handleChange} placeholder="Industry / Sector" required className="nia-input" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="apply-revenue_range" className={labelClass}>Annual revenue range</label>
                      <select id="apply-revenue_range" name="revenue_range" value={formData.revenue_range} onChange={handleChange} required className="nia-input">
                        <option value="" disabled>Annual Revenue Range</option>
                        <option value="Below 25L">Below ₹25 Lakhs</option>
                        <option value="25L - 1Cr">₹25L – ₹1 Crore</option>
                        <option value="1Cr - 5Cr">₹1 Crore – ₹5 Crore</option>
                        <option value="5Cr - 25Cr">₹5 Crore – ₹25 Crore</option>
                        <option value="25Cr+">₹25 Crore+</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="apply-years_in_business" className={labelClass}>Years in business</label>
                      <select id="apply-years_in_business" name="years_in_business" value={formData.years_in_business} onChange={handleChange} required className="nia-input">
                        <option value="" disabled>Years in Business</option>
                        <option value="Less than 1 year">Less than 1 year</option>
                        <option value="1-3 years">1–3 years</option>
                        <option value="3-5 years">3–5 years</option>
                        <option value="5-10 years">5–10 years</option>
                        <option value="10+ years">10+ years</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="apply-intent" className={labelClass}>Why NIA Guntur?</label>
                    <textarea id="apply-intent" name="intent" value={formData.intent} onChange={handleChange} placeholder="Why do you want access to NIA Guntur? Be specific." rows={4} required className="nia-input resize-none" />
                  </div>
                  <div>
                    <label htmlFor="apply-how_heard" className={labelClass}>How did you hear about NIA? <span className="font-light text-nia-gray">(optional)</span></label>
                    <select id="apply-how_heard" name="how_heard" value={formData.how_heard} onChange={handleChange} className="nia-input">
                      <option value="">How did you hear about NIA? (Optional)</option>
                      <option value="Friend/Colleague">Friend / Colleague</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Event">Event</option>
                      <option value="Website">Website</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="nia-btn w-full">
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                  </button>
                  <p className="text-xs text-center font-light text-nia-gray leading-relaxed">
                    This is not a payment or commitment. We review every application personally and reach out within 24 hours.
                  </p>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
