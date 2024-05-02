import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user")) || {};
  function handleSubmit(event) {
    event.preventDefault();
    const obj = {
      login: event.target[0].value,
      password: event.target[1].value,
    };
    if (obj.login === userData.login && obj.password === userData.password) {
      localStorage.setItem("registered", JSON.stringify(true));
      navigate("/");
    } else {
      alert("Login yoki parol noto'g'ri");
      localStorage.setItem("registered", JSON.stringify(false));
    }
  }
  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <b>Login</b>
        <input type="text" placeholder="Login" />
        <input type="password" placeholder="Password" />
        <button>Submit</button>
        <p>
          Don't have an account yet?{" "}
          <b onClick={() => navigate("/")}>Register</b>
        </p>
      </form>
    </div>
  );
};

export default Login;
