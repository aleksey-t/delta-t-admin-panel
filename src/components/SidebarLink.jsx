import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SidebarLink = (props) => {
  return (
    <div className="sidebar-link">
      <div className="icon">
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <Link to={props.to}>{props.linkText}</Link>
    </div>
  );
};

SidebarLink.propTypes = {
  icon: PropTypes.any,
  to: PropTypes.string,
  linkText: PropTypes.string,
};

export default SidebarLink;
