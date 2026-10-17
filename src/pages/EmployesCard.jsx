import { Link } from "react-router-dom";


function EmployeeCard(props) {
  const user = props.user;

  return (
    <div className="card">
      <img src={user.image} alt="employee" />
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <p>{user.company.title}</p>
      <p>{user.company.department}</p>
      <Link to={"/employees/" + user.id}>View profile</Link>
    </div>
  );
}

export default EmployeeCard;