import React, { lazy, Suspense } from 'react';
import StarBackground from './StarBackground';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';

// Lazy load components that are below the fold
const ProblemSection = lazy(() => import('./ProblemSection'));
const InspirationSection = lazy(() => import('./InspirationSection'));
const RegistrationForm = lazy(() => import('./RegistrationForm'));
const AlumniSection = lazy(() => import('./AlumniSection'));
const RSVPSection = lazy(() => import('./RSVPSection'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pastel-yellow"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-pastel-pink selection:text-black">
      <StarBackground />
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        {/* Lazy loaded sections with Suspense */}
        <Suspense fallback={<LoadingFallback />}>
          <ProblemSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <InspirationSection />
        </Suspense>


        {/* Alumni Section - Moved after Registration */}
        {/* <Suspense fallback={<LoadingFallback />}>
          <AlumniSection />
          </Suspense> */}

        {/* RSVP Section - Focused Content */}
        <Suspense fallback={<LoadingFallback />}>
          <div id="rsvp">
            <RSVPSection />
          </div>
        </Suspense>

        {/* ID Card Generator */}
        <Suspense fallback={<LoadingFallback />}>
          <RegistrationForm />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default App;