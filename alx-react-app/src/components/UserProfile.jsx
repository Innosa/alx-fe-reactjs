// src/components/UserProfile.jsx
// import React from 'react';
// import PropTypes from 'prop-types';

const UserProfile = (prop) => {
  return (
    <div>
      <h2>{prop.name}</h2>
      <p>Age: {prop.age}</p>
      <p>Bio: {prop.bio}</p>
    </div>
  );
};

export default UserProfile;
