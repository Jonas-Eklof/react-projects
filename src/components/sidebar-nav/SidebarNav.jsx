import React from "react";
import { Link } from "react-router-dom";
import "./SidebarNav.css";

export default function SidebarNav() {
  return (
    <ul className="sidebar-nav">
      <Link to="/react-projects/">
        <li>Profile Card</li>
      </Link>
      <Link to="/react-projects/ParentProfileCard">
        <li>Parent Profile Card</li>
      </Link>
      <Link to="/react-projects/Ancestree">
        <li>Ancestree</li>
      </Link>
      <Link to="/react-projects/Counter">
        <li>Counter</li>
      </Link>
      <Link to="/react-projects/Timer">
        <li>Timer</li>
      </Link>
      <Link to="/react-projects/Greeting">
        <li>Greeting</li>
      </Link>
      <Link to="/react-projects/InputDisplay">
        <li>Input Display</li>
      </Link>
      <Link to="/react-projects/ButtonWithState">
        <li>Button with state</li>
      </Link>
      <Link to="/react-projects/MemoryGame">
        <li>Memory Game</li>
      </Link>
      <Link to="/react-projects/ToggleVisible">
        <li>Toggle visible</li>
      </Link>
      <Link to="/react-projects/Hackathon">
        <li>"Hackathon"</li>
      </Link>
      <Link to="/react-projects/ClassButtons">
        <li>ClassButtons</li>
      </Link>
      <Link to="/react-projects/PropStyleButton">
        <li>PropStyleButton</li>
      </Link>
      <Link to="/react-projects/ToDo">
        <li>ToDo-list</li>
      </Link>
    </ul>
  );
}
