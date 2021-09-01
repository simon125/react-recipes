import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/user-wizard" className="nav-link">
            User Wizard
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/users1" className="nav-link">
            Users With State on bottom
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/users1a" className="nav-link">
            Users With State on top
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/users2" className="nav-link">
            Users With Context & edit in ctx
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/users2a" className="nav-link">
            Users With Context & edit locally
          </Link>
        </NavItem>
      </Nav>
    </div>
  );
};
