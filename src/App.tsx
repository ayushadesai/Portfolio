import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import PageTransition from './components/PageTransition';
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
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
