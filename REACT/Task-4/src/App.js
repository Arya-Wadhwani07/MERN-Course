import React, { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
          setUsers(data.users);
      });
  }, []);

  return (
    <div>
      <h1>User Records</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Blood Group</th>
            <th>Height</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.age}</td>
                <td>{user.phone}</td>
                <td>{user.bloodGroup}</td>
                <td>{user.height}</td>
                <td>{user.weight}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No user records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
