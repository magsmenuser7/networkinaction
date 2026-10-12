import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { useSEO } from '../hooks/useSEO';

type Member = { name: string; role: string; sectors: string[]; excerpt: string; bio: string };

const members: Member[] = [
  {
    name: 'Kanuri Seshu Babu',
    role: 'Director & President · APNRT & ACQUIMERGE',
    sectors: ['Professional services'],
    excerpt: 'Through APNRT Society, Kanuri Seshu Babu helps entrepreneurs navigate land approvals, space allocation and procedural complexities in Andhra Pradesh.',
    bio: 'Building a venture in Andhra Pradesh is often as much about navigating the system as it is about building the business. Through APNRT Society, Kanuri Seshu Babu works at that intersection, helping entrepreneurs navigate land approvals, space allocation and procedural complexities that can often stand between an idea and its execution. His work may happen behind the scenes, but its impact is tangible. By helping businesses move through the institutional process with greater clarity and speed, he contributes to an environment where ideas can become enterprises, and enterprises can contribute to the growth of Andhra Pradesh.',
  },
  {
    name: 'Dr. Mamatha Rayapati',
    role: 'Deputy Managing Director · Aster Ramesh Hospital',
    sectors: ['Healthcare'],
    excerpt: 'Dr. Mamatha Rayapati has built her career around strengthening both hospital systems and care.',
    bio: 'Hospital administration is as much about systems as it is about care, and Dr. Mamatha Rayapati has built her career around strengthening both. Her leadership has helped advance organisational standards towards international benchmarks. She currently serves as State Chairperson, Andhra Pradesh, for the Consortium of Accredited Healthcare Organizations (2026–2028), and as Chairperson of the AP Chambers Women Entrepreneurs Wing, Central Zone. Across healthcare and entrepreneurship, her work reflects a consistent commitment to stronger institutions, higher standards and greater opportunities. Her leadership extends beyond her organisations, contributing to a more capable and progressive professional ecosystem in Andhra Pradesh.',
  },
  {
    name: 'Gowri Sankar Agencies',
    role: 'Automotive spare parts',
    sectors: ['Automotive'],
    excerpt: 'A source for genuine spare parts for Hyundai, Toyota and Maruti Suzuki vehicles across Guntur and Andhra Pradesh.',
    bio: 'Built on a decade of industry experience, this business has established itself as a trusted source for 100% genuine spare parts for Hyundai, Toyota and Maruti Suzuki vehicles across Guntur and Andhra Pradesh. With professional MBA-led management, it combines industry knowledge with disciplined operations to serve authorised service centres, multi-brand garages, fleet owners and retail customers with authenticity, reliability and speed. Its foundation is built on a simple promise: when it comes to something as critical as a vehicle part, there should be no compromise on genuineness or trust. The ambition is to keep raising that standard as the business grows.',
  },
  {
    name: 'Rakesh Chukkapalli',
    role: 'Managing Partner · Pioneer Group & Delhi Public School, Guntur',
    sectors: ['Real estate', 'Education', 'Automotive'],
    excerpt: 'His work spans real estate, automotive and education, with a long-term view of building institutions in the region.',
    bio: 'Rakesh Chukkapalli represents a generation of business leadership that extends beyond a single industry. As the driving force behind Pioneer’s presence across real estate and automotive, and through his association with Delhi Public School Amaravati, his work spans the spaces that shape how a city lives, moves and grows. His business interests bring together real estate and automotive brands including Mahindra, TVS and Kia, alongside emerging electric mobility. His involvement in education adds another dimension to that journey, contributing to the development of the next generation. What connects these ventures is a long-term view of building institutions, not simply businesses, and contributing to the evolution of Guntur and the wider region.',
  },
  {
    name: 'Ramakrishna',
    role: 'Managing Partner · K.R & Co',
    sectors: ['Trade'],
    excerpt: 'Ramakrishna brings more than 15 years of experience in global tobacco trade and international markets.',
    bio: 'With over 15 years of experience in global tobacco trade, Ramakrishna brings deep expertise in international markets, cross-border operations and strategic expansion. His work focuses on identifying opportunities across competitive global markets, building resilient supply networks and creating sustainable pathways for market entry and growth. As he continues to steer K.R. & Co., his approach remains grounded in long-term value creation, strong international partnerships and operational excellence. His journey reflects the perspective of a leader who understands that sustainable growth is not simply about entering new markets, but about building the capabilities and relationships required to succeed in them.',
  },
  {
    name: 'Srinivas',
    role: 'Director · Makutasri Gold & Diamonds',
    sectors: ['Retail'],
    excerpt: 'Srinivas has built a presence in the region’s bullion and jewellery business, with three brands serving Guntur and Vijayawada.',
    bio: 'Srinivas has built a strong presence in the gold and jewellery market, establishing himself as a recognised name in the region’s bullion and jewellery business. What began with a deep understanding of the gold trade has evolved into a growing business presence, with three brands serving customers across Guntur and Vijayawada. His journey reflects a clear understanding of how trust, market knowledge and consistent customer relationships shape businesses in an industry where reputation matters as much as the product itself. Today, he continues to build on that foundation, expanding his presence while carrying forward the values that have shaped his journey.',
  },
  {
    name: 'Bhargava',
    role: 'Managing Partner · Jayalakshmi Engineering Company',
    sectors: ['Infrastructure'],
    excerpt: 'Bhargava brings a practical perspective on sanitaryware, water treatment systems, pressure pumps and heat pumps.',
    bio: 'Some of the most important businesses are the ones that quietly make everything else work. Bhargava represents Jayalakshmi Engineering Company, a Guntur-based business built around sanitaryware, water treatment systems, pressure pumps and heat pumps, working with established brands across the industry. With a strong understanding of plumbing and water systems, his focus extends beyond supplying products to helping businesses and projects find dependable solutions for essential infrastructure. As part of NIA, Bhargava brings that practical perspective to the table, with an openness to learn from fellow members, exchange ideas and contribute where his expertise can create meaningful value.',
  },
  {
    name: 'Kothamas Dental Care',
    role: 'Founder & Smile Designer',
    sectors: ['Healthcare'],
    excerpt: 'The Guntur practice brings together aesthetic dentistry, smile makeovers and long-term oral wellness.',
    bio: 'Some professionals treat teeth. Others think about the experience of a smile as a whole. Kothamas Dental Care has built its practice in Guntur around that broader perspective, bringing together aesthetic dentistry, porcelain veneers and complete smile makeovers with a focus on long-term oral wellness. The practice is now extending that thinking beyond the clinic, collaborating with aesthetic dental practices and developing science-backed oral care solutions of its own. The ambition is clear: to redefine what a healthy smile can mean by bringing together aesthetics, science and preventive care, while continuing to build a stronger standard of dental care in the region.',
  },
  {
    name: 'Hoverse',
    role: 'Managing Director · Commercial kitchen solutions',
    sectors: ['Hospitality'],
    excerpt: 'Hoverse provides commercial kitchen consulting, design, manufacturing, installation and commissioning.',
    bio: 'The success of a hospitality business often begins behind the scenes, in a kitchen designed to perform at scale. Hoverse has built its expertise around creating these critical spaces, offering complete commercial kitchen solutions from consulting and concept development to design, manufacturing, installation and commissioning. With one of South India’s largest collections of commercial kitchen equipment, the company serves some of the region’s most recognised hospitality establishments, including Radisson, Novotel and other five-star hotels. By bringing equipment, expertise and execution under one roof, Hoverse has positioned itself as a trusted partner for hospitality businesses where precision, reliability and performance are non-negotiable.',
  },
  {
    name: 'Akhilesh Namburu',
    role: 'Managing Partner · PhoenixxCorps Management and AK International Traders',
    sectors: ['Trade', 'Professional services'],
    excerpt: 'Akhilesh works across global trade, business facilitation and the international entertainment industry.',
    bio: 'Akhilesh Namburu operates at the intersection of global trade, strategic business facilitation and the international entertainment industry. As Founder and CEO of PhoenixxCorps Management, he facilitates cross-border opportunities across commodities, technology, infrastructure and industrial sectors, connecting businesses, suppliers and strategic partners across international markets. His work also extends into artist management, representing a portfolio of artists across the UK and Europe and creating opportunities through international bookings, partnerships and live events. With experience across two distinctly global industries, Akhilesh brings a cross-border perspective to building businesses, partnerships and opportunities that extend beyond geography and create long-term value.',
  },
  {
    name: 'Tara Chand',
    role: 'Managing Director · TM Constructions',
    sectors: ['Construction'],
    excerpt: 'Tara Chand leads residential, commercial and institutional project delivery at TM Constructions.',
    bio: 'Tara Chand has shaped TM Constructions around that principle, delivering residential, commercial and institutional projects while maintaining in-house control across civil works, labour contracting and complete project execution. With an established presence across the region, the company is now extending its capabilities into infrastructure and industrial projects. His approach is grounded in building lasting relationships with developers, architects, contractors and execution teams, recognising that every successful project is ultimately a reflection of the people and partnerships behind it.',
  },
  {
    name: 'Scheller Enterprises Pvt Ltd',
    role: 'Director · Land Marshal Chemicals',
    sectors: ['Construction'],
    excerpt: 'Land Marshal Chemicals develops construction chemicals and customised formulations for project requirements.',
    bio: 'As a unit of Land Marshal, Land Marshal Chemicals has built its presence in South India’s chemical industry through high-performance construction chemicals and customised formulations designed around specific project requirements. Its focus extends beyond supplying products to understanding the challenges faced by builders, engineers and architects and developing solutions that respond to them. With a strong emphasis on relationships and collaboration, the business continues to build connections across the construction ecosystem, bringing technical capability and industry understanding together to support better project outcomes.',
  },
  {
    name: 'Sure Interiors',
    role: 'Founder · Interior design',
    sectors: ['Interiors'],
    excerpt: 'Sure Interiors creates residential, commercial and retail spaces balancing aesthetics with functionality.',
    bio: 'The design force behind Sure Interiors is known for creating spaces that move comfortably from refined minimalism to large-scale, detail-intensive projects. Her work spans residential, commercial and retail interiors, where aesthetics are balanced with functionality and thoughtful execution. From understated spaces where simplicity becomes the defining character to ambitious projects that demand scale, coordination and precision, she brings the same design discipline to every brief. Through Sure Interiors, she continues to explore how contemporary design, evolving technology and practical thinking can come together to create spaces that are not only visually distinctive, but purposeful and built to last.',
  },
  {
    name: 'Srujana',
    role: 'Franchise owner · Lakmé Salons',
    sectors: ['Beauty & wellness'],
    excerpt: 'Srujana operates Lakmé Salon locations in Guntur and Vijayawada and two Naturals salons in Hyderabad.',
    bio: 'Srujana is building her presence in the beauty and wellness industry with a simple belief: beauty is not just about appearance, it is something to be cared for. As the franchise owner of Lakmé Salon in Guntur and Vijayawada, and two Naturals salons in Hyderabad, she brings together brand-led standards with a personal understanding of what clients seek from modern beauty spaces. Her journey reflects a growing presence across multiple cities and a commitment to creating experiences where professional care, consistency and trust remain at the centre of beauty.',
  },
  {
    name: 'Vamsi',
    role: 'Managing Partner · Rama Chandra Brothers',
    sectors: ['Retail', 'Interiors'],
    excerpt: 'Vamsi carries forward a furniture business with a presence in four Andhra Pradesh cities.',
    bio: 'For more than 25 years, Rama Chandra Brothers has been shaping how Andhra Pradesh experiences furniture, combining manufacturing, curated global brands and evolving design trends across four cities and seven locations. As Managing Partner, Vamsi represents the next chapter of that journey, carrying forward a business built on scale, quality and an instinct for changing consumer expectations. With over 100,000 sq. ft. of display space and a presence across Guntur, Vijayawada, Rajahmundry and Kakinada, the business has grown into one of the state’s largest furniture retailers. Vamsi’s focus is on continuing that evolution, bringing contemporary design and stronger customer experiences to a growing market.',
  },
  {
    name: 'Rajesh',
    role: 'Director · Abhee Smart Home Systems',
    sectors: ['Technology'],
    excerpt: 'Rajesh brings technology, automation and design together to create more intuitive homes.',
    bio: 'The modern home is no longer defined only by its architecture. It is increasingly defined by how intelligently it responds to the people living in it. Rajesh has built his work around this evolving idea through Abhee Smart Home Systems, bringing together technology, automation and thoughtful design to create smarter living environments. His focus extends beyond installing technology. It is about understanding how people live and translating that understanding into homes that are more intuitive, connected and effortless. As smart living continues to move from luxury to expectation, Rajesh is helping shape how homes in the region experience technology, comfort and control.',
  },
  {
    name: 'Lohit Tummalapenta',
    role: 'Founder · Fare Eagle',
    sectors: ['Technology', 'Hospitality'],
    excerpt: 'Lohit is building FareEagle around a conversational travel-booking experience.',
    bio: 'Lohit Tummalapenta is building what he describes as India’s first AI-native travel agency, with FareEagle bringing flights across 100+ airlines, more than 500,000 hotels, buses and visas into a single conversational booking experience. Travellers can search and complete bookings through AI assistants, web, mobile, WhatsApp and Telegram, without the traditional complexity of forms and fragmented platforms. Beyond FareEagle, Lohit is building Zagget and several other technology platforms across commerce, messaging and data, while working across AI model evaluation, custom software and application security. His work reflects a clear focus on rethinking everyday systems through technology and building products designed for the way people increasingly live and transact.',
  },
  {
    name: 'Girnar Mobiles',
    role: 'Managing Partner · Technology retail',
    sectors: ['Retail', 'Technology'],
    excerpt: 'Girnar Mobiles combines smartphones, gadgets and a curated premium technology retail experience in Guntur.',
    bio: 'Girnar Mobiles has built a distinctive position in Guntur’s premium technology retail space, bringing together smartphones, gadgets and a carefully curated ownership experience. Alongside authorised distribution for brands including vivo, realme, TECNO, Lava, Nothing, DJI and HP, the business has also developed its own brand, NEVI, reflecting its ambition to build beyond retail and create a distinct identity in the technology space. Its offering spans new, open-box, demo and certified pre-owned devices, giving customers access to premium technology across different needs and budgets. With the sensibility of a luxury gadget house, Girnar Mobiles is building a category where technology, trust, choice and service come together.',
  },
  {
    name: 'Manohar Kondisetty',
    role: 'Managing Director · KVR Electricals',
    sectors: ['Infrastructure'],
    excerpt: 'Manohar is developing KVR Electricals as a lighting and illumination manufacturing business.',
    bio: 'Manohar Kondisetty is shaping KVR Electricals into a growing force in India’s lighting and illumination industry, bringing together engineering knowledge and a decade of business experience. As Managing Director, he has led the company from a regional operation to a growing manufacturing business with a presence across 26 states in India and three international markets. His focus remains firmly on building reliable, practical lighting solutions that serve diverse applications, while strengthening the manufacturing capabilities behind them. His journey reflects a clear understanding of what it takes to build a product business: strong technical foundations, consistent quality and the ability to take a locally built enterprise into wider markets.',
  },
  {
    name: 'Thunuguntla & Associates',
    role: 'Tax Advisor & Consultant',
    sectors: ['Professional services', 'Finance'],
    excerpt: 'The practice works across GST, Income Tax and cross-border taxation, connecting advisory work with technology.',
    bio: 'With over a decade of experience across Direct and Indirect Taxation, he works at the intersection of tax expertise, business advisory and technology. His practice spans GST advisory and litigation, Income Tax representation, and NRI and US cross-border taxation, supporting clients across manufacturing, exports, healthcare and MSMEs. What distinguishes his approach is the use of technology to make complex tax matters more accessible and actionable. From simplifying compliance to navigating disputes and cross-border requirements, his focus is on helping businesses stay informed, structured and prepared for what lies ahead.',
  },
  {
    name: 'Karumanchi & Associates',
    role: 'Business Capital Advisor',
    sectors: ['Finance'],
    excerpt: 'The firm advises businesses on working capital and structured finance.',
    bio: 'Karumanchi & Associates works at the intersection of capital, credit and business growth, helping companies access the funding required to strengthen operations and expand with confidence. With experience spanning more than ₹100 crore in loan facilitation, the firm advises businesses on working capital and structured finance while working with established corporate and MNC clients. Its strength lies in understanding the financial requirements behind a growing business and connecting those requirements with the right capital solutions. By bringing financial expertise and access to funding together, Karumanchi & Associates plays a critical role in helping businesses unlock their next stage of growth.',
  },
  {
    name: 'Subhash',
    role: 'Corporate Insurance Advisor · Nikith Marketing',
    sectors: ['Finance'],
    excerpt: 'Subhash works with organisations on corporate insurance and employee wellbeing solutions.',
    bio: 'Subhash works at the intersection of corporate insurance and employee wellbeing, helping organisations build stronger protection frameworks for their people. His work spans employee health and insurance solutions, with a growing portfolio of prominent companies across South India. For him, insurance is not simply a financial safeguard. It is part of how organisations demonstrate responsibility towards the people who build them. By bringing structured insurance solutions into the workplace, he helps businesses create greater security, confidence and continuity for their employees while building long-term relationships with organisations across the state.',
  },
  {
    name: 'Pradeep Jain',
    role: 'Managing Partner · Elite Electricals',
    sectors: ['Infrastructure', 'Retail'],
    excerpt: 'Pradeep Jain built Elite Electricals around electrical hardware, dependable products and customer relationships.',
    bio: 'Electrical infrastructure is one of those businesses that quietly keeps a city moving. Pradeep Jain has built Elite Electricals in Guntur around that essential role, serving customers with electrical hardware and products across a category where quality, reliability and availability matter every day. Established in 2013, the business has grown its presence in Brodipet by staying closely connected to customer requirements and the evolving needs of the electrical market. Through Elite Electricals, Pradeep brings a practical understanding of the industry and a business built around dependable products, relationships and consistent service.',
  },
  {
    name: 'Venkata Durga Iron & Hardware Merchants',
    role: 'Chief Operations Officer · Hardware and plywood',
    sectors: ['Construction', 'Retail'],
    excerpt: 'A five-generation hardware and plywood business serving construction and interior design needs.',
    bio: 'Built over a century and carried across five generations, this hardware and plywood business represents the enduring value of trust, consistency and relationships. By combining traditional business values with modern management practices, the organisation has built a strong reputation for quality products and dependable service across the construction and interior design sectors. Its journey reflects a simple principle: a legacy is not preserved by standing still. It is strengthened by evolving with the needs of every generation while holding on to the standards that earned trust in the first place. Today, the focus remains on building the next chapter of a legacy defined by quality, reliability and customer trust.',
  },
  {
    name: 'Prasanth Reddy',
    role: 'Co-Founder · Stuff Mama',
    sectors: ['Hospitality'],
    excerpt: 'Prasanth Reddy is the co-founder behind restaurant brand Stuff Mama.',
    bio: 'Prasanth Reddy is the co-founder and driving force behind Stuff Mama, a fast-growing restaurant brand that has expanded to 15+ franchise outlets and five company-owned outlets across Hyderabad. His work with Stuff Mama reflects his ability to take a food concept beyond a single location and build it into a scalable business. With a strong focus on expansion, operational discipline and consistency across outlets, he continues to build Stuff Mama as a brand with the potential to grow across markets while retaining the character that made it successful.',
  },
  {
    name: 'Praveen Yaganti',
    role: 'Growth Consultant · Prudent Capital',
    sectors: ['Finance', 'Technology'],
    excerpt: 'Praveen works across financial advisory, lending and technology-led financial services.',
    bio: 'Praveen Yaganti is building his work around a simple idea: financial services should make it easier for people and businesses to move forward. As part of the team behind Moneyy, he is working at the intersection of borrowing, banking and investing, bringing financial products and guidance closer to the way modern customers actually make decisions. His experience across financial advisory, fundraising and lending gives him a practical understanding of the challenges faced by individuals and growing businesses. Alongside Moneyy, his work with Prudent Capital and Pru Tech Solutions reflects a broader interest in combining finance, technology and business growth.',
  },
  {
    name: 'Tadisetti Sivakumar',
    role: 'Managing Partner · Golden Properties',
    sectors: ['Real estate'],
    excerpt: 'Sivakumar focuses on open-plot developments and a long-term view of regional real estate.',
    bio: 'Tadisetti Sivakumar is shaping Golden Properties with a long-term view of real estate, focusing on open-plot developments that bring together location, opportunity and lasting value. As Managing Partner, he operates in a sector closely connected to the growth of emerging regions, helping investors identify land with the potential to become part of the next phase of development. His approach is grounded in understanding market movement, recognising future growth corridors and building confidence around every investment decision. Through Golden Properties, Sivakumar continues to build a business where real estate is viewed not merely as a transaction, but as an opportunity to participate in the growth and transformation of a region.',
  },
  {
    name: 'Dr. M. Vinod Kumar',
    role: 'Orthopaedician & Joint Replacement Surgeon · Amrutha Hospitals',
    sectors: ['Healthcare'],
    excerpt: 'An orthopaedic specialist involved in building specialist care and medical infrastructure at Amrutha Hospitals.',
    bio: 'Dr. M. Vinod Kumar represents a generation of healthcare leaders who see medicine not only as a profession, but as an institution-building responsibility. As an orthopaedic specialist and a key figure behind Amrutha Hospitals, he has helped build a healthcare institution in Guntur around specialist expertise, modern medical infrastructure and accessible patient care. His work in orthopaedics, including joint replacement, sits alongside a broader vision for comprehensive healthcare through Amrutha Hospitals, which today brings multiple specialist departments and advanced care under one roof.',
  },
];

