import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import './TeamPage.css';

const TeamPage = () => {
  const teamMembers = [
    { name: 'Person A', title: 'President', picture: '/team/alice.jpg' },
    { name: 'Person B', title: 'Position', picture: '/team/bob.jpg' },
    { name: 'Person C', title: 'Position', picture: '/team/cathy.jpg' },
    { name: 'Person D', title: 'Position', picture: '/team/david.jpg' },
  ];

  return (
    <div className="meet-the-team-page">
      <h1 className="page-heading">Meet the Team</h1>
      <div className="team-members-grid">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            title={member.title}
            picture={member.picture}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
