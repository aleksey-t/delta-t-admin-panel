import EmailIcon from "./icons/EmailIcon";
import React from "react";
import PropTypes from "prop-types";

const Notification = (props) => {
  return (
    <div
      className={`ellipse ${
        props.showNotification ? "ellipse-notification" : ""
      }`}
    >
      <EmailIcon />
    </div>
  );
};

Notification.propTypes = {
  showNotification: PropTypes.bool,
};

export default Notification;
