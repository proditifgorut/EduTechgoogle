import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PlaceholderPage from './pages/PlaceholderPage';
import PricingPage from './pages/PricingPage';
import SecurityPage from './pages/SecurityPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="workspace" element={<PlaceholderPage />} />
        <Route path="cloud" element={<PlaceholderPage />} />
        <Route path="features" element={<PlaceholderPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="security" element={<SecurityPage />} />
        <Route path="updates" element={<PlaceholderPage />} />
        <Route path="documentation" element={<PlaceholderPage />} />
        <Route path="help-center" element={<PlaceholderPage />} />
        <Route path="blog" element={<PlaceholderPage />} />
        <Route path="community" element={<PlaceholderPage />} />
        <Route path="privacy-policy" element={<PlaceholderPage />} />
        <Route path="terms-of-service" element={<PlaceholderPage />} />
        <Route path="cookie-policy" element={<PlaceholderPage />} />
        <Route path="*" element={<PlaceholderPage />} />
      </Route>
    </Routes>
  );
}

export default App;
