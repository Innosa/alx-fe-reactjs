// src/components/UserProfile.jsx
// import React from 'react';
// import PropTypes from 'prop-types';

const UserProfile = (prop) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2 style={{ color: "blue" }}>{prop.name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{prop.age}</span>
      </p>
      <p>
        Bio: <span style={{ color: "green" }}>{prop.bio}</span>
      </p>
    </div>
  );
};

export default UserProfile;
