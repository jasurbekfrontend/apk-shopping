import React from "react";
import back from "../assets/svg/back.svg";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="navigate-back" onClick={() => navigate("/")}>
      <img src={back} alt="" />
    </button>
  );
};

export default BackButton;
