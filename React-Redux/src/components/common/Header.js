import React from "react";
import { Link, IndexLink } from "react-router";

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">
        Home
      </IndexLink>
      {" | "}
      <IndexLink to="/courses" activeClassName="active">
        Courses
      </IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">
        About
      </Link>
    </nav>
  );
};

export default Header;
