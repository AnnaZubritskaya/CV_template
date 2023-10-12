import "./styles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
      }}
    >
      <div className="contact_me">
        <h2 className="contact_info">Your contact info</h2>
        <div style={{ margin: "5%" }}>
          <input
            className="input_boxes"
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
          <input
            className="input_boxes"
            type="text"
            placeholder="Enter your e-mail..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            className="input_boxes"
            type="text"
            placeholder="Comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <br />
        </div>
        <div className="submit">
          <Link
            className="link-back"
            to="/gratitude"
            state={{
              data_name: name,
              data_email: email,
              data_comment: comment
            }}
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
}
