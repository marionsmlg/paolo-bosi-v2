import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Atelier from './pages/Atelier';
import Presse from './pages/Presse';
import Expositions from './pages/Expositions';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/atelier" element={<Atelier />} />
          <Route path="/presse" element={<Presse />} />
          <Route path="/expositions" element={<Expositions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;