import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import NIAGuntur from './pages/NIAGuntur';
import Vision from './pages/Vision';
import CityPartners from './pages/CityPartners';
import SandeepN from './pages/SandeepN';
import VinodT from './pages/VinodT';
import Contact from './pages/Contact';
import Apply from './pages/Apply';
import Members from './pages/Members';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    
    <AnimatePresence>
       <ScrollToTop />
     
      <Routes location={location} key={location.pathname}>
        
        <Route path="/" element={<PT><Home /></PT>} />
        <Route path="/about-nia" element={<PT><NIAGuntur /></PT>} />
        <Route path="/vision" element={<PT><Vision /></PT>} />
        <Route path="/city-partners" element={<PT><CityPartners /></PT>} />
        <Route path="/city-partners/sandeep-n" element={<PT><SandeepN /></PT>} />
        <Route path="/city-partners/vinod-t" element={<PT><VinodT /></PT>} />
        <Route path="/contact" element={<PT><Contact /></PT>} />
        <Route path="/apply" element={<PT><Apply /></PT>} />
        <Route path="/members" element={<PT><Members /></PT>} />
        <Route path="/privacy-policy" element={<PT><PrivacyPolicy /></PT>} />
      </Routes>
    </AnimatePresence>
  );
}

function PT({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
