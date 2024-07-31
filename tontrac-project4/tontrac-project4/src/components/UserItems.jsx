import React from "react";

const UserItems = ({ label, value }) => {
  return (
    <p>
      <strong>{label}</strong> {value}
    </p>
  );
};

export default UserItems;
