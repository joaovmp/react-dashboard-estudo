import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartBar } from 'react-icons/fa';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <FaHome className="icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <FaChartBar className="icon" /> Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
