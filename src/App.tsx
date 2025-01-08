import { Suspense, lazy } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Footer } from './components/Footer/Footer';

// Ленивая загрузка компонентов
const About = lazy(() => import('./components/About/About').then(module => ({ default: module.About })));
const Projects = lazy(() => import('./components/Projects/Projects').then(module => ({ default: module.Projects })));
const Skills = lazy(() => import('./components/Skills/Skills').then(module => ({ default: module.Skills })));
const Contact = lazy(() => import('./components/Contact/Contact').then(module => ({ default: module.Contact })));

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;