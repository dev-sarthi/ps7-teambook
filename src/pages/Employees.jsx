import { useState, useEffect } from "react";
import EmployeeCard from "../components/EmployeeCard";

function Employees() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(function () {
    fetch("https://dummyjson.com/users?limit=30")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setUsers(data.users);
        setLoading(false);
      })
      .catch(function () {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading employees...</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  const cards = [];

  for (let i = 0; i < users.length; i++) {
    const name = `${users[i].firstName} ${users[i].lastName}`;
    const lowerName = name.toLowerCase();
    const lowerSearch = search.toLowerCase();

    if (lowerName.includes(lowerSearch)) {
      cards.push(<EmployeeCard key={users[i].id} user={users[i]} />);
    }
  }

  let message = null;
  if (cards.length === 0) {
    message = <p>No employees found</p>;
  }

  return (
    <div>
      <h1>Our Team</h1>

      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={function (e) {
          setSearch(e.target.value);
        }}
      />

      {message}

      <div className="grid">{cards}</div>
    </div>
  );
}

export default Employees;
