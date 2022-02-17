import React from "react";
import { Col } from "react-bootstrap";

const Header = () => {
  return (
    <header className="header">
      <Col
        className="header-container"
        xs={8}
        sm={8}
        md={8}
        lg={8}
        xl={8}
        xxl={8}
      >
        <h1>To Do List</h1>
      </Col>
    </header>
  );
};

export default Header;
