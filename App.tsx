import React from 'react';
import StarBackground from './components/StarBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import InspirationSection from './components/InspirationSection';
import RSVPSection from './components/RSVPSection';
import Footer from './components/Footer';

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

        {/* Hidden Sections as per request */}
        {/* 
        <div id="alumni">
            <AlumniSection />
        </div>
        <div id="schedule">
            <EventMap />
        </div>
        <div id="register">
            <RegistrationForm />
        </div> 
        */}
      </main>

      <Footer />
    </div>
  );
};

export default App;