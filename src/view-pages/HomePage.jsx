import React from 'react';
import Dashboard from '../components/Layout/Dashboard';
import Footer from '../components/Layout/Footer';
import '.././style/PageLayout.css';
import '../App.css';
import HomeContent from '../components/Home/HomeContent';

const HomePage = () => {
  return (
    <div className="body">
      <div style={{ display: 'flex', width: '100%' }}>
        <Dashboard />
        <HomeContent />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
