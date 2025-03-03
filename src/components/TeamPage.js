import React, { useState } from 'react';
import './TeamPage.css';
import TeamMemberCard from './TeamMemberCard';

const teamSections = [
  { id: 'president', name: 'President' },
  { id: 'operations', name: 'Operations' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'conference', name: 'Conference' },
  { id: 'finance', name: 'Finance' },
  { id: 'corporate', name: 'Corporate Relations' },
  { id: 'speakers', name: 'Speaker Series' },
  { id: 'web', name: 'Web/Communications' },
  { id: 'interns', name: 'Interns' }
];

// Team data (Replace with actual image URLs)
const teamData = {
  president: {
    directors: [{ name: 'Aishwarya Gupta', title: 'President', picture: '/headshots/aishwarya.jpg' }]
  },
  operations: {
    directors: [{ name: 'Maria Pham Ngoc', title: 'Operations Director', picture: '/headshots/maria.jpg' }]
  },
  marketing: {
    directors: [{ name: 'Rahul Gopeesingh', title: 'Marketing Director', picture: '/headshots/rahul.jpeg' }],
    executives: ['Saanch Madaan', 'Arushi Chhikara', 'Tarushi Kalra', 'Eleni Banta']
  },
  corporate: {
    directors: [{ name: 'Victoria Lin', title: 'Corporate Relations Director', picture: '/headshots/victoria_lin.jpg' }],
    executives: ['Shifa Hossain Sarker', 'Denise Ng', 'Prisha Ghai', 'Kabir Jaggi']
  },
  finance: {
    directors: [{ name: 'Ming Yang', title: 'Finance Director', picture: '/headshots/Ming.jpg' }]
  },
  speakers: {
    directors: [{ name: 'David Won', title: 'Speaker Series Director', picture: '/headshots/david_won.jpg' }],
    executives: ['Yugam Puri']
  },
  web: {
    directors: [
      { name: 'Lucy Zeng', title: 'Web Director', picture: '/headshots/lucy_zeng.jpg' },
      { name: 'Tej Capildeo', title: 'Web Director', picture: '/headshots/tej.jpeg' }
    ]
  },
  conference: {
    directors: [{ name: 'Afroze Kara', title: 'Conference Series Director', picture: '/headshots/afroze.jpg' }],
    executives: ['Rheanna Zhu', 'Nicole Sy', 'Jevon Ariel', 'Bell Corapcioglu', 'Josua Kim']
  },
  interns: {
    executives: [
      'Bennie Wang',
      'Eric Zhang',
      'Vishesh Poddar',
      'Amber Feddema',
      'Dylan Luong',
      'Hridayaansh Jain',
      'Salma Osman',
      'Josh Reiner',
      'Arturo Orozpe-Lopez'
    ]
  }
};

const TeamPage = () => {
  const [activeSection, setActiveSection] = useState('president');

  return (
    <div className="team-page">
      <h1 className="team-title">Meet Our Team</h1>

      {/* Navigation Buttons */}
      <div className="team-nav">
        {teamSections.map((section) => (
          <button
            key={section.id}
            className={`team-nav-button ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.name}
          </button> 
        ))}
      </div>

      {/* Team Members Section */}
      <div className="team-section">
        {/* Directors (Profile Cards) */}
        {teamData[activeSection]?.directors?.length > 0 && (
          <>
            { activeSection === 'web' ? <h2 className="team-subtitle">Directors</h2> :
             activeSection !== 'president' && <h2 className="team-subtitle">Director</h2>}
            <div className="team-card-container">
              {teamData[activeSection]?.directors.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </>
        )}

        {/* Executives (Text Only, No Profile Cards) */}
        {teamData[activeSection]?.executives?.length > 0 && (
          <>
            <h2 className="team-subtitle">{activeSection === 'interns' ? 'Interns' : 'Executives'}</h2>
            <ul className="team-member-list">
              {teamData[activeSection]?.executives.map((name, index) => (
                <li key={index} className="team-member-name">{name}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default TeamPage;
