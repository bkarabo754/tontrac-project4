import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="flex flex-col items-center mb-5">
      <img
        src={user.image}
        alt={user.name}
        className="w-20 h-20 rounded-full"
      />
    </div>
  );
};

export default Profile;
