import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { useSEO } from '../hooks/useSEO';

// Expanded mock data for 25 members
const mockMembers = [
  { id: '1', name: 'Dr. Rayapati Mamatha', role: 'DMD Ramesh Hospitals', initials: 'RM' },
  { id: '2', name: 'Seshu Babu', role: 'President Aquimerg', initials: 'SB' },
  { id: '3', name: 'Dr.Praneeth', role: 'Kothamas Dental Care', initials: 'PN' },
  { id: '4', name: 'K.Pavan', role: 'Hoverse', initials: 'PN' },
  { id: '5', name: 'K.Ramakrishna', role: 'KR&Co ', initials: 'RK' },
  { id: '6', name: 'Manohar ', role: 'KCR Electricals', initials: 'MH' },
  { id: '7', name: 'Mohith ', role: 'Venkata Durga Hardware', initials: 'MT' },
  { id: '8', name: 'Anita Rao', role: 'CA', initials: 'AR' },
  { id: '9', name: 'Rajesh Katakam', role: 'Gowri Shankar Agencies', initials: 'RK' },
  { id: '10', name: 'Rama Jamili ', role: '', initials: 'RJ' },
  { id: '11', name: 'Srinivas Batchu', role: 'Makutasri Gold & Diamonds', initials: 'SB' },
  { id: '12', name: 'Srujana', role: 'Beauty & Healthcare', initials: 'SJ' },
  { id: '13', name: 'Subhash', role: 'Corporate Insurance', initials: 'SH' },
  { id: '14', name: 'Tara Chand ', role: 'TM Constructions', initials: 'TC' },
  { id: '15', name: 'Vamsi Ram', role: 'Rama Chandra Brothers', initials: 'VR' },
  { id: '16', name: 'Vineetha', role: 'Sure Interiors', initials: 'VT' },
  { id: '17', name: 'Akhilesh Namburu', role: 'Global Trade Consultant', initials: 'AN' },
  // { id: '18', name: 'Shruti Nair', role: 'Head of Operations, FastTrack', initials: 'SN' },
  // { id: '19', name: 'Amitabh Bose', role: 'Chief Strategist, Bose Consulting', initials: 'AB' },
  // { id: '20', name: 'Divya Krishnan', role: 'Director, DataMinds', initials: 'DK' },
  // { id: '21', name: 'Suresh Babu', role: 'Partner, SB Realty', initials: 'SB' },
  // { id: '22', name: 'Nandini Raj', role: 'Founder, Organic Eats', initials: 'NR' },
  // { id: '23', name: 'Gaurav Jain', role: 'CFO, FinServe India', initials: 'GJ' },
  // { id: '24', name: 'Radhika Sen', role: 'CEO, MediaHouse', initials: 'RS' },
  // { id: '25', name: 'Manoj Kumar', role: 'Lead Engineer, AutoTech Systems', initials: 'MK' },
];

