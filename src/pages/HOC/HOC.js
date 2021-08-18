import React, { useState } from "react";
import Modal from "./Modal";
import Login from "../Login/Login";
import Register from "../Register/Register";

// HOC: 1 component dong vai tro tham so
export default function HOC(props) {
  const [component, setComponent] = useState(<Login />);
  return (
    <div>
      <button
        data-toggle="modal"
        onClick={() => {
          setComponent(<Login />);
        }}
        data-target="#modelId"
        className="btn btn-danger"
      >
        Login
      </button>
      <button
        onClick={() => {
          setComponent(<Register />);
        }}
        data-toggle="modal"
        data-target="#modelId"
        className="btn btn-success"
      >
        Register
      </button>

      <Modal component={component} />
    </div>
  );
}
