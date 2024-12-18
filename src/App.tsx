import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CVPage from './pages/CVPage';
import MusicPage from './pages/MusicPage';

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
      </Routes>
    </Router>
  );
};

export default App;
