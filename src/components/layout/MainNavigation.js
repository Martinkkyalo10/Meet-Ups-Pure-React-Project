import React from "react";
import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header>
      {/* logo section */}
      <div>Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <Link to="/favorites">My Favorites</Link>
        </ul>
      </nav>
    </header>
  );
}