const featured = [
  { sector: 'Healthcare', name: 'Dr. Mamatha Rayapati', role: 'Deputy Managing Director · Aster Ramesh Hospital' },
  { sector: 'Technology', name: 'Lohit Tummalapenta', role: 'Founder · Fare Eagle' },
  { sector: 'Construction', name: 'Tara Chand', role: 'Managing Director · TM Constructions' },
];

const pillars = [
  { title: 'Collaboration', copy: 'Different expertise creates room to exchange ideas and identify opportunities to work together.' },
  { title: 'Trusted relationships', copy: 'Purposeful connections can be built through conversation, consistency and mutual support.' },
  { title: 'Shared learning', copy: 'Members can learn from perspectives beyond their own industries.' },
  { title: 'Regional growth', copy: 'A connected business community can help shape stronger opportunities in Guntur and the wider region.' },
];

const allSectors = [...new Set(members.flatMap((m) => m.sectors))].sort();

const eyebrow = 'text-xs font-semibold uppercase tracking-[0.18em]';

export default function Members() {
  useSEO({
    title: 'Meet the First Group of City Partners',
    description: 'Business leaders building trusted connections and new opportunities together in Guntur. Explore the first NIA Guntur group.',
    keywords: 'NIA Guntur Members, Network In Action Guntur Community, City Partners',
  });

  const [query, setQuery] = useState('');
  const [sector, setSector] = useState('');

  const q = query.trim().toLowerCase();
  const visible = members.filter(
    (m) =>
      (!sector || m.sectors.includes(sector)) &&
      (!q || [m.name, m.role, m.excerpt, m.bio, ...m.sectors].join(' ').toLowerCase().includes(q))
  );

  return (
    <div className="bg-nia-ivory text-nia-black">
      {/* Hero */}
      <section className="relative overflow-hidden text-white bg-[linear-gradient(110deg,#0E1C40_0%,#152955_65%,#24375c_100%)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_83%_26%,#e8772238_0,transparent_25%),repeating-linear-gradient(130deg,transparent_0_54px,#ffffff0b_55px_56px)]"
        />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12 grid items-center gap-10 pt-36 pb-20 md:grid-cols-[1.2fr_.8fr] md:pt-40 md:pb-28">
          <AnimatedSection>
            <p className={`${eyebrow} mb-6 text-[#F4AD78]`}>Network in Action · Guntur</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] leading-[1.07] max-w-[770px]">
              Meet the First Group of City Partners
            </h1>
            <p className="mt-7 max-w-xl font-light leading-relaxed text-white/85">
              Business leaders building trusted connections and new opportunities together in Guntur.
            </p>
            <a
              href="#members"
              className="mt-9 inline-flex rounded-full bg-nia-orange px-7 py-4 font-semibold text-nia-black transition hover:brightness-110"
            >
              Explore the members ↓
            </a>
          </AnimatedSection>
          <div className="relative hidden min-h-80 items-center justify-center md:flex" aria-hidden="true">
            <div className="absolute h-72 w-72 rounded-full border border-white/20" />
            <div className="absolute h-56 w-56 rounded-full border border-white/30" />
            <div className="absolute h-40 w-40 rounded-full border border-nia-orange/60" />
            <span className="text-7xl font-bold tracking-[-0.09em] text-white/90">
              NIA<span className="text-nia-orange">.</span>
            </span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-12 grid gap-8 py-20 md:grid-cols-[.7fr_1.3fr] md:py-24">
        <AnimatedSection>
          <p className={`${eyebrow} mb-4 text-[#A84B07]`}>A shared table</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.04em] leading-tight">
            Different fields.
            <br />
            Shared ambition.
          </h2>
        </AnimatedSection>
        <AnimatedSection className="border-l-2 border-nia-orange pl-6 md:pl-9">
          <p className="max-w-2xl font-light leading-[1.85] text-nia-gray">
            The first NIA Guntur group brings together leaders working across healthcare, real estate, automotive,
            education, technology, finance, construction, interiors, hospitality, retail and professional services.
            Each brings a different perspective to a space built for meaningful business relationships.
          </p>
        </AnimatedSection>
      </section>

      {/* Featured */}
      <section className="bg-white py-20">
        <AnimatedSection className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <p className={`${eyebrow} mb-3 text-[#A84B07]`}>A closer look</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.04em] mb-4">Across the group</h2>
          <p className="mb-9 max-w-2xl font-light leading-relaxed text-nia-gray">
            A selection of the perspectives represented here. Explore the complete directory below.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {featured.map((f) => (
              <article key={f.name} className="rounded-2xl border border-nia-border bg-nia-ivory p-7">
                <span className={`${eyebrow} text-[#A84B07]`}>{f.sector}</span>
                <h3 className="mt-8 text-lg font-bold">{f.name}</h3>
                <p className="mt-2 text-sm font-light text-nia-gray">{f.role}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Directory */}
      <section id="members" className="scroll-mt-20 max-w-[1200px] mx-auto px-6 lg:px-12 py-20 md:py-24">
        <p className={`${eyebrow} mb-3 text-[#A84B07]`}>The directory</p>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.04em]">Meet the City Partners</h2>
            <p className="mt-3 font-light text-nia-gray">Explore the people and organisations in the first group.</p>
          </div>
          <span className="text-sm text-nia-gray" aria-live="polite">
            {visible.length} {visible.length === 1 ? 'profile' : 'profiles'}
          </span>
        </div>

        <div className="mb-7 flex flex-col gap-4 sm:flex-row">
          <div className="flex-1">
            <label htmlFor="member-search" className="mb-2 block text-sm font-semibold">
              Search members
            </label>
            <input
              id="member-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Name, organisation or keyword"
              autoComplete="off"
              className="w-full rounded-xl border border-[#CBC6BF] bg-white px-4 py-3 font-light focus:outline-none focus:border-nia-orange"
            />
          </div>
          <div className="sm:w-64">
            <label htmlFor="sector-filter" className="mb-2 block text-sm font-semibold">
              Filter by sector
            </label>
            <select
              id="sector-filter"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="w-full rounded-xl border border-[#CBC6BF] bg-white px-4 py-3 focus:outline-none focus:border-nia-orange"
            >
              <option value="">All sectors</option>
              {allSectors.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        {visible.length === 0 && (
          <p className="rounded-xl border border-nia-border bg-white p-8 text-nia-gray" role="status">
            No profiles match your search. Try another term or sector.
          </p>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {visible.map((m) => (
            <details
              key={m.name}
              className="group rounded-2xl border border-nia-border bg-white p-6 transition duration-200 hover:-translate-y-[3px] hover:border-[#e8ad80] hover:shadow-[0_16px_38px_#0d0d0d0b]"
            >
              <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className={`${eyebrow} text-[#A84B07]`}>{m.sectors.join(' · ')}</span>
                <h3 className="mt-5 font-bold">{m.name}</h3>
                <p className="mt-1 text-sm text-nia-gray">{m.role}</p>
                <p className="mt-5 text-sm leading-7 text-nia-gray line-clamp-3 group-open:hidden">{m.excerpt}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-[#A84B07] group-open:hidden">
                  Read full biography +
                </span>
                <span className="mt-5 hidden text-sm font-semibold text-[#A84B07] group-open:inline-block">
                  Show less −
                </span>
              </summary>
              <p className="mt-5 border-t border-nia-border pt-5 text-sm leading-7 text-nia-gray">{m.bio}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Purpose */}
      <section className="bg-white py-20 md:py-24">
        <AnimatedSection className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <p className={`${eyebrow} mb-3 text-[#A84B07]`}>The purpose</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.04em] mb-10">Why this group matters</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="border-t-2 border-nia-orange pt-5">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-3 text-sm font-light leading-7 text-nia-gray">{p.copy}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Contact */}
      <section className="bg-[#0E1C40] py-20 text-white md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid gap-12 md:grid-cols-2">
          <div>
            <p className={`${eyebrow} mb-4 text-[#F4AD78]`}>Get in touch</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.04em]">Start a conversation with NIA Guntur.</h2>
            <p className="mt-6 max-w-md font-light leading-relaxed text-white/80">
              Interested in learning more about the first group? Reach out using the details here.
            </p>
          </div>
          <address className="not-italic md:pt-10">
            <p className={`${eyebrow} mb-3 text-[#F4AD78]`}>Call</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {['+91 9121315444', '9703356332', '9885050850'].map((n) => (
                <a key={n} href={`tel:+91${n.replace(/\D/g, '').slice(-10)}`} className="underline underline-offset-4 hover:text-[#F4AD78]">
                  {n}
                </a>
              ))}
            </div>
            <p className={`${eyebrow} mb-3 mt-8 text-[#F4AD78]`}>Email &amp; online</p>
            <a href="mailto:networkinactionguntur@gmail.com" className="block break-all underline underline-offset-4 hover:text-[#F4AD78]">
              networkinactionguntur@gmail.com
            </a>
            <p className={`${eyebrow} mb-3 mt-8 text-[#F4AD78]`}>Visit</p>
            <p className="max-w-sm leading-7">4th Floor, Icon Spaces, 6th Ln, Brodipet, Guntur, Andhra Pradesh 522002</p>
          </address>
        </div>
      </section>
    </div>
  );
}
