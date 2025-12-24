import React from 'react';
import StarBackground from './components/StarBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import InspirationSection from './components/InspirationSection';
import AlumniSection from './components/AlumniSection';
import EventMap from './components/EventMap';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-pastel-pink selection:text-black">
      <StarBackground />
      <Navbar />
      
      <main>
        <Hero />
        <ProblemSection />
        <InspirationSection />
        <div id="alumni">
            <AlumniSection />
        </div>
        <div id="schedule">
            <EventMap />
        </div>
        <div id="register">
            <RegistrationForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;