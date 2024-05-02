import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    const obj = {
      name: event.target[0].value,
      login: event.target[1].value,
      password: event.target[2].value,
    };
    localStorage.setItem("user", JSON.stringify(obj));

    localStorage.setItem("registered", JSON.stringify(true));
    navigate("/");
  }
  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <b>Register</b>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Login" />
        <input type="password" placeholder="Password" />
        <button>Submit</button>
        <p>
          Already have an account?{" "}
          <b onClick={() => navigate("/login")}>Login</b>
        </p>
      </form>
    </div>
  );
};

export default Register;
