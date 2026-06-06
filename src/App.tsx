import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tasks from './components/Tasks';
import Building from './components/Building';
import Journey from './components/Journey';
import Footer from './components/Footer';
import TaskDetail from './components/TaskDetail';

function ScrollHandler() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Delay slightly to ensure elements are rendered
      setTimeout(() => {
        const id = hash.replace('', ''); // keep the hash # in querySelector
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
}

function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-24 md:space-y-32">
        <Hero />
        <Tasks />
        <Building />
        <Journey />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollHandler />
      <div className="font-sans min-h-screen bg-stone-50 selection:bg-accent-peach/20" id="top">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task/:id" element={<TaskDetail />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

