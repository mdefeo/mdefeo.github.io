import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { AboutPage, CVPage, HomePage, MusicPage, PortfolioPage } from './pages/Index';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout><HomePage /></Layout>}
        />
        <Route
          path="/about"
          element={<Layout><AboutPage /></Layout>}
        />
        <Route
          path="/cv"
          element={<Layout><CVPage /></Layout>}
        />
        <Route
          path="/music"
          element={<Layout><MusicPage /></Layout>}
        />
        <Route
          path="/portfolio"
          element={<Layout><PortfolioPage /></Layout>}
        />
      </Routes>
    </Router>
  );
};

export default App;
