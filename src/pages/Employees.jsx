import React from 'react';
import { useState, useEffect } from 'react';
import EmployeeCard from '../components/EmployeeCard';

function Employees() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function APIcall() {
      try {
        const response = await fetch('https://dummyjson.com/users?limit=30');
        const data = await response.json();
        setUsers(data.users || []);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    }

    APIcall();
  }, []);

  if (loading) {
    return <p>Loading employees...</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  const searchText = search.toLowerCase();
  const filteredUsers = users.filter((user) => {
    const name = `${user.firstName} ${user.lastName}`;
    return name.toLowerCase().includes(searchText);
  });

  return (
    <div className="employees-page">
      <h1>Our Team</h1>
      <input
        className="employees-search"
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.length === 0 && <p>No employees found</p>}

      <div className="employees-grid">
        {filteredUsers.map((user) => (
          <EmployeeCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Employees;
