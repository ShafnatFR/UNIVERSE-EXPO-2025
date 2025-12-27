import React from 'react';
import StarBackground from './StarBackground';
import Navbar from './Navbar';
import Hero from './Hero';
import ProblemSection from './ProblemSection';
import InspirationSection from './InspirationSection';
import RSVPSection from './RSVPSection';
import Footer from './Footer';

// Note: AlumniSection, EventMap, and RegistrationForm are currently unused/commented out
// but if imported, they should also be imported from './'

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-pastel-pink selection:text-black">
      <StarBackground />
      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <ProblemSection />
        <InspirationSection />
        
        {/* RSVP Section - Focused Content */}
        <div id="rsvp">
          <RSVPSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;