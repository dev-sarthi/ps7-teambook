import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Employees from './pages/Employees';
import EmployeeDetail from './pages/EmployeeDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/:id" element={<EmployeeDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
