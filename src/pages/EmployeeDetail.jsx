import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function EmployeeDetail() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function APIcall() {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        const data = await response.json();
        setEmployee(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    }

    APIcall();
  }, [id]);

  if (loading) {
    return <p>Loading employee...</p>;
  }

  if (error || !employee) {
    return (
      <div className="employee-detail">
        <p>Employee not found.</p>
        <Link to="/employees">Back to employees</Link>
      </div>
    );
  }

  return (
    <div className="employee-detail">
      <h1>
        {employee.firstName} {employee.lastName}
      </h1>
      <img
        className="employee-detail-image"
        src={employee.image}
        alt={`${employee.firstName} ${employee.lastName}`}
      />
      <p>Email: {employee.email}</p>
      <p>Department: {employee.company.department}</p>
      <p>Role: {employee.company.title}</p>
      <p>Phone: {employee.phone}</p>
      <Link to="/employees">Back to employees</Link>
    </div>
  );
}

export default EmployeeDetail;
