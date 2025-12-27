import React from 'react';
import StarBackground from './StarBackground';
import Navbar from './Navbar';
import Hero from './Hero';
import ProblemSection from './ProblemSection';
import InspirationSection from './InspirationSection';
import RSVPSection from './RSVPSection';
import Footer from './Footer';
import AlumniSection from './AlumniSection';
import EventMap from './EventMap';
import RegistrationForm from './RegistrationForm';

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
        
        {/* Fitur Utama */}
        <EventMap />
        <AlumniSection />
        
        <InspirationSection />
        
        {/* ID Card Generator */}
        <RegistrationForm />
        
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