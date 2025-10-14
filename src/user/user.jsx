import React from 'react';
import './user.css'; 

const User = ({ userData }) => {
  return (
    <div className="user-card">
      <h2 className="user-name">
        {userData.firstName} {userData.lastName}
      </h2>
      <p className="user-title">{userData.title}</p>
    </div>
  );
};

export default User;
