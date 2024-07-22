import React, { useState } from 'react';
import './TabBar.css';
import ProjectTab from './ProjectTab.js'
import AboutTab from './AboutTab.js'

const TabBar = () => {
  const [activeTab, setActiveTab] = useState('Projects');

  const renderContent = () => {
    switch (activeTab) {
      case 'Projects':
        return <ProjectTab />;
      case 'About':
        return <AboutTab />;
      default:
        return <ProjectTab />;
    }
  };

  return (
    <div className="tab-bar-container">
      <div className="tab-bar">
        <button onClick={() => setActiveTab('Projects')} className={activeTab === 'Projects' ? 'active' : ''}>Projects</button>
        <button onClick={() => setActiveTab('About')} className={activeTab === 'About' ? 'active' : ''}>About Me</button>
      </div>
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabBar;