export default function Members() {
  useSEO({
    title: 'Current Members',
    description: 'The NIA Guntur member directory is exclusively available to active members. Apply for membership to gain access.',
    keywords: 'NIA Guntur Members, Network In Action Guntur Community',
  });

  return (
    <div className="min-h-screen bg-nia-ivory flex flex-col">
      
      {/* NEW SECTION: Featured Members Directory */}
      <section className="px-6 pt-32 pb-16 w-full max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-xs font-light tracking-[0.5em] uppercase text-[#f07723] mb-4">Directory Preview</p>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-nia-black">Featured Members</h2>
          </div>
          
          {/* Responsive Grid Layout - Now set to 4 columns on large screens (lg:grid-cols-4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockMembers.map((member) => (
              <Link 
                key={member.id} 
                // to={`/members/${member.id}`} 
                className="group block"
              >
                <div className="bg-white p-6 h-full border border-nia-border rounded-xl hover:border-[#f07723] hover:shadow-[0_10px_30px_rgba(232,119,34,0.1)] transition-all duration-300 flex flex-col items-center text-center">
                  
                  {/* Member Avatar / Initial */}
                  <div className="w-20 h-20 bg-nia-ivory text-[#f07723] rounded-full flex items-center justify-center text-2xl font-bold mb-5 group-hover:bg-[#f07723] group-hover:text-white transition-colors duration-300">
                    {member.initials}
                  </div>
                  
                  {/* Member Details */}
                  <h3 className="text-lg font-bold text-nia-black mb-2">{member.name}</h3>
                  <p className="text-sm font-light text-nia-gray mb-8 flex-grow">{member.role}</p>
                  
                  {/* Action Link */}
                  <div className="text-xs font-semibold tracking-widest uppercase text-[#f07723] inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300 mt-auto">
                    View Profile <ArrowRight size={14} />
                  </div>
                  
                </div>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* EXISTING SECTION: Coming Soon Area (Unchanged) */}
      <section className="flex-1 flex items-center justify-center px-6 py-24">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-[#f07723]/10 border border-[#f07723]/20 flex items-center justify-center mx-auto mb-10">
            <Lock size={24} className="text-[#f07723]" />
          </div>

          <p className="text-xs font-light tracking-[0.5em] uppercase text-[#f07723] mb-6">Members Area</p>

          <h1 className="font-montserrat text-5xl md:text-6xl font-bold text-nia-black mb-6 leading-tight">
            This room is
            <br />
            <span className="text-black">coming soon.</span>
          </h1>

          <p className="text-base font-light text-nia-gray max-w-md mx-auto leading-relaxed-custom mb-4">
            The NIA Guntur member directory and exclusive portal is currently being built. Active members will receive direct access once it launches.
          </p>

          <p className="text-sm font-light text-nia-muted max-w-sm mx-auto leading-relaxed-custom mb-12">
            Not yet a member? Applications are open — but seats are limited.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/apply"
              className="h-[52px] px-10 font-semibold text-sm tracking-widest uppercase bg-nia-orange text-white hover:bg-nia-orange/90 hover:shadow-[0_0_40px_rgba(232,119,34,0.3)] transition-all duration-300 inline-flex items-center gap-2"
            >
              Apply for Membership <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="h-[52px] px-10 font-semibold text-sm tracking-widest uppercase border border-nia-border text-nia-black hover:border-[#f07723] hover:text-[#f07723] transition-all duration-300 inline-flex items-center"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-20 w-16 h-px bg-nia-border mx-auto" />
          <p className="text-xs font-light text-nia-muted mt-6 tracking-wide">
            For member access inquiries, call +91 91213 15444
          </p>
        </AnimatedSection>
      </section>
      
    </div>
  );
}













// import { Link } from 'react-router-dom';
// import { Lock, ArrowRight } from 'lucide-react';
// import AnimatedSection from '../components/AnimatedSection';
// import { useSEO } from '../hooks/useSEO';

// export default function Members() {
//   useSEO({
//     title: 'Current Members',
//     description: 'The NIA Guntur member directory is exclusively available to active members. Apply for membership to gain access.',
//     keywords: 'NIA Guntur Members, Network In Action Guntur Community',
//   });

//   return (
//     <div className="min-h-screen bg-nia-ivory flex flex-col">
//       <section className="flex-1 flex items-center justify-center px-6 py-40">
//         <AnimatedSection className="text-center max-w-2xl mx-auto">
//           <div className="w-16 h-16 bg-[#f07723]/10 border border-[#f07723]/20 flex items-center justify-center mx-auto mb-10">
//             <Lock size={24} className="text-[#f07723]" />
//           </div>

//           <p className="text-xs font-light tracking-[0.5em] uppercase text-[#f07723] mb-6">Members Area</p>

//           <h1 className="font-montserrat text-5xl md:text-6xl font-bold text-nia-black mb-6 leading-tight">
//             This room is
//             <br />
//             <span className="text-black">coming soon.</span>
//           </h1>

//           <p className="text-base font-light text-nia-gray max-w-md mx-auto leading-relaxed-custom mb-4">
//             The NIA Guntur member directory and exclusive portal is currently being built. Active members will receive direct access once it launches.
//           </p>

//           <p className="text-sm font-light text-nia-muted max-w-sm mx-auto leading-relaxed-custom mb-12">
//             Not yet a member? Applications are open — but seats are limited.
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             <Link
//               to="/apply"
//               className="h-[52px] px-10 font-semibold text-sm tracking-widest uppercase bg-nia-orange text-white hover:bg-nia-orange/90 hover:shadow-[0_0_40px_rgba(232,119,34,0.3)] transition-all duration-300 inline-flex items-center gap-2"
//             >
//               Apply for Membership <ArrowRight size={16} />
//             </Link>
//             <Link
//               to="/contact"
//               className="h-[52px] px-10 font-semibold text-sm tracking-widest uppercase border border-nia-border text-nia-black hover:border-[#f07723] hover:text-[#f07723] transition-all duration-300 inline-flex items-center"
//             >
//               Contact Us
//             </Link>
//           </div>

//           <div className="mt-20 w-16 h-px bg-nia-border mx-auto" />
//           <p className="text-xs font-light text-nia-muted mt-6 tracking-wide">
//             For member access inquiries, call +91 91213 15444
//           </p>
//         </AnimatedSection>
//       </section>
//     </div>
//   );
// }
