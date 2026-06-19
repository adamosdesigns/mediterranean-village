/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Amenities from './components/Amenities';
import Lifestyle from './components/Lifestyle';
import Contact from './components/Contact';
import WelcomeGuide from './components/WelcomeGuide';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="amenities" element={<Amenities />} />
          <Route path="lifestyle" element={<Lifestyle />} />
          <Route path="contact" element={<Contact />} />
          <Route path="welcome-guide" element={<WelcomeGuide />} />
        </Route>
      </Routes>
    </Router>
  );
}
