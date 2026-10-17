import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function EmployeeDetail() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(
    function () {
      fetch(`https://dummyjson.com/users/${id}`)
        .then(function (res) {
          if (!res.ok) {
            throw new Error("Failed to fetch employee");
          }
          return res.json();
        })
        .then(function (data) {
          setEmployee(data);
          setLoading(false);
        })
        .catch(function () {
          setError(true);
          setLoading(false);
        });
    },
    [id]
  );

  if (loading) {
    return <p>Loading employee...</p>;
  }

  if (error || !employee) {
    return (
      <div>
        <p>Employee not found.</p>
        <Link to="/employees">Back to employees</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>
        {employee.firstName} {employee.lastName}
      </h1>
      <img src={employee.image} alt={`${employee.firstName} ${employee.lastName}`} />
      <p>Email: {employee.email}</p>
      <p>Department: {employee.company.department}</p>
      <p>Role: {employee.company.title}</p>
      <p>Phone: {employee.phone}</p>
      <Link to="/employees">Back to employees</Link>
    </div>
  );
}

export default EmployeeDetail;
