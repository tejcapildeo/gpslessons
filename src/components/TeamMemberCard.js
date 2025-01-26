import React from 'react';
import './TeamMemberCard.css';

const TeamMemberCard = ({ name, title, picture }) => {
  return (
    <div className="team-member-card">
      <img src={picture} alt={`${name}'s picture`} className="team-member-picture" />
      <h3 className="team-member-name">{name}</h3>
      <p className="team-member-title">{title}</p>
    </div>
  );
};

export default TeamMemberCard;
