import "./header.css";
import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import Notification from "./Notification";

const Header = (props) => {
  return (
    <header className="header-bar">
      <Notification showNotification={true} />
      <div className="nick-name">{props.username}</div>
      <Button variant="primary" size="sm" className="send">
        Выход
      </Button>{" "}
    </header>
  );
};

Header.propTypes = {
  username: PropTypes.string,
  emailsNumber: PropTypes.number,
};

export default Header;
