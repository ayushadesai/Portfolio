import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import PageTransition from './components/PageTransition';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route index element={<PageTransition><About /></PageTransition>} />
        <Route path="projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="resume" element={<PageTransition><Resume /></PageTransition>} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
