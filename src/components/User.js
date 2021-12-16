import React from "react";

const User = ({ users }) => {
  return (
    <div>
      <h1>User Comp</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        {users.map((user) => (
          <tbody>
            <tr>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default User;
