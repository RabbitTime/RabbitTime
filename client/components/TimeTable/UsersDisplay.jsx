import React from 'react';

const UsersDisplay = ({ selectedSlots }) => {
  // Render the list of users
  const userNames = Object.keys(selectedSlots);

  return (
    <div>
      <h2>Users</h2>
      {userNames.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </div>
  );
};

export default UsersDisplay;