import React from "react";

function UserCard({ user }) {
  return (
    <div>
      <h3>{user.name}</h3>
    </div>
  );
}

export default UserCard;