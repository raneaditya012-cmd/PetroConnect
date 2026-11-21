import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';
import ServicesPage from './components/ServicesPage'; // Import ServicesPage component

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/services" element={<ServicesPage />} /> {/* Route for Services page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
