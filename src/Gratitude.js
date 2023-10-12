import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Gratitude(props) {
  const location = useLocation();

  const name = location.state?.data_name;
  const email = location.state?.data_email;
  const comment = location.state?.data_comment;

  return (
    <div className="contact_me">
      <label>
        <h4>Your name: {name}</h4>
        <h4>Your e-mail: {email}</h4>
        <h4 style={{ wordWrap: "break-word" }}>Your comment: {comment}</h4>
        <h4>{props.text}</h4>
      </label>
      <div className="submit">
        <Link className="link-back" to="/">
          Back to CV
        </Link>
      </div>
    </div>
  );
}
