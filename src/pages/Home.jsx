import { Link } from "react-router-dom";

function Home() {
  return (
    <div> 
      <h1>Welcome to TeamBook</h1>
      <p>Find any employee and open their profile.</p>
      <Link to="/employees">
        View Employees
      </Link>
    </div>
  );
}

export default Home;