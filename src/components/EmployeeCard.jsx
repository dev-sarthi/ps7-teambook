import React from 'react';
import { Link } from 'react-router-dom';

function EmployeeCard({ user }) {
  return (
    <div className="employee-card">
      <img
        className="employee-card-image"
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
      />
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <p>{user.company.title}</p>
      <p>{user.company.department}</p>
      <Link to={`/employees/${user.id}`}>View profile</Link>
    </div>
  );
}

export default EmployeeCard;
